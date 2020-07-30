<template>
    <nav v-on:click="$emit('closeMenu')">
        <router-link
            to="/projects"
            :class="{'active': route === 'projects' }"
        >
            Projekty
        </router-link>
        <router-link
            v-if="role === 'admin'"
            to="/calendar"
            :class="{'active': route === 'calendar' }"
        >
            Kalendarz
        </router-link>
        <router-link
            v-if="role === 'admin'"
            to="/other"
            :class="{'active': route === 'other' }"
        >
            Inne
        </router-link>
    </nav>
</template>

<script>
export default {
    name: 'menu-items',
    props: ['route', 'role'],
};
</script>

<style scoped lang="scss">
    @import '@/styles/global.scss';

    a {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 75px;
        border-left: 4px solid $white;
        border-bottom: 1px solid $pale-green;
        color: $black;
        font-weight: bold;
        text-decoration: none;

        &.active {
            border-left: 4px solid $border-green;
            background-color: $pale-green;
            text-shadow: 0 0 4px $black;
            color: $white;
        }
    }

    @media only screen and (min-width: 768px) {
        a {
            border-bottom: 3px solid $button-shadow;
            border-left: none;
            line-height: 35px;
            font-size: 18px;

            &:hover {
                border-bottom: 3px solid $border-green;
            }

            &.active {
                border-bottom: 3px solid $border-green;
                background-color: $white;
                border-left: none;
                text-shadow: none;
                color: $black;
            }
        }
    }
</style>
