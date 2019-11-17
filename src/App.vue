<template>
    <div id="app">
        <Header msg="Welcome to Your Vue.js App"/>
        <router-view/>
    </div>
</template>

<script>
import './styles/index.scss';
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
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
