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
    mounted() {
        this.$store.dispatch('getQuotes');
        this.$store.dispatch('getDates');
    },
};
</script>

<style lang="scss">
    body::-webkit-scrollbar {
        display: none;
    }

    #app {
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .noscroll {
        overflow: hidden;
    }
</style>
