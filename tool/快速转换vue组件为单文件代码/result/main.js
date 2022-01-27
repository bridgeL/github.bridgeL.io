let my_window = Vue.extend({
template:`
    <div vue-my-window  class="main">
        <div vue-my-window >
            <div vue-my-window >信息窗格</div>
            <div vue-my-window  class="msg-flex">
                <div vue-my-window  class="label">
                    <div vue-my-window  class="flex-pair">
                        设备宽度
                        <div vue-my-window  class="flex-data">{{ client.width }}</div>
                    </div>
                    <div vue-my-window  class="flex-pair">
                        网格位置
                        <div vue-my-window  class="flex-data">
                            ({{ grid.left }},{{ grid.top }})
                        </div>
                    </div>
                </div>
                <div vue-my-window  class="label">
                    <div vue-my-window  class="flex-pair">
                        鼠标位置
                        <div vue-my-window  class="flex-data">
                            ({{ client.x }},{{ client.y }})
                        </div>
                    </div>
                    <div vue-my-window  class="flex-pair">
                        鼠标相对网格位置
                        <div vue-my-window  class="flex-data">
                            ({{ mouse.x }},{{ mouse.y }})
                        </div>
                    </div>
                </div>

                <div vue-my-window  class="label">
                    <div vue-my-window  class="flex-pair">
                        方块大小
                        <div vue-my-window  class="flex-data">{{ cube.size }}</div>
                    </div>
                    <div vue-my-window  class="flex-pair">
                        方块左上角相对网格位置
                        <div vue-my-window  class="flex-data">({{ cube.x }},{{ cube.y }})</div>
                    </div>
                    <div vue-my-window  class="flex-pair">
                        方块中心相对网格中心偏移
                        <div vue-my-window  class="flex-data">
                            ({{
                                cube.x +
                                cube.size / 2 -
                                (grid.col * grid.size) / 2
                            }},
                            {{
                                cube.y +
                                cube.size / 2 -
                                (grid.row * grid.size) / 2
                            }})
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div vue-my-window  class="container" ref="c1">
            <div vue-my-window 
                class="item"
                v-for="(window, index) in windows"
                :key="index"
                @click="change_color(window)"
            >
                <div vue-my-window 
                    :style="{
                        top: window.top,
                        left: window.left,
                        background: window.background,
                    }"
                ></div>
            </div>
        </div>
        <div vue-my-window  v-show="false">{{ cnt }}</div>
    </div>

`,

    name: "MyWindow",

    data() {
        return {
            // 各个方格属性（颜色，相对位置）
            windows: [],
            // 设备宽度,鼠标在设备上的坐标
            client: { width: 0, x: 0, y: 0 },
            // 总体网格属性（宽度，行列数，相对位置）
            grid: { top: 0, left: 0, row: 4, col: 4, size: 80 },
            // 鼠标在网格上的坐标
            mouse: { x: 0, y: 0 },
            // 方块属性（宽度，其中心点在总体网格上的坐标）
            cube: { size: 120, x: 0, y: 0 },
            cnt: 0,
        };
    },

    mounted() {
        // 绑定鼠标移动事件
        document.addEventListener("mousemove", this.mouseMove);
        // 绑定鼠标滚轮事件
        document.addEventListener("wheel", this.mouseWheel, true);
        // 绑定屏幕宽度事件
        var temp_func = function (that) {
            that.client.width = document.body.clientWidth;
            that.grid.top = that.$refs.c1.offsetTop;
            that.grid.left = that.$refs.c1.offsetLeft;
        };
        window.onresize = () => {
            return temp_func(this);
        };

        for (let i = 0; i < this.grid.row * this.grid.col; i++) {
            this.windows[i] = {
                top: 0 + "px",
                left: 0 + "px",
                background: "orange",
            };
        }
        this.set_windows();

        this.cnt++;

        // 设置延时矫正
        setTimeout(() => {
            temp_func(this);
        }, 500);
    },

    destroyed() {
        document.removeEventListener("mousemove", this.mouseMove);
        document.removeEventListener("wheel", this.mouseWheel, true);
    },

    methods: {
        calculate(cubeHead, cubeRear, size, windowHead) {
            let r = "0px";
            let windowRear = windowHead + size;
            if (cubeHead >= windowRear || cubeRear <= windowHead)
                r = size + "px";
            else if (cubeHead < windowHead && cubeRear > windowRear) r = "0px";
            else if (cubeHead >= windowHead && cubeHead < windowRear)
                r = (cubeHead % size) + "px";
            else if (cubeRear >= windowHead && cubeRear < windowRear)
                r = "-" + (size - (cubeRear % size)) + "px";
            return r;
        },
        set_windows() {
            var val = this.cube.x;
            this.windows.forEach((element, index) => {
                element.left = this.calculate(
                    val,
                    val + this.cube.size,
                    this.grid.size,
                    Math.floor(index % this.grid.col) * this.grid.size
                );
            });
            val = this.cube.y;
            this.windows.forEach((element, index) => {
                element.top = this.calculate(
                    val,
                    val + this.cube.size,
                    this.grid.size,
                    Math.floor(index / this.grid.col) * this.grid.size
                );
            });
        },
        change_color(window) {
            if (window.background == "orange") window.background = "green";
            else window.background = "orange";
            this.cnt++;
        },
        mouseMove(event) {
            // 鼠标位置
            this.client.x = event.clientX;
            this.client.y = event.clientY;

            // 鼠标相对网格位置
            this.mouse.x = this.client.x - this.grid.left;
            this.mouse.y = this.client.y - this.grid.top;

            // 网格中心
            let x = (this.grid.row / 2) * this.grid.size;
            let y = (this.grid.col / 2) * this.grid.size;

            // cube左上角相对网格位置
            let rate = 3;
            this.cube.x =
                Math.floor((this.mouse.x - x) / rate) + x - this.cube.size / 2;
            this.cube.y =
                Math.floor((this.mouse.y - y) / rate) + y - this.cube.size / 2;

            this.set_windows();
        },
        mouseWheel(event) {
            let a = this.cube.size;
            // 位移量
            let d = 10;

            if (event.deltaY > 0) this.cube.size = Math.min(320, a + d);
            else this.cube.size = Math.max(80, a - d);

            // 位移量修正
            d = this.cube.size - a;

            // 保持中心点不变
            this.cube.x -= d / 2;
            this.cube.y -= d / 2;

            this.set_windows();
        },
    },

});

let vm = new Vue({
el:"#app",

    name: "App",
    components: { my_window },

});
Vue.component("my_window",my_window);
