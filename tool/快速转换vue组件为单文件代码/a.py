import os
import re
paths = os.listdir('components')

def vue_div(lines):
    s = 0
    s_str = ['<template>', '</template>',
             '<script>', '</script>', '<style', '</style']
    template_part = ''
    script_part = ''
    style_part = ''
    # 三分
    for line in lines:
        if(s == 0):
            if(line.find(s_str[s]) != -1):
                s += 1
        elif(s == 1):
            if(line.find(s_str[s]) != -1):
                s += 1
            else:
                template_part += line
        elif(s == 2):
            if(line.find(s_str[s]) != -1):
                s += 1
        elif(s == 3):
            if(line.find(s_str[s]) != -1):
                s += 1
            else:
                script_part += line
        elif(s == 4):
            if(line.find(s_str[s]) != -1):
                s += 1
        elif(s == 5):
            if(line.find(s_str[s]) != -1):
                s += 1
            else:
                style_part += line
    return template_part,script_part,style_part

def camel2underline(camel):
    underline = re.sub(r'(?<=[a-z])[A-Z]',lambda m:'_'+m.group(),camel)
    return underline.lower()

def get_script(script):
    i = script.find('export default {') + len('export default {')
    j = script.rfind('}')
    return script[i:j]

def add_attr(template_part,style_part,attr_name):
    if(attr_name):
        template_part = re.sub(r'<\w+',lambda x:x.group()+' '+attr_name+' ',template_part)
        style_part = re.sub(r'\.?[\w|-]+(?=\s?{)',lambda x:x.group()+'['+attr_name+']', style_part)
    return template_part,style_part

def find_camel_template(template_part,script_part):
    rs = re.findall(r'\w*[A-Z]\w*',template_part)
    for r in rs:
        nr = camel2underline(r)
        template_part = template_part.replace(r,nr)
        script_part = script_part.replace(r,nr)
    return template_part,script_part

def complete(template_part):
    result = ''
    rs = re.findall(r'<\w+',template_part)
    k = 0
    for r in rs:
        # 剩余长度
        # 找到元素标签头
        i = template_part.find(r,k)
        j = template_part.find('>',i)
        if('/' in template_part[j-2:j]):
            # 需要补全
            # /////// k ---- i -- m(/) -- j -----
            m = template_part.rfind('/',j-2,j)
            result += template_part[k:m] + '></'+r[1:]+'>'
        else:
            result += template_part[k:j+1]
        # 下一个
        k = j + 1
    result += template_part[k:]

    return result

def find_camel_scrpit_prop(script_part):
    if('props:'in script_part):
        i = script_part.find('props:') + 6
        i = script_part.find('[',i) + 1
        j = script_part.find(']',i)
        props = script_part[i:j].split(',')
        for prop in props:
            prop = prop[prop.find('"')+1:prop.rfind('"')]
            nprop = camel2underline(prop)
            script_part = script_part.replace(prop,nprop)
    return script_part

def deal(lines,attr_name=""):
   # 一分为三
    template_part,script_part,style_part = vue_div(lines)

    # export 剥离
    script_part = get_script(script_part)

    # style 独立
    # 为所有元素添加属性 attr_name
    # 为所有style添加属性选择器
    template_part,style_part = add_attr(template_part,style_part,attr_name)

    # template驼峰变量、函数、模块查找
    # 对template和script均进行处理
    template_part,script_part = find_camel_template(template_part,script_part)

    # template />补全
    template_part = complete(template_part)

    return template_part,script_part,style_part


js_content = ''
js_component = ''
css_content = ''

for path in paths:
    with open('components/' + path, 'r', encoding='utf8') as f:
        lines = f.readlines()

    # 加工名字
    name = path[:path.find('.')]
    module_name = camel2underline(name)
    attr_name = 'vue-'+module_name.replace('_','-')

    template_part,script_part,style_part = deal(lines,attr_name)

    # script props查找驼峰并转化
    script_part = find_camel_scrpit_prop(script_part)

    # script name查找驼峰并转化
    # 略

    # 生成extend代码
    # 组合，输出
    vc = 'let {0} = Vue.extend({{\ntemplate:`\n{1}\n`,\n{2}\n}});\n\n'.format(
        module_name, template_part, script_part)
    # 生成component代码
    component = 'Vue.component("{0}",{0});\n'.format(module_name)

    js_content += vc
    js_component += component
    css_content += style_part

# 处理app
with open('App.vue', 'r', encoding='utf8') as f:
    lines = f.readlines()

template_part,script_part,style_part = deal(lines)

vm = 'let vm = new Vue({{\nel:"#app",\n{0}\n}});\n'.format(script_part)

js_content = js_content + vm
css_content = style_part + css_content

# 输出js
with open('result/main.js', 'w+', encoding='utf8') as f:
    f.write(js_content)
    f.write(js_component)

# 输出css
with open('result/main.css', 'w+', encoding='utf8') as f:
    f.write(css_content)

# 输出 html
with open('result/index.html', 'w+', encoding='utf8') as f:
    f.write('\
<!DOCTYPE html>\n\
<html lang="en">\n\
\n\
<head>\n\
    <meta charset="UTF-8">\n\
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n\
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n\
    <title>Document</title>\n\
</head>\n\
\n\
<body>\n\
\n' + template_part +'\
</body>\n\
<script src="vue.js"></script>\n\
<script src="main.js"></script>\n\
<link type="text/css" rel="styleSheet" href="main.css" />\n\
\n\
</html>')
