<template>
    <div class="header">
        <Banner
            v-on:closeMenu="setMenuState(false)"
            v-bind:windowTop="windowTop"
        />
        <MobileMenuBar
            v-on:openMenu="setMenuState(true)"
            v-bind:windowTop="windowTop"
        />
        <MenuItems
            :class="{'menu-mobile': true, 'open': menuOpened}"
            v-on:closeMenu="setMenuState(false)"
            v-bind:role="role"
            v-bind:route="this.$route.name"
        />
        <MenuItems
            class="menu-desktop"
            v-bind:role="role"
            v-bind:route="this.$route.name"
        />
    </div>
</template>

<script>
import Banner from '@/components/Header/Banner.vue';
import MobileMenuBar from '@/components/Header/MobileMenuBar.vue';
import MenuItems from '@/components/Header/MenuItems.vue';

export default {
    name: 'Header',
    components: {
        Banner,
        MobileMenuBar,
        MenuItems,
    },
    data() {
        return {
            role: 'admin',
            menuOpened: false,
            windowTop: 0,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        onScroll() {
            this.windowTop = window.top.scrollY;
        },
        setMenuState(value) {
            const bodyElement = document.body;
            bodyElement.classList.toggle('noscroll', value);
            this.menuOpened = value;
        },
    },
};
</script>

<style scoped lang="scss">
    @import '@/styles/global.scss';

    .overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }

    .header {
        display: flex;
        flex-direction: column;
    }

    .menu-desktop {
        display: none;
    }

    .menu-mobile {
        position: fixed;
        bottom: 0;
        right: -150%;
        display: flex;
        flex-direction: column;
        background-color: $white;
        height: 100vh;
        width: 100vw;
        opacity: 0;
        z-index: 200;
        transition: right 0.25s, opacity 0.5s;

        &.open {
            right: 0;
            opacity: 0.95;
        }
    }

    @media only screen and (min-width: 768px) {
        .menu-mobile {
            display: none;
        }

        .menu-desktop {
            display: flex;
            justify-content: space-between;
            height: 55px;
            background-color: $white;
        }
    }
</style>
