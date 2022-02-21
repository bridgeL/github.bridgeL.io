const linkData = [
    {
        "href": "./lab/genshin/cube riddle/index.html",
        "title": "原神方块类谜题解密器",
        "tags": ["js", "genshin"]
    },
    {
        "href": "./lab/cyberpunk/buhui.html",
        "title": "网络疯子模拟器",
        "tags": ["js"]
    },
    {
        "href": "./lab/genshin/artifact/index.html",
        "title": "[转载]圣遗物筛选",
        "tags": ["vue", "genshin","nga"]
    },
    {
        "href": "./lab/genshin/HD_video/index.html",
        "title": "原神高清视频",
        "tags": ["vue", "genshin"]
    },
    {
        "href": "./lab/genshin/dynamic_birth_pic/index.html",
        "title": "原神Q版生日贺图合集",
        "tags": ["vue", "genshin"]
    },
    {
        "href": "./lab/games/2048/index.html",
        "title": "2048",
        "tags": ["vue", "game","mobile"]
    },
    {
        "href": "./lab/games/window/index.html",
        "title": "窗",
        "tags": ["vue", "game"]
    },
    {
        "href": "./lab/study/words/index.html",
        "title": "英语单词学习",
        "tags": ["vue", "study"]
    },
    {
        "href": "./lab/games/cocktail/index.html",
        "title": "鸡尾酒",
        "tags": ["vue", "game", "mobile"]
    },
    {
        "href": "./lab/study/conjunction/index.html",
        "title": "引导词",
        "tags": ["vue", "study"]
    },
    {
        "href": "./lab/study/grammar/index.html",
        "title": "句子结构",
        "tags": ["vue", "study"]
    },
    {
        "href":"./lab/genshin/nga_face/index.html",
        "title":"nga原神表情",
        "tags":["vue","genshin","nga"]
    },
    {
        "href":"./lab/study/words_new/index.html",
        "title":"六级词汇",
        "tags":["vue","study"]
    }
];

const link_container = Vue.extend({
    template: `
    <div class="container">
        <div>
            <div class="row" v-for="(item, index) in links" :key="index">
                <div class="index">
                    {{ index }}
                </div>
                <div class="title">
                    <a :href="item.href">
                        {{ item.title | lengthLimit }}
                    </a>
                </div>
                <div class="tags">
                    <div v-for="(t, i) in item.tags" :key="i">
                        [
                        <div :style="{ display:'inline',color: tags[t] }">{{ t }}</div>
                        ]
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    name: "link_container",

    props: ["links", "tags"],

    filters: {
        lengthLimit(val) {
            if (val.length > 12) return val.slice(0, 12) + "...";
            return val;
        },
    },

});

const my_header = Vue.extend({
    template: `
    <div class="header">
        <div
            class="option"
            v-for="(name, index) in pages"
            :key="index"
            @click="set_page_index(index)"
            :class="page_index == index ? 'T' : 'F'"
        >
            <div>
                {{ name }}
            </div>
            <div class="ctrl">
                {{ page_index == index ? "T" : "F" }}
            </div>
        </div>
    </div>
    `,
    name: "my_header",
    props: ["pages", "page_index", "set_page_index"],
});

const tag_link_container = Vue.extend({
    template: `
    <div>
        <link_container :links="tagLinks" :tags="tags" />
    </div>
    `,
    name: "tag_link_container",
    props: ["tag", "links", "set_tag", "tags"],
    components: { link_container },
    computed: {
        tagLinks() {
            if (this.tag) {
                var a = [];
                this.links.forEach((e) => {
                    if (e.tags.indexOf(this.tag) != -1) a.push(e);
                });
                return a;
            } else {
                return this.links;
            }
        },
    },
});

const my_index = Vue.extend({
    template: `
    <div class="main">
        <div class="title2">Ｌｉｍｅｓｔｏｎｅ</div>
        <div class="introduce">
            石灰岩（Limestone）简称灰岩，以方解石为主要成分的碳酸盐岩。<br />
            有时含有白云石、粘土矿物和碎屑矿物，有灰、灰白、灰黑、黄、浅红、褐红等色。硬度一般不大，与稀盐酸有剧烈的化学反应。<br />
            按成因分类属于沉积岩。
        </div>
        <a href="https://github.com/bridgeL/github.bridgeL.io" target="new form"
            >Github</a
        >
    </div>
    `,
    name: "my_index",
});

Vue.component('link_container', link_container);
Vue.component('my_header', my_header);
Vue.component('tag_link_container', tag_link_container);
Vue.component('my_index', my_index);

let vm = new Vue({
    el: "#root",
    data() {
        return {
            labelSel: sessionStorage.getItem("labelSel") || "首页",
            pages: null,
            page_index: 0,
            tag: "",
            links: null,
            tags: null,
        };
    },
    components: {
        my_header,
        tag_link_container,
        my_index,
    },
    created() {
        // 载入page信息
        this.pages = ["首页", "Vue", "归档"];
        this.links = linkData;
        // 所有tag
        let temp = [];
        this.links.forEach((e) => {
            let ts = e.tags;
            ts.forEach((e) => {
                if (temp.indexOf(e) == -1) temp.push(e);
            });
        });
        // 为不同的tag设置一种颜色
        let cs = [
            "#8a2be2",
            "red",
            "green",
            "blue",
            "brown",
            "indigo",
            "orange",
            "teal"
        ];

        let i = 0;
        this.tags = {};
        temp.forEach((e) => {
            this.tags[e] = cs[i];
            i = (i + 1) % cs.length;
        });
    },

    mounted() {
        // 从本地缓存中加载数据
        // page index
        let temp = localStorage.getItem("page_index");
        this.page_index = temp ? +temp : 0;
        // tag
        temp = localStorage.getItem("tag");
        this.tag = temp ? temp : "";
        // 修改select 保持一致
        this.$refs["c1"].value = this.tag;
    },

    methods: {
        open_label(label) {
            this.labelSel = label;
            sessionStorage.setItem("labelSel", label);
        },
        set_page(val) {
            this.page_index = val;
            localStorage.setItem("page_index", val);
            console.log("设置当前页", val);
        },
        set_tag(event) {
            let val = event.target.value;
            this.tag = val;
            localStorage.setItem("tag", val);
            console.log("设置tag", val);
        },
    },
});

