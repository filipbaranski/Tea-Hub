<template>
    <section class="date">
        <AddModal
            v-if="modalOpen"
            v-on:closeModal="closeModal"
            type='date'
        />
        <div
            v-for="date of orderedDates"
            v-bind:key="date.id"
            class="date-container"
        >
            <p class="date-format">
                {{ date.day }}.{{ date.month }}
            </p>
            <p class="date-event">
                {{ date.event }}
            </p>
        </div>
        <div class="date-container-space" />
        <div
            v-for="date of orderedOneTimeDates"
            v-bind:key="date.id"
            class="date-container"
        >
            <p class="date-format">
                {{ date.day }}.{{ date.month }}.{{ date.year }}
            </p>
            <p class="date-event">
                {{ date.event }}
            </p>
        </div>
        <section v-on:click="openModal">
            <AddButton />
        </section>
    </section>
</template>

<script>
import AddButton from '@/components/AddButton.vue';
import AddModal from '@/components/AddModal.vue';

export default {
    name: 'tabs',
    components: {
        AddButton,
        AddModal,
    },
    data() {
        return {
            modalOpen: false,
        };
    },
    computed: {
        datesData() {
            return this.$store.state.dates;
        },
        orderedDates() {
            if (this.datesData.length !== 0) {
                const data = this.datesData;
                const filtered = data.filter(date => !date.year);
                const result = filtered.sort(this.compare);
                return result;
            }
            return [];
        },
        orderedOneTimeDates() {
            if (this.datesData.length !== 0) {
                const data = this.datesData;
                const filtered = data.filter(date => date.year);
                const result = filtered.sort(this.compareWithYear);
                return result;
            }
            return [];
        },
    },
    methods: {
        compare(a, b) {
            if (`${a.month}${a.day}` > `${b.month}${b.day}`) return 1;
            if (`${b.month}${b.day}` > `${a.month}${a.day}`) return -1;

            return 0;
        },
        compareWithYear(a, b) {
            if (`${a.year}${a.month}${a.day}` > `${b.year}${b.month}${b.day}`) return 1;
            if (`${b.year}${b.month}${b.day}` > `${a.year}${a.month}${a.day}`) return -1;

            return 0;
        },
        openModal() {
            this.modalOpen = true;
        },
        closeModal() {
            this.modalOpen = false;
        },
    },
};
</script>

<style scoped lang="scss">
    @import '@/styles/global.scss';

    .date {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        &-container {
            width: calc(100% - 20px);
            display: flex;
            align-items: center;
            margin: 5px;
            border: 2px solid $border-green;
            height: 25px;
            font-size: 14px;

            &-space {
                width: 100%;
                height: 20px;
            }
        }

        &-format {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $white;
            height: 100%;
            background-color: $border-green;
            padding: 0 5px;
        }

        &-event {
            flex: 5;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    @media only screen and (min-width: 1024px) {
        .date {
            flex-direction: row;

            &-container {
                font-size: 18px;
                height: 30px;
                width: calc(100% - 42px);
            }
        }
    }
</style>
