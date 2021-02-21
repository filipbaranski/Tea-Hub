<template>
    <header :class="{'banner': true, 'sticky': windowTop > 55}" v-on:click="$emit('closeMenu')">
        <router-link to="/">
            <h1>Tea Hub</h1>
        </router-link>
    </header>
</template>

<script>
export default {
    name: 'banner',
    props: ['windowTop'],
};
</script>

<style scoped lang="scss">
    @import '@/styles/global.scss';

    .banner {
        height: 55px;
        text-align: center;
        background-image: url('../../assets/bar360.png');
        background-size: 100%;
        background-repeat: no-repeat;

        &.sticky {
            margin-bottom: 40px;
        }

        a {
            text-decoration: none;
        }

        h1 {
            color: $white;
            margin: 0;
            line-height: 55px;
            font-size: 40px;
            text-shadow: 0 0 10px $black, 0 0 30px $black, 0 0 50px $black;
        }
    }

    @media only screen and (min-width: 768px) {
        .banner {
            height: 75px;

            &.sticky {
                margin-bottom: 0;
            }

            h1 {
                font-size: 50px;
                line-height: 75px;
            }
        }
    }
</style>
