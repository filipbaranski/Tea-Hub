<template>
    <nav class="tabs">
        <div
            v-for="tab in viewData"
            v-bind:key="tab.label"
            class="tabs-label"
            :class="{'active': view === tab.label }"
            v-on:click="$emit('changeTab', tab.label)"
        >
            {{ tab.text }}
        </div>
    </nav>
</template>

<script>
export default {
    name: 'tabs',
    props: ['view', 'viewData'],
};
</script>

<style scoped lang="scss">
    @import '@/styles/global.scss';

    .tabs {
        display: flex;
        margin-bottom: 10px;

        &-label {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            margin: 0 8px;

            &.active {
                border-bottom: 3px solid $border-green;
            }

            &:hover {
                cursor: pointer;
                border-bottom: 3px solid $border-green;
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        .tabs {
            margin-bottom: 20px;

            &-label {
                margin: 0 18px;
            }
        }
    }
</style>
