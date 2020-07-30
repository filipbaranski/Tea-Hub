<template>
    <div class="other">
        <Tabs
            v-bind:viewData="viewData"
            v-bind:view="view"
            v-on:changeTab="switchTab($event)"
        />
        <Quotes v-if="view === 'quotes'" />
        <Dates v-if="view === 'dates'" />
    </div>
</template>

<script>
import Tabs from '@/components/Tabs.vue';
import Quotes from '@/components/Other/Quotes.vue';
import Dates from '@/components/Other/Dates.vue';

export default {
    name: 'other',
    components: {
        Tabs,
        Quotes,
        Dates,
    },
    data() {
        return {
            view: 'quotes',
            viewData: [
                {
                    text: 'Cytaty',
                    label: 'quotes',
                },
                {
                    text: 'Daty',
                    label: 'dates',
                },
            ],
        };
    },
    methods: {
        switchTab(view) {
            this.view = view;
        },
    },
};
</script>

<style scoped lang="scss">
    @import '@/styles/global.scss';

    .other {
        margin: 0 10px;
    }

    @media only screen and (min-width: 1024px) {
        .other {
            margin-bottom: 20px;
        }
    }
</style>
