import requests

urls = [
    'http://img.nga.178.com/attachments/mon_202202/19/i2Qjdc-nohK7T8S35-2y.gif',
    'http://img.nga.178.com/attachments/mon_202202/19/i2Qjdc-l6ldK8T8S30-2w.gif',
    'http://img.nga.178.com/attachments/mon_202202/19/i2Qjdc-9cowK8T8S3d-2v.gif',
    'http://img.nga.178.com/attachments/mon_202202/19/i2Qjdc-ksfkK8T8S2x-2v.gif',
    'http://img.nga.178.com/attachments/mon_202202/19/i2Qjdc-63heK8T8S31-2w.gif',
    'http://img.nga.178.com/attachments/mon_202202/19/i2Qjdc-gqnK7T8S32-2x.gif',
    'http://img.nga.178.com/attachments/mon_202202/19/i2Qjdc-gd1xK8T8S3h-2w.gif',
    'http://img.nga.178.com/attachments/mon_202202/19/i2Qjdc-jpf7K7T8S3b-2x.gif',
    'http://img.nga.178.com/attachments/mon_202202/19/i2Qjdc-890tK7T8S3g-2x.gif',
    'http://img.nga.178.com/attachments/mon_202202/19/i2Qjdc-lc5fK8T8S38-2x.gif',
    'http://img.nga.178.com/attachments/mon_202202/19/i2Qjdc-9m3xK7T8S3c-2x.gif',
    'http://img.nga.178.com/attachments/mon_202202/19/i2Qmosi-g6q0K8T8S3f-2y.gif',
    'http://img.nga.178.com/attachments/mon_202202/20/i2Qjdd-ibwgK7T8S37-2x.gif',
    'http://img.nga.178.com/attachments/mon_202202/20/i2Qjdd-jeqxK7T8S3a-2x.gif',
    'http://img.nga.178.com/attachments/mon_202202/20/i2Qjdd-8vi7K9T8S3g-2x.gif',
    'http://img.nga.178.com/attachments/mon_202202/20/i2Qjdd-4dbnK7T8S39-2x.gif',
    'https://img.nga.178.com/attachments/mon_202202/21/i2Qjde-ck8qK7T8S37-2x.gif',
    'https://img.nga.178.com/attachments/mon_202202/21/i2Qjde-ar3bK7T8S2x-2x.gif',
    'https://img.nga.178.com/attachments/mon_202202/21/i2Qjde-denxK9T8S3m-2x.gif',
    'https://img.nga.178.com/attachments/mon_202202/21/i2Qjde-5d4sK8T8S3e-2x.gif'
]

data = []
for i in range(len(urls)):
    url = urls[i]
    img_type = url[url.rfind('.'):]
    headers = {'user-agent': "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; AcooBrowser; .NET CLR 1.1.4322; .NET CLR 2.0.50727)"}
    r = requests.get(url, headers=headers, stream=True)
    if r.status_code == 200:
        # 将内容写入图片
        open(f'public/img/{i}{img_type}', 'wb').write(r.content)

    data.append({"src":f'img/{i}.gif',"url":url})

import json
json.dump(data,open('public/data.json', 'w+',encoding='utf-8'),ensure_ascii=False)