<template>
    <section class="date">
        <div
            v-for="date of dates"
            v-bind:key="date.event"
            class="date-container"
        >
            <p class="date-format">
                {{ date.day }}.{{ date.month }}
            </p>
            <p class="date-event">
                {{ date.event }}
            </p>
        </div>
    </section>
</template>

<script>
import { dates } from '@/data/dates.json';

export default {
    name: 'tabs',
    data() {
        return {
            dates,
        };
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
        }

        &-format {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $white;
            height: 100%;
            background-color: $border-green;
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
