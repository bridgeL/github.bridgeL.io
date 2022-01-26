class Game2048 {
    constructor() {
        this.map = [];
        this.start();
        this.test = 0;
        this.ds = [0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];
    }

    start() {
        this.stop = 0;
        for (let i = 0; i < 16; i++) this.map[i] = 0;
        this.create_point(this.map);
    }

    // 滑动
    slip(dir, map) {
        let flag = 0;

        // 准备工作
        let array = [0, 0, 0, 0];
        let ks = [0, 1, 2, 3]; // 正序扫描
        if (dir == "s" || dir == "d") ks = [3, 2, 1, 0]; // 倒序扫描

        let get_k;
        if (dir == "w" || dir == "s") {
            // 按列扫描
            get_k = function (ks, i, j) {
                return ks[j] * 4 + i;
            };
        } else {
            // 按行扫描
            get_k = function (ks, i, j) {
                return i * 4 + ks[j];
            };
        }

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) array[j] = map[get_k(ks, i, j)];

            let result = this.combine(array);
            let n_array = result[0];
            if (flag == 0) {
                if (result[1]) flag = result[1];
            } else if (flag == 2) {
                if (result[1] == 1) flag = 1;
            }

            for (let j = 0; j < 4; j++) map[get_k(ks, i, j)] = n_array[j];
        }

        // console.log(map, flag);

        return flag;
    }

    // 从右向左合并，只合并一次，左优先
    combine(array) {
        let n_array = [];
        // 紧密排列
        for (let i = 0, j = 0; i < 4; i++) {
            n_array[i] = 0;
            if (array[i] > 0) n_array[j++] = array[i];
        }
        // 移动标记
        let move_flag = 0;
        for (let i = 0; i < 4; i++) {
            if (array[i] != n_array[i]) move_flag = 1;
        }
        // 合并标记
        let combine_flag = 0;
        // 左优先查找合并
        for (let i = 1; i < 4; i++) {
            if (n_array[i] == 0) break;
            if (n_array[i] == n_array[i - 1]) {
                // 合并
                n_array[i - 1] *= 2;
                // 左移
                for (let j = i; j < 3; j++) n_array[j] = n_array[j + 1];
                n_array[3] = 0;
                // 设置合并标记
                combine_flag = 1;
                break;
            }
        }
        let flag = 0;
        if (combine_flag) flag = 1;
        else if (move_flag) flag = 2;
        return [n_array, flag];
    }

    // 用户滑动
    user_slip(dir) {
        if (dir == "t" || dir == "T") {
            this.test = (this.test + 1) % this.ds.length;
            for (let i = 0; i < 16; i++) this.map[i] = this.ds[this.test];
            return;
        }
        // dir分析
        if (dir == "R" || dir == "r") this.start(this.map);
        if (this.stop) {
            return;
        } else {
            if (dir == "W" || dir == "w" || dir == "ArrowUp") dir = "w";
            else if (dir == "A" || dir == "a" || dir == "ArrowLeft") dir = "a";
            else if (dir == "S" || dir == "s" || dir == "ArrowDown") dir = "s";
            else if (dir == "D" || dir == "d" || dir == "ArrowRight") dir = "d";
            else return;
        }

        // 执行方向
        let flag = this.slip(dir, this.map);

        // 结果分析
        if (flag == 0) {
            // console.log("no move, no combine");
            this.check();
            return;
        } else if (flag == 1) {
            // console.log("combine");
            while (flag == 1) {
                // 略微暂停
                flag = this.slip(dir, this.map);
            }
        } else {
            // console.log("move, no combine");
        }

        this.create_point();
        this.check();
        return 1;
    }

    check() {
        // console.log("check");
        let empty = 0;
        let test_map = [];
        for (let i = 0; i < 16; i++) {
            test_map[i] = this.map[i];
            if (this.map[i] == 0) {
                empty++;
            }
        }

        if (empty == 0) {
            let flag = 0;

            // 判断是否卡死
            let ds = ["w", "s", "a", "d"];
            for (let i = 0; i < 4; i++) {
                if (this.slip(ds[i], test_map)) {
                    flag = 1;
                    break;
                }
            }
            if (flag == 0) {
                this.stop = 1;
                this.msg = "游戏结束";
            }
        }
    }

    // 生成随机新点
    create_point() {
        let empty = 0;
        let map_max = 0;
        let map_min = 2000000;
        for (let i = 0; i < 16; i++) {
            if (this.map[i] == 0) empty++;
            else {
                if (this.map[i] > map_max) map_max = this.map[i];
                if (this.map[i] < map_min) map_min = this.map[i];
            }
        }

        // 随机位置
        let a = Math.floor(Math.random() * empty) + 1;
        let k = 0;
        for (let i = 0; i < 16; i++) {
            if (this.map[i] == 0) a--;
            if (a == 0) {
                k = i;
                break;
            }
        }

        // 基数，基数由最大数和最小数共同决定
        // 降低游戏难度，给玩家成就感
        let base = 2;
        let p = 64, q = 4;
        for (let i = 0; i < 2; i++) {
            if (map_max > p && map_min > q / 2) base = q;
            p *= 4;
            q *= 2;
        }

        let ds = [];
        for (let i = 0; i < 5; i++) {
            ds.push(base);
            base *= 2;
            if (base * 32 > map_max) break;
        }
        console.log(map_max, map_min, ds);

        // 随机大小
        a = Math.floor(Math.random() * ds.length);
        let d = ds[a];
        this.map[k] = d;

        // console.log(this.map, empty);
    }
}

let vm = new Vue({
    el: "#root",
    data() {
        return {
            game: new Game2048(),
            cnt: 0,
            flags: false,
            // 鼠标位置
            client: {
                x: 0,
                y: 0,
                // 鼠标第一次点击div的绝对位置
                originx: 0,
                originy: 0,
            },
            height:700,
        };
    },

    mounted() {
        this.enterKeyup();
        this.height = window.screen.availHeight - 100;
    },

    destroyed() {
        this.enterKeyupDestroyed();
    },

    methods: {
        enterKey(event) {
            // console.log(event.key);
            let f = this.game.user_slip(event.key);
            if (f) this.cnt++;
        },
        enterKeyupDestroyed() {
            document.removeEventListener("keyup", this.enterKey);
        },
        enterKeyup() {
            document.addEventListener("keyup", this.enterKey);
        },
        down(event) {
            event.preventDefault();

            this.flags = true;
            var touch = event.touches[0];
            this.client.originx = touch.clientX;
            this.client.originy = touch.clientY;
        },
        move(event) {
            event.preventDefault();
            if (this.flags) {
                var touch = event.touches[0];

                this.client.x = touch.clientX;
                this.client.y = touch.clientY;
            }
        },
        //鼠标释放时候的函数
        end() {
            console.log("end");
            this.flags = false;
            // 相对位置
            let x = this.client.x - this.client.originx;
            let y = this.client.y - this.client.originy;

            // 位移超过多少则判定滑动
            if (Math.abs(x) > Math.abs(y)) {
                console.log("x", x);
                if (x < -60) this.enterKey({ "key": "a" });
                if (x > 60) this.enterKey({ "key": "d" });
            } else {
                console.log("y", y);
                if (y < -60) this.enterKey({ "key": "w" });
                if (y > 60) this.enterKey({ "key": "s" });
            }
        },
    },

    computed: {
        msg() {
            if (this.game.stop == 0) return "游戏开始";
            else return "游戏结束,按R重新游玩";
        },
    },
});

