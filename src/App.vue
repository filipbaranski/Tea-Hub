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
        const date = new Date();
        this.$store.dispatch('getQuotes');
        this.$store.dispatch('getDates');
        this.$store.dispatch('getCalendar', { year: date.getFullYear(), month: date.getMonth() + 1 });
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
