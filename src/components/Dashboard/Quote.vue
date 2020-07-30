<template>
    <div class="quote">
        <p>{{ randomQuote.strong}}</p>
    </div>
</template>

<script>

export default {
    name: 'quote',
    computed: {
        quotes() {
            return this.$store.state.quotes;
        },
        randomQuote() {
            if (this.quotes.length !== 0) {
                const min = 0;
                const max = this.quotes.length;
                const randomNumber = min + Math.floor((max - min) * Math.random());
                return this.quotes[randomNumber];
            }
            return '';
        },
    },
};
</script>

<style scoped lang="scss">
    @import '@/styles/global.scss';

    @keyframes moduleDownFadeIn {
        0% {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
        100% {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }

    .quote {
        padding-left: 10px;
        min-height: 40px;
        font-size: 16px;
        font-style: oblique;
        top: 20px;
        background-image: url('../../assets/quote360.png');
        background-repeat: no-repeat;
        background-size: 10px;
        animation: moduleDownFadeIn 1s;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    @media only screen and (min-width: 768px) {
        .quote {
            font-size: 20px;
            background-size: 15px;
            padding-left: 20px;
        }
    }
</style>
