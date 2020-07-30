<template>
    <div class="dashboard">
        <Quote class="dashboard-layout" />
        <Dates class="dashboard-layout" />
        <div class="dashboard-background" />
    </div>
</template>

<script>
import Quote from '@/components/Dashboard/Quote.vue';
import Dates from '@/components/Dashboard/Dates.vue';


export default {
    name: 'dashboard',
    components: {
        Quote,
        Dates,
    },
};
</script>

<style scoped lang="scss">
    @import '@/styles/global.scss';

    .dashboard {
        margin: 0 10px;
        height: calc(100vh - 95px);
        position: relative;
        overflow: hidden;

        &-background {
            min-height: calc(100vh - 140px);
            opacity: 0.4;
            background-image: url('../assets/fav.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: 256px;
        }

        &-layout {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            min-width: 230px;
            max-width: 75vw;
            text-align: center;
            z-index: 100;
        }
    }

    @media only screen and (min-width: 768px) {
        .dashboard {
            height: calc(100vh - 130px);
        }
    }
</style>
