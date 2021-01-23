<template>
    <div v-if="upcomingEvents.length !== 0" class="dates">
        <section v-for="n in daysInAdvance + 1" :key="n">
            <div v-if="eventFilter(n - 1).length !== 0" class="dates-block">
                <p class="dates-heading">
                    {{n - 1 === 0 ? 'Dzisiaj' : ''}}
                    {{n - 1 === 1 ? `Jutro` : ''}}
                    {{n - 1 > 1 ? `Za ${n - 1} dni` : ''}}
                </p>
                <span v-for="event in eventFilter(n - 1)" :key="event.id">
                    <p>{{ event.event }}</p>
                </span>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'quote',
    data() {
        return {
            daysInAdvance: 7,
        };
    },
    computed: {
        upcomingEvents() {
            const displayedEvents = [];
            const msInDay = 24 * 60 * 60 * 1000;
            const timeInAdvance = this.daysInAdvance * msInDay;
            const today = new Date();
            const currentMonth = today.getMonth();
            const currentYear = today.getFullYear();
            const currentDate = new Date(currentYear, currentMonth, today.getDate());
            const currentTime = currentDate.getTime();
            const data = this.$store.state.dates;
            data.forEach((date) => {
                const eventDay = parseInt(date.day, 10);
                const eventMonth = parseInt(date.month, 10) - 1;
                let eventYear = currentYear;
                if (date.year) eventYear = parseInt(date.year, 10);
                if (eventMonth < currentMonth) {
                    eventYear = currentYear + 1;
                }
                const eventDate = new Date(eventYear, eventMonth, eventDay);
                const eventTime = eventDate.getTime();
                const timesDifference = eventTime - currentTime;
                if (timesDifference <= timeInAdvance && timesDifference > -1 * msInDay) {
                    const daysLeft = Math.floor(timesDifference / msInDay);
                    displayedEvents.push({ ...date, daysLeft });
                }
            });
            return displayedEvents;
        },
    },
    methods: {
        eventFilter(daysLeft) {
            const events = this.upcomingEvents;
            const filteredEvents = events.filter((event) => event.daysLeft === daysLeft);
            return filteredEvents;
        },
    },
};
</script>

<style scoped lang="scss">
    @import '@/styles/global.scss';

    @keyframes moduleUpFadeIn {
            0% {
                transform: translateX(-50%) translateY(100%);
                opacity: 0;
            }
            100% {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
        }

    .dates {
        max-height: 50vh;
        overflow-y: scroll;
        padding: 20px 20px 0;
        border: 2px solid $border-green;
        border-radius: 8px;
        font-size: 14px;
        bottom: 20px;
        animation: moduleUpFadeIn 1s;
        min-width: 230px;
        max-width: 75vw;

        &-heading {
            margin-bottom: 5px;
            font-weight: bold;
        }

        &-block {
            margin-bottom: 20px;
        }

        &::-webkit-scrollbar {
            display: none;
        }
    }

    @media only screen and (min-width: 768px) {
        .dates {
            font-size: 18px;
            min-width: 360px;
        }
    }
</style>
