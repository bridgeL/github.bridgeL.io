(function(e){function n(n){for(var a,o,s=n[0],c=n[1],v=n[2],l=0,p=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(n);while(p.length)p.shift()();return r.push.apply(r,v||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,s=1;s<t.length;s++){var c=t[s];0!==i[c]&&(a=!1)}a&&(r.splice(n--,1),e=o(o.s=t[0]))}return e}var a={},i={app:0},r=[];function o(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=a,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)o.d(t,a,function(n){return e[n]}.bind(null,a));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var v=0;v<s.length;v++)n(s[v]);var u=c;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"08ba":function(e,n,t){"use strict";t("5d4f")},2901:function(e,n,t){},"32da":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("Tool",{attrs:{set_painter_code:e.set_painter_code,paint_clear:e.paint_clear,random:e.random,show:e.showChinese,set_random:e.set_random,set_show:e.set_show}}),t("div",{staticClass:"main"},[t("div",[t("p",[e._v("[z]切换显示 [r]切换顺序 [a][d][←][→]翻页")]),t("p",[e._v("设备页面宽度: "+e._s(e.width))])]),t("PageBtn",{attrs:{page:e.page,pageMax:e.pageMax,set_page:e.set_page}}),t("div",{staticClass:"words"},[t("WordContainer",{attrs:{words:e.showWords[0],showChinese:e.showChinese,painterCode:e.painterCode}}),t("WordContainer",{attrs:{words:e.showWords[1],showChinese:e.showChinese,painterCode:e.painterCode}})],1),t("PageBtn",{attrs:{page:e.page,pageMax:e.pageMax,set_page:e.set_page}})],1)],1)},r=[],o=(t("d3b7"),t("159b"),t("b64b"),t("fb6a"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"page-btns"},[t("button",{on:{click:e.sub}},[e._v("上一页")]),t("div",[e._v(e._s(e.page)+" / "+e._s(e.pageMax))]),t("button",{on:{click:e.add}},[e._v("下一页")])])}),s=[],c={name:"PageBtn",props:["page","pageMax","set_page"],methods:{add:function(){this.set_page(Math.min(this.page+1,this.pageMax))},sub:function(){this.set_page(Math.max(this.page-1,0))}}},v=c,u=(t("adef"),t("2877")),l=Object(u["a"])(v,o,s,!1,null,"cc616574",null),p=l.exports,d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container"},[t("button",{staticClass:"func-btn",on:{click:e.switch_random}},[e._v(e._s(e.randomNextStatus))]),t("button",{staticClass:"func-btn",on:{click:e.switch_show}},[e._v(e._s(e.showNextStatus))]),t("button",{staticClass:"func-btn",on:{click:e.switch_painter_container}},[e._v(" "+e._s(e.painterNextStatus)+" ")]),t("div",{directives:[{name:"show",rawName:"v-show",value:"关闭"==e.painterNextStatus,expression:"painterNextStatus == '关闭'"}],staticClass:"painter-container"},e._l(e.painters,(function(n,a){return t("button",{key:a,class:"painter "+n.color+(e.painterCode==n.code?" show":""),on:{click:function(t){return e.set_code(n.code)}}},[e._v(" "+e._s(n.name)+" ")])})),0)])},m=[],h={name:"Tool",data:function(){return{painterCode:0,painters:[{color:"red",name:"红",code:1},{color:"blue",name:"蓝",code:2},{color:"green",name:"绿",code:3},{color:"white",name:"清除全部",code:0}],painterNextStatus:"关闭"}},props:["set_painter_code","paint_clear","random","show","set_random","set_show"],methods:{set_code:function(e){0==e&&this.paint_clear(),this.painterCode==e&&(e=0),this.painterCode=e,this.set_painter_code(e)},switch_painter_container:function(){"关闭"==this.painterNextStatus?this.painterNextStatus="打开":this.painterNextStatus="关闭"},switch_random:function(){this.set_random(!this.random)},switch_show:function(){this.set_show(!this.show)}},computed:{randomNextStatus:function(){return this.random?"顺序":"乱序"},showNextStatus:function(){return this.show?"纯英":"中英"}}},f=h,g=(t("08ba"),Object(u["a"])(f,d,m,!1,null,"c2e9893c",null)),b=g.exports,y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",e._l(e.words,(function(n,a){return t("div",{key:a,staticClass:"word",class:"color"+n.group,on:{click:function(t){return e.paint(n)}}},[t("div",[t("a",{attrs:{href:"https://fanyi.baidu.com/#en/zh/"+n.key,target:"view_window"}},[e._v(" "+e._s(n.key)+" ")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showChinese,expression:"showChinese"}]},[e._v(" "+e._s(n.val)+" ")])])})),0)},w=[],_={name:"WordContainer",props:["words","showChinese","painterCode"],methods:{paint:function(e){0!=this.painterCode&&(e.group==this.painterCode?e.group=0:e.group=this.painterCode)}}},x=_,k=(t("e81d"),Object(u["a"])(x,y,w,!1,null,"57709e76",null)),C=k.exports,j={name:"App",data:function(){return{page:0,pageMax:0,words:[],showChinese:!0,width:0,painterCode:0,random:!1}},components:{PageBtn:p,Tool:b,WordContainer:C},created:function(){var e=this,n=t("6bbc");n.forEach((function(n){var t=[];n.forEach((function(e){var n=[];Object.keys(e).forEach((function(t){n.push({key:t,val:e[t],group:0})})),t.push(n)})),e.words.push(t)})),this.pageMax=this.words.length-1},mounted:function(){var e=this;document.addEventListener("keyup",this.keyupEvent),window.onresize=function(){return function(){e.width=document.body.clientWidth}()},this.width=document.body.clientWidth},destroyed:function(){document.removeEventListener("keyup",this.keyupEvent)},methods:{keyupEvent:function(e){console.log(e),"z"==e.key?this.showChinese=!this.showChinese:"a"==e.key||"ArrowLeft"==e.key?this.page=Math.max(0,this.page-1):"d"==e.key||"ArrowRight"==e.key?this.page=Math.min(this.pageMax,this.page+1):"r"==e.key&&(this.random=!this.random)},set_page:function(e){this.page=e},set_painter_code:function(e){this.painterCode=e},set_random:function(e){this.random=e},set_show:function(e){this.showChinese=e},paint_clear:function(){this.words[this.page].forEach((function(e){e.forEach((function(e){e.group=0}))}))},shuffle:function(e){for(var n=e.length,t=0;t<n-1;t++){var a=parseInt(Math.random()*(n-t)),i=e[a];e[a]=e[n-t-1],e[n-t-1]=i}return e}},computed:{showWords:function(){var e=this,n=this.words[this.page];if(this.random){var t=[];return n.forEach((function(n){t.push(e.shuffle(n.slice()))})),t}return n}}},M=j,O=(t("034f"),Object(u["a"])(M,i,r,!1,null,null,null)),S=O.exports,E=t("fe3c"),z=t.n(E);z.a.attach(document.body),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(S)}}).$mount("#app")},"5d4f":function(e,n,t){},"6bbc":function(e){e.exports=JSON.parse('[[{"abstract":"n.摘要a.抽象的","accord":"n./v.一致， 协定","accurate":"a.准确的，精确的","acid":"n.酸.a.酸的","adapt":"v.适应；改编，改写","adopt":"vt.采用，接受；收养","affect":"vt.影响，作用；感染","agent":"n.代理(商)；作用剂","allow":"vt.允许(…进入)，同意，考虑","alter":"v.改变，修改","annual":"a.年度的","anticipate":"v.预期(料)，期望","apparatus":"n.器械， 设备， 仪器，机构","apparent":"a.明显的；表面上的","appreciate":"v.赏识， 感激 vi.增值","approach":"v.接近.n.途径，方法","arise":"vi.产生； 出现；起因于","artificial":"a.人造的","aspect":"n.方面","assess":"vt.估定，评定","assignment":"n. 工作， 任务；分配， 指派","assist":"v.援助，帮助","associate":"v.联合，结交.n.伙伴.a.副的","association":"n.协会，联合","assume":"vt.假定，设想","attach":"v.附上","attempt":"n./vt.尝试，企图，努力","attentive":"a.注意的， 留意的","attract":"v.吸引，引起","attribute":"vt.(to)把…归因于.n.属性，品质","august":"n.八月(略作Aug)","auxiliary":"a.辅助的， 补助的","barrel":"n.桶","barrier":"n.障碍物，栅栏","behavior":"n.举止，行为","bill":"n.钞票；帐单；议案 ；（小鸟）的嘴","blast":"n.爆炸vt.炸，炸掉","blend":"v.(使)混和.n.混合物","boast":"v./n.自夸","bond":"n.结合，协定.v.使结合，粘合","breed":"v.繁殖；抚养.n.品种","bubble":"n.泡.vi.冒泡，起泡","bulk":"n.(大)块，主体","calculate":"v.计算，考虑","campaign":"n.运动，战役.vi.发起运动","candidate":"n.候选人","canoe":"n.独木舟","capable":"a.有能力的，能干的","capacity":"n.容量；能力","capital":"n.资金；资本","carve":"v.雕刻，切割","casual":"a.偶然的， 不经意的；(服装)休闲的","cease":"v.停止","circular":"a.圆形的， 循环的","circumstance":"n.环境，[ pl.]境况"},{"leap":"v./n.跳跃","legend":"n.传奇","limb":"n.肢， 翼， 分支","limitation":"n.限制，局限性","loan":"n.贷款.vt.借出，贷给","loop":"n.环","lump":"n.块，团","luxury":"n.奢侈， 华贵","magnetic":"a.磁的，有吸引力的","maintain":"vt.维持，保持，供养","maintenance":"n.维护， 保持","manual":"a.手工的.n.手册，指南","manufacturer":"n.制造业者， 厂商","margin":"n.边缘","marvelous":"a.令人惊异的， 非凡的，了不起的","mate":"n.配偶， 对手.v.交配","mathematical":"a.. 数学的， 数学上的","mature":"a.成熟的.v.使成熟","measurable":"a.可测量的","measurement":"n.测量法，度量","minor":"a.较小的，次要的","minute":"n.分钟，片刻.a.微小的[mai\'nju:t]","moderate":"a.中等的， 适度的","modify":"v.更改，修改","moist":"a.潮湿的，湿润的","moisture":"n.潮湿，湿气，水分","motion":"n.运动，动作","motivate":"v.激发","motive":"n.动机，目的","muddy":"a.多泥的","multiple":"a.多样的.n.倍数","multiply":"v.繁殖， 乘","mute":"a.哑的，不发音的.vt.消除(声音)","mutual":"a.相互的，共有的，彼此的","navigation":"n.航海，航行","neglect":"vt./n.忽略","normal":"a.正常的，正规的，标准的","noticeable":"a.显而易见的","numerous":"a.众多的，数量庞大的","object":"n.物体，目标.v.反对，拒绝","objection":"n. 反对， 异议","objective":"n.目标，目的a.客观的","oblige":"vt.迫使","observation":"n.观察，观测","obstacle":"n.障碍， 妨害物","occasion":"n.场合，时机","occasional":"a.偶然的，临时的","occupation":"n.职业， 占有","occupy":"vt.占，占领；使忙碌","occurrence":"n.发生，出现，事件","odd":"a.古怪的","offer":"n./vt.给予，提供","omit":"vt.省略，遗漏","opponent":"a.对立的.n.对手","oppose":"v.反对，对抗"}],[{"claim":"n./v.声称，要求","clarify":"v.澄清， 阐明","coil":"v.盘绕，卷.n.线圈","coin":"n.硬币.vt.铸造(硬币)","collective":"a.集体的，共同的.n.团体，集体","collision":"n.碰撞，冲突","commerce":"n.商业，贸易","commercial":"a.商业的，贸易的","commission":"n.委员会.vt.委任，委托，佣金","commit":"v.犯罪， 承诺， 委托","committee":"n.委员会","comparative":"a.比较的，相当的","comparison":"n.比较，对照，比喻","competition":"n.竞争，竞赛","compile":"vt.编译， 编辑","complain":"v.抱怨，控诉","complaint":"n.诉苦， 抱怨，控告","complex":"a.复杂的，复合的.n.复合体，综合设施","complicate":"v.(使)变复杂","component":"n.成分 ，组件","compose":"v.组成，写作","composition":"n.成分；作品，作文，作曲","compress":"vt.压缩","compute":"v.计算； 估计，推断","conceal":"v.隐藏， 隐瞒","concentration":"n.集中，专心；浓缩","concert":"n.音乐会，一致 vi.合作","concrete":"a.实在的，具体的.n.混凝土","condense":"v.(使)压缩，浓缩， 精简","confident":"a.自信的， 确信的","confirm":"v.确定，确认","conflict":"n.冲突，战斗.vi.冲突，抵触","conquest":"n.征服，战利品","conscious":"a.有意识的；神志清醒的","consequence":"n.结果，重要性","considerable":"a.重要的，相当大的，可观的","consistent":"a.一致的","consult":"v.咨询","consume":"v.消耗；消费","consumption":"n.消费，消耗","container":"n.容器","contemporary":"n.同时代的人.a.当代的","continual":"a.不间断的， 不停的","continuous":"a.连续的，持续的","contract":"n.合同.v.缩小，订合同","contradiction":"n.反驳， 矛盾，否认","contribute":"v.贡献，(to)有助于","convention":"n.习俗， 惯例；大会","conventional":"a.依照传统的；因循守旧的","conversation":"n.会话，交谈","conversion":"n.变换， 转化","convert":"vt.使转变，转换","convince":"vt.使确信， 使信服","coordinate":"vt.调节，协调","core":"n.核心，要点"},{"opposite":"a.相对的，对面的.n.相反的事物","optical":"a.视觉的， 光学的","option":"n.选项， 选择权","ordinary":"a.普通的， 平常的","organ":"n.器官，机构，风琴","organic":"a.有机(体)的，有机物的","organism":"n.有机体，生物体，微生物","ornament":"n./vt.装饰(品)，美化","outlet":"n.出口， 出路； (感情等)发泄途径","overall":"a.全部的，全面的 ad.总体上","overcome":"vt.战胜，克服","overlook":"v./n.俯瞰，忽视","pack":"v.捆扎，打包.n.包","parade":"n.游行","partial":"a.部分的，局部的","participate":"vi.参与， 参加","patch":"n.补丁；小块土地.vt.补，修补","peak":"n.山顶，顶点","peculiar":"a.独特的","peel":"vi. 剥落； 脱落","peep":"n./vi.偷窥","penetrate":"v.穿透，渗透","performance":"n.执行，表演","permanent":"a.永久的，持久的","persist":"vi.坚持， 持续","personal":"a.私人的，个人的","perspective":"n.视角，观点","phase":"n.阶段，方面","phenomenon":"n.现象","philosophy":"n.哲学","photographic":"a.摄影(术)的","pierce":"v.刺穿","pit":"n.深坑，陷阱","pit against":"使与…相斗","pitch":"n.音高；沥青 v.扔，猛然倒下","plentiful":"a.丰富的，充裕的","portable":"a.便于携带的，手提的","portion":"n.部分","portrait":"n.肖像，人像","potential":"a.潜在的.n.潜能，可能性","precise":"a.精确的，准确的","precision":"n.精确， 精密度","predict":"v.预知，预言","preliminary":"a.预备的， 初步的","premier":"a.最好的， 最重要的","presence":"n.出席，存在，参加","preserve":"v.保护，保存","prevail":"vi.流行","prevent":"v.防止，预防","prime":"a.首要的，最好的","prior":"a.优先的，在前的","privilege":"n.特权","probability":"n.可能性","proceed":"vi.进行，继续下去","productive":"a.多产的， 富饶的，富有成效的"}],[{"corridor":"n.走廊","craft":"n.工艺，手艺；船 ； 航天器","crash":"vi.碰撞，撞击，坠毁","credit":"n.信任vt.相信，信任","cripple":"n.跛子v.削弱","crisis":"n.危机","critic":"n.批评家；评论家","critical":"a.批评的，挑剔的；决定性的","criticism":"n.批评， 批判","criticize":"v.批评；评价，评论","crude":"a.天然的，未加工的；粗略的","cultivate":"vt.培养，种植","dam":"n.水坝，障碍","deal":"n.交易.v.处理","debt":"n.债务","decay":"v./n.衰退，腐败","decrease":"v./n.减少，降低","defect":"n. 缺点， 过失， 瑕疵","define":"vt.定义，规定","definite":"a.明确的，一定的","definitely":"adv. 明确地， 确切地；一定地","delicate":"a.精巧的， 精致的","delivery":"n.递送，交付，传输；讲演","democratic":"a.民主的","demonstrate":"vt.证明；示范","dense":"a.密集的，浓厚的","density":"n.密度","dependent":"a.依靠的，依赖的","deposit":"v.沉淀，存放，堆积.n.堆积物；矿藏","depress":"v.使沮丧， 使消沉","derive":"v.获取，得自，起源","description":"n.描写，记述，说明书","destruction":"n.破坏，毁灭","detect":"v.察觉，侦查，发现","detection":"n.觉察， 侦查，探测","device":"n.装置，设备","devise":"vt.设计，发明","dialect":"n.方言","discard":"v.丢弃， 抛弃","discharge":"v./n.释放，排出","discipline":"n.纪律，学科","disguise":"n./v.伪装，掩饰","disgust":"n.厌恶 vi.令人厌恶、作呕","display":"n./vt.陈列，展示","disposal":"n.处理，丢弃","dispute":"n./v.争论，争端","dissolve":"vi.溶解， 消失 vt.使解散","distinct":"a.独特的；清楚的，明显的","distinction":"n.差别，区分；优秀","distinguish":"v.区别，辨别；使杰出","distribute":"v.分发，分配","distribution":"n.分发，分配，分布","diverse":"a.不同的，变化多的","domestic":"a.国内的，家庭的","drain":"vt.排走.n.排水，消耗"},{"professional":"a.专业的，职业的.n.专业人员","profit":"n.利润，益处.v.得益，有利于","progressive":"a.先进的，前进的.n.进步分子","project":"n.计划，工程v.计划；突出","prominent":"a.显著的，杰出的， 突出的","promote":"vt.促进，提升，宣传，晋升","prompt":"vt.推动，提示.a.迅速的","pronoun":"n.代名词","proportion":"n.比例，部分，面积","proposal":"n.提议","propose":"v.打算，向...提议","prospect":"n.前景， 景象，希望","prosperity":"n.繁荣，成功","prosperous":"a.繁荣的，兴旺的","protective":"a.给予保护的， 保护的","provide":"v.供给，提供","provision":"n.供应","psychological":"a.心理(上)的","purify":"vt.使纯净，提纯","push":"n./v.推，推动","qualify":"v.(使)胜任，(使)合格","quotation":"n.引文，引语","quote":"vt.引用， 引证","radiate":"v.放射， 辐射","radioactivity":"a.放射性的；有辐射的","rail":"n.轨道","rarely":"adv. 不常， 很少地， 难得地","ratio":"n.比， 比率","rational":"a.理性的，合理的","realm":"n.领域，范围","rebellion":"n.反叛，反抗","receive":"v.接到，收到；接待","recognition":"n.识别，确认","recommendation":"n.推荐， 介绍(信)","reduction":"n.减少","reed":"n.芦苇","reference":"n.提及， 涉及；参考， 查阅； 参考书目","refine":"vt.精炼， 精制，完善","reflect":"v.反映，反射，深思，反省","reflection":"n.反映，反射","reform":"vt./n.改革， 革新","refute":"vt.驳斥，驳倒","regulate":"vt.管理，控制，规范","rehearsal":"n. 排练","reign":"n.君主统治.v.统治， 支配","release":"vt./n.释放","relevant":"a.相关的， 切题的","reliability":"n.可靠性","reliable":"a.可靠的，可信赖的","reliance":"n.信任，信心，依靠","relief":"n.轻松，缓解；浮雕","relieve":"vt.减轻， 解除","reluctant":"a.不情愿的， 勉强的","rely":"v.依赖，依靠","removal":"n.除去，移动"}],[{"dramatic":"a.急剧的；引人注目的；令人印象深刻的","drift":"v./n.漂流","drought":"n.干旱","durable":"a.持久的，耐用的","duration":"n.持续时间","dwelling":"n.住处","dye":"n 染料， 染色 vt. & vi. 给…上色；着色","dynamic":"a.动力的， 动力学的","echo":"n.回声 v.回响","economic":"a.经济(学)的.n.经济学economical:a.节约的","economical":"a.节约的， 节俭的， 经济的","effective":"a.. 有效的； 生效的","efficiency":"n.效率","efficient":"a.效率高的","elaborate":"a.详尽的，复杂的.v.详述","eliminate":"v.消灭，除去","elimination":"n.排除，消除","embarrass":"vt.使尴尬","embrace":"vt.拥抱，接受；包含","emerge":"vi.出现","emit":"vt.发出，放射","emotional":"a.. 表现出强烈情感的， 情绪化的","emphasize":"vt.强调，着重","enclose":"vt.围绕","encounter":"v./n.遭遇，遇到","endure":"v.耐久，忍耐","enforce":"vt.实施， 执行，加强","engage":"v.雇佣；从事，参加；使订婚","enormous":"a.巨大的，庞大的","enthusiastic":"a.热心的， 热情的","entitle":"vt.给...权利(或资格); 给...题名","equivalent":"a.相等的，相当的n.等价物","era":"n.时代，纪元，年代","erect":"vt.建造；使直立","essential":"a.本质的，重要的，必要的","establishment":"n.确立，制定","estimate":"n./v.估计，估价，判断","evaluate":"v.评估","evaporate":"v.(使)蒸发，消失","event":"n.大事，事件","evolution":"n.进化，演变；进化论","evolve":"v.演变，进化","exaggerate":"v.夸大，夸张","exceed":"v.超越， 胜过","excess":"n./a.过量(的)","excessive":"a.过多的，过分的，极度的","exclude":"vt.把...排除在外， 排斥","exercise":"n./v.运动，练习","exert":"v.施加（影响、压力等）;发挥","exhaust":"vt.使筋疲力尽，耗尽","exhibit":"v.陈列，展览；显示， 显出","expand":"v.扩大，扩展","expansion":"n.膨胀，扩展，扩充","expensive":"a.昂贵的，高价的","explosion":"n.爆炸，爆发"},{"render":"vt.使得，提供","repetition":"n.重复，反复","reply":"v.答复","representative":"n.代表 .a.典型的","reproduce":"v.繁殖；再生，复制","resemble":"v.像，类似于","residence":"n.居住， 住处","resident":"n.居民","resistance":"n.反抗，抵抗","resistant":"a.抵抗的， 有抵抗力的","resolution":"n.决心，决议；分辨率","resolve":"v.解决， 决定 n.决心","respective":"a.分别的， 各自的","restore":"vt.恢复，重建","restrain":"vt.抑制， 束缚","restriction":"n.限制， 约束","resume":"v.(中断后)继续","retain":"vt.保持，保留","retreat":"vi.撤退，退却","reveal":"vt.揭露，显示","reverse":"v.颠倒，倒转.n.逆境.a.反向的","review":"vt./n.回顾，复习，评论","revise":"vt.修订，校订，复习","revolutionary":"a.革命的，革新的.n.革命者","ridge":"n.背脊，山脊","ridiculous":"a.荒谬的， 可笑的","rigid":"a.死板的，僵硬的；严格的","rival":"v.竞争，对抗","rotary":"a.旋转的，转动的，轮流的","rotate":"v.(使)旋转，(使)轮流","rotation":"n.旋转","rough":"a.粗糙的，大致的","rural":"a.农村的，田园的","sack":"vt.洗劫","sake":"n.缘故，理由","sample":"n.样品，样本","scarce":"a.缺乏的，不足的，稀有的","scatter":"vt.撒(播).vi.分散","schedule":"n.时刻表，日程.vt.安排","scheme":"n.安排.v.计划","scrape":"v./n.刮，擦","scratch":"v./n.抓，划(痕)","screen":"n.屏幕.vt.筛选；掩蔽；放映","senate":"n.参议院","sensible":"a.有感觉的， 明智的","sensitive":"a.敏感的，灵敏的","sequence":"n.次序，顺序","session":"n.一段时间；学期","severe":"a.严厉的，剧烈的，严重的","shed":"vt.脱落，流出","shield":"v.防护，遮蔽","shift":"v./n.转换，轮班","shrink":"v.收缩， (使)皱缩.n.收缩","significance":"n.意义，重要性","significant":"a.重要的，意义重大的"}],[{"explosive":"a.爆炸(性)的，暴露.n.爆炸物","export":"v./n.输出，出口","exposure":"n.暴露， 揭露","extend":"v.延伸，扩展","extension":"n.延长， 扩充","extensive":"a.广泛的，大量的","extent":"n.范围，程度，广度","exterior":"a.外部的.n.外部","external":"n./a.外部(的)","extreme":"a.极端的.n.极端，过分","facility":"n.设备 ; 设施；能力","faculty":"n.能力，院系，全体教员","faint":"a.头晕的，微弱的","fame":"n.名声， 名望","feed":"v.喂养.n.饲料","fertile":"a.肥沃的， 富饶的","fertilizer":"n.肥料","fiction":"n.虚构，小说","filter":"v.过滤 ，透(过)","firm":"n.公司.a.结实的，稳固的","flexible":"a.灵活的，柔韧的","flourish":"v./n.繁荣，茂盛","fluid":"n.液体.a.流体的，流动的","flush":"v.冲洗；(脸)发红","formal":"a.正式的，正规的","formation":"n.形成，构成","formula":"n.公式， 规则","foundation":"n.基础， 根本，创立","fraction":"n.小部分， 片断","fragment":"n.碎片.v.(使)成碎片","frank":"a.坦白的， 直率的","freight":"n.货物.vt.运送","frequency":"n.频率，发生次数","friction":"n.摩擦，摩擦力","fundamental":"a.根本的","furious":"a.狂怒的， 暴怒的","furnish":"vt.布置， 装备， 提供","game":"n.比赛，猎物","gaseous":"a.气体的，气态的，无实质的","generate":"vt.产生，发生","glory":"n.荣誉， 光荣","grace":"n.优美， 雅致.vt.使优雅","graceful":"a.优雅的","grand":"a.盛大的，极重要的","grant":"vt.授予，同意，准予","grind":"v.磨(碎)，折磨","harness":"n.马具.vt.利用（自然力）","harsh":"a.粗糙的，严厉的","hazard":"n.危险.vt.冒…风险","herd":"n.兽（人）群","hesitate":"v.犹豫， 踌躇","hint":"n.暗示，线索","horizontal":"a.地平线的， 水平的","hostile":"a.怀有敌意的；敌对的","humid":"a.充满潮湿的， 湿润的"},{"skim":"vt. 略读， 浏览","slender":"a.苗条的， 微薄的","slide":"v./n.滑动；n.幻灯片","slippery":"a.滑的，光滑的","soak":"n./v.浸泡， 渗透","solemn":"a.庄严的，神圣的","soluble":"a.可溶解的","solve":"vt.解决，解答","sophisticated":"a.富有经验的，老练的； 复杂的","span":"n.跨度 vt.横越，持续","specialize":"vi. 专门从事","specify":"vt.指定， 详细说明","specimen":"n.范例，标本，样品","spectacle":"n.景象， 场面，奇观","sphere":"n.球， 范围","spill":"v.(使)溢出.n.溢出","spoil":"vt.损坏vi.变质","sponsor":"n.发起人.v.发起， 主办， 赞助","spur":"v.鞭策， 刺激n.踢马剌","squeeze":"n./v.压榨， 挤","stab":"v/n.刺","stability":"n.稳定性","stable":"a.稳定的","stack":"v.堆积 n.堆， (图书馆或书店的)书架","stain":"n.污点v.染污","stake":"n.树桩","startle":"v.震惊","static":"a.静态的， 静止的","statue":"n.塑像，雕像","steep":"a.陡峭的，急剧的","steer":"v.操纵；引导，指导","stem":"n.茎，干.vi.起源于","sticky":"a.粘的","stiff":"a.(僵)硬的，生硬的","stiffen":"vt.弄硬，加强","stimulate":"vt.刺激，激励vi.起刺激作用","sting":"n./v.刺， 刺痛","strain":"n./v.拉紧，紧张，劳累","strategy":"n.策略","stroke":"n.笔划","submerge":"v.浸没，淹没","submit":"v.提交(建议、报告或请求)","subsequent":"a.后来的，随后的","substantial":"a.可观的，牢固的，实质的","substitute":"v.代替，替换","suburb":"n.市郊， 郊区","success":"n.成功，成就","succession":"n.连续，继承；演替","successive":"a.连续的， 接连的","sufficient":"a.足够的，充分的","summarize":"vt.概述， 总结","superior":"n.长者，上级.a.较高的，上级的","supplement":"n.补充， 附录","suppose":"vt.推想， 假设，认为","supreme":"a.最高的， 至上的"}],[{"ideal":"n.理想，典范.a.理想的","identical":"a.同一的，相同的","identify":"v.识别，鉴定","illustrate":"v.阐明，举例说明，图解","illustration":"n.说明， 例证，图解","imitate":"v.模仿，仿制","immense":"a.极广大的， 无边的，","immigrant":"n.移民","impact":"n./v.影响，冲击","impatient":"a.焦躁的，不耐心的","implication":"n.含意， 暗示","imply":"vt.暗示， 隐含","impose":"v.强加，征收(税款)","impressive":"a.给人深刻印象的","improvement":"n.改进，进步","indefinite":"a.不明确的，含糊的","independence":"n.独立，自主","indication":"n.指示，表示，迹象","indirect":"a.间接的","industrialize":"vt.使工业化","inefficient":"a.效率低的","inevitable":"a.不可避免的， 必然的","infant":"n.婴儿a.婴儿的","infect":"vt.[医] 传染， 感染","infer":"v.推断，推论","infinite":"a.无限的，无穷的","influential":"a.有影响的， 有势力的","inhabit":"vt.居住于，栖息","inhabitant":"n.居民， 住户； (栖息在某地区的)动植物","inner":"a.内部的，内心的","inquire":"v.询问， 查究，调查","insect":"n.昆虫，虫","install":"vt.安装， 安置","instinct":"n.本能，直觉，天性","insufficient":"a.不足的","intellectual":"a.智力的， 有智力的 n.知识分子","intelligence":"n.智力， 聪明","intelligent":"a.聪明的， 智能的","intense":"a.强烈的，激烈的","intensity":"n.强度，强烈","intensive":"a.强烈的；密集的","intention":"n.意图， 目的","intentional":"a.故意的","interfere":"vi.干涉，妨碍","interference":"n.冲突， 干涉，干扰","intermediate":"a.中间的；中级的 n.媒介","internal":"a.内在的，国内的","interpret":"v.解释，说明；口译","interpretation":"n.解释，阐明","intimate":"a.亲密的，私人的","invade":"vt.侵略，侵入","invasion":"n.入侵","invent":"v.发明，创造","invention":"n.发明，创造","inventor":"n.发明家，创造者"},{"survey":"n./vt.调查，勘测","survive":"v.活着，幸存；比…活得长","suspend":"v.暂停，悬，挂，延缓，推迟","sustain":"vt.支撑，维持","swamp":"n.沼泽，湿地","sweep":"v.打扫， 清扫","switch":"n.开关.vt.转换， 转变","temporary":"a.暂时的","tend":"vi.易于，趋向.vt.照料","tendency":"n.趋势，倾向","term":"n.学期，术语，期间，期限.vt.把...称为","territory":"n.领土，地域","textile":"n.纺织品.a.纺织的","thrive":"v.兴旺，繁荣，茁壮成长","thrust":"v.推，插，刺","tissue":"n.(生物)组织","tolerance":"n.宽容，容忍","tolerate":"vt.忍受，容忍","toss":"v.投， 掷","track":"n.轨道，踪迹.vt.跟踪","transfer":"n./v.迁移，移动，转移","transform":"vt.改变，转换，改革","transformation":"n.变化，转化","transmission":"n.播送， 发射，传输","transmit":"vt.传送，传达；传染","transparent":"a.透明的","tremendous":"a.巨大的，惊人的","trend":"n./v.倾向，趋势","trick":"n.诡计.vt.欺诈","trim":"vt./n.修剪","triumph":"n.胜利.v.获胜","tuition":"n. 学费","twinkle":"vi. 闪烁","twist":"v.缠绕，拧，扭曲.n.转折","ultimate":"a.最终的 n.终极(限)","undoubtedly":"ad.无庸置疑地","unexpected":"a.想不到的，意外的","unique":"a.唯一的，独特的","upright":"a.正直的","urge":"vt.催促，强烈要求.n.强烈的欲望","usual":"a.平常的，通常的","utility":"n.效用，功用","utilize":"vt.利用","utter":"a.全然的， 绝对的.vt.发出声音； 说","vacuum":"n.真空","vague":"a.模糊的，不明确的","valid":"a.有效的，有根据的","vanish":"vi.消失，绝迹","variable":"a.多变的，可变的.n.（pl.）变量","variation":"n.变化，变动","vary":"v.改变，变化，使多样化","velocity":"n.速度， 速率","venture":"v.冒险","verify":"vt.核实， 证明","version":"n.版本"}],[{"invest":"v.投资，投入(时间等)","investigate":"v.调查， 研究","investigation":"n.调查，研究","investment":"n.投资","invisible":"a.看不见的， 无形的","involve":"vt.包含，牵涉","irregular":"a.不规则的，无规律的","isolate":"vt.使隔离，使孤立","issue":"n./v.问题；颁布， 发行","joint":"n.关节， 接合处","justify":"v.证明...是正当的","lack":"v./n.缺乏，不足","lag":"vi.落后.n.滞后，(时间上的)间隔","lane":"n.小路， 小巷，行车道","launch":"vt./n.发射.v.发起","layout":"n.布局","lean":"n.倾斜，倚靠.v.依靠，倾斜.a.贫乏的"},{"vessel":"n.船，容器，血管","via":"prep.经由，通过","vibrate":"v.(使)振动","vibration":"n.振动，颤动","vigorous":"a.精力充沛的，有力的","visible":"a.看得见的","vision":"n.视觉；幻想，想象力；愿景","visual":"a.视觉的，看得见的","vital":"a.重大的，至关重要的","wander":"vi.漫步， 徘徊","weather":"n.天气v.风化，经受风雨(侵蚀)","withdraw":"v.收回，撤消","witness":"n.目击者，证据(言).vt.目击，作证","wrap":"vt.包，裹","wreck":"vt.毁坏，使遇难.n.失事(船等)，残骸","yawn":"v.打呵欠","yield":"v.生产 n.产量"}]]')},"85ec":function(e,n,t){},adef:function(e,n,t){"use strict";t("32da")},e81d:function(e,n,t){"use strict";t("2901")}});
//# sourceMappingURL=app.bd950583.js.map