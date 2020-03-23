<template>
    <div class="quotes">
        <div
            v-for="quote of quotes"
            v-bind:key="quote"
            class="quotes-container"
        >
            <p
                v-html="quote"
                class="quotes-text"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'quotes',
    data() {
        return {
            quotes: [
                'Don\'t cry because it\'s over, <strong>smile because it happened</strong>',
                'You are unbelievably sensitive to the story your environment tells you. <strong>Choose your environment wisely.</strong>',
                'To improve, pick some small thing you can do and do it. <strong>Don\'t try to fix something you can\'t fix.</strong>',
                'Stick to one thing. <strong>Don\'t get distracted.</strong>',
                'Your self-image controls a lot of things. <strong>Respect yourself.</strong>',
                'Discipline is much more important than motivation. <strong>Learn how to work without motivation.</strong>',
                'Misery is comfortable, <strong>happiness takes effort.</strong>',
                'Focus on new routine. It takes 20 to 28 days to form new habit. <strong>Trust the process.</strong>',
                'Loneliness is the greatest trigger of any addiction. <strong>Seek company.</strong>',
                'Fear of loss is greater then hope of gain. It\'s human nature to avoid loss. <strong>Don\'t fall for avoiding loss.</strong>',
                'Prove yourself wrong. Think about the outcome and change action according to your answer. <strong>Your reasons don\'t matter, the outcome does.</strong>',
                '<strong>Form a habit through small actions.</strong> Make them actionalbe, make them easy (but leave room for improvement), set deadlines, make yourself accountable.',
            ],
        };
    },
};
</script>

<style scoped lang="scss">
    .quotes {
        margin: 0 10px;
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
            border: 2px solid #99cc33;
            height: 105px;
            background-image: url('../assets/quote360.png');
            background-repeat: no-repeat;
            background-size: 35px;
            background-position: 10px 10px;
        }
        &-text {
            text-align: center;
            margin: 0 30px;
            color: #404040;
            font-size: 14px;
            font-style: oblique;
        }
    }

    @media only screen and (min-width: 1024px) {
        .quotes {
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
