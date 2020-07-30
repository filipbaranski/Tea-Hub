<template>
    <section class="quote">
        <div
            v-for="quote of quotes"
            v-bind:key="quote.id"
            class="quote-container"
        >
            <p class="quote-text">
                {{ quote.text }} <strong> {{ quote.strong }} </strong>
            </p>
        </div>
    </section>
</template>

<script>
import { quotes } from '@/data/quotes.json';

export default {
    name: 'quotes',
    data() {
        return {
            quotes,
        };
    },
};
</script>

<style scoped lang="scss">
    @import '@/styles/global.scss';

    .quote {
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
            height: 105px;
            background-image: url('../../assets/quote360.png');
            background-repeat: no-repeat;
            background-size: 35px;
            background-position: 10px 10px;
        }

        &-text {
            text-align: center;
            margin: 0 30px;
            color: $grey;
            font-size: 14px;
            font-style: oblique;
        }
    }

    @media only screen and (min-width: 1024px) {
        .quote {
            flex-direction: row;

            &-container {
                width: calc(33% - 20px);
            }

            &-text {
                font-size: 18px;
            }
        }
    }
</style>
