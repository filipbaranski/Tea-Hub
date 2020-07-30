<template>
    <div id="app">
        <Header />
        <router-view />
    </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    name: 'app',
    components: {
        Header,
    },
};
</script>

<style lang="scss">
    #app {
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .noscroll {
        overflow: hidden;
    }
</style>
