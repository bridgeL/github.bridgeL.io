<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <MyWindow />
    </div>
</template>

<script>
import MyWindow from "@/components/MyWindow";
export default {
    name: "App",
    components: { MyWindow },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
