<template>
    <section
        v-on:click="$emit('openMenu')"
        :class="{'mobile-bar': true, 'sticky': windowTop > 55}"
    >
        <MenuIcon />
    </section>
</template>

<script>
import MenuIcon from '@/assets/svg/MenuIcon.vue';

export default {
    name: 'mobile-menu-bar',
    props: ['windowTop'],
    components: {
        MenuIcon,
    },
};
</script>

<style scoped lang="scss">
    @import '@/styles/global.scss';

    .mobile-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        background-color: $border-green;
        cursor: pointer;

        &.sticky {
            position: fixed;
            top: 0;
            width: 100vw;
        }
    }

    @media only screen and (min-width: 768px) {
        .mobile-bar {
            display: none;
        }
    }
</style>
