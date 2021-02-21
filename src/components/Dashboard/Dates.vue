<template>
    <main>
        <div v-if="upcomingEvents.length !== 0" class="dates">
            <div
                v-if="datesLoading === true || datesDateUpdating.length !== 0"
                class="dates-loader"
            />
            <section v-for="n in daysInAdvance + 1" :key="n">
                <div v-if="eventFilter(n - 1).length !== 0" class="dates-block">
                    <p class="dates-heading">
                        {{n - 1 === 0 ? 'Dzisiaj' : ''}}
                        {{n - 1 === 1 ? `Jutro` : ''}}
                        {{n - 1 > 1 ? `Za ${n - 1} dni` : ''}}
                    </p>
                    <span v-for="event in eventFilter(n - 1)" :key="event.id">
                        <p class="dates-date">{{ event.event }}</p>
                    </span>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
export default {
    name: 'dates',
    data() {
        return {
            daysInAdvance: 7,
        };
    },
    computed: {
        datesDateUpdating() {
            return this.$store.state.dates.datesDateUpdating;
        },
        datesLoading() {
            return this.$store.state.dates.datesLoading;
        },
        storedDates() {
            return this.$store.state.dates.dates;
        },
        upcomingEvents() {
            const displayedEvents = [];
            const msInDay = 24 * 60 * 60 * 1000;
            const timeInAdvance = this.daysInAdvance * msInDay;
            const today = new Date();
            const currentMonth = today.getMonth();
            const currentYear = today.getFullYear();
            const currentDate = new Date(currentYear, currentMonth, today.getDate());
            const currentTime = currentDate.getTime();
            const data = this.$store.state.dates.dates;
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
                transform: translateY(100px);
                opacity: 0;
            }
            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }

    @keyframes rotateLoader {
        0% {
            transform: translateY(-50%) rotate(0deg);
        }
        100% {
            transform: translateY(-50%) rotate(360deg);
        }
    }

    .dates {
        max-height: 50vh;
        overflow-y: scroll;
        padding: 15px 20px 0;
        border: 2px solid $border-green;
        font-size: 14px;
        animation: moduleUpFadeIn 1s;
        min-width: 230px;
        max-width: 75vw;

        &-heading {
            width: fit-content;
            margin: 0 auto 5px;
            padding: 2px 6px;
            font-weight: bold;
            border-bottom: 2px solid $border-green;
        }

        &-date {
            line-height: 18px;
        }

        &-block {
            margin-bottom: 15px;
        }

        &::-webkit-scrollbar {
            display: none;
        }

        &-loader {
            position: absolute;
            bottom: 0;
            right: 10px;
            height: 20px;
            width: 20px;
            border-radius: 20px;
            border-top: 3px solid $border-green;
            border-bottom: 3px solid $border-green;
            border-left: 3px solid transparent;
            border-right: 3px solid transparent;
            z-index: 10000;
            animation: rotateLoader 1s linear infinite;
        }
    }

    @media only screen and (min-width: 768px) {
        .dates {
            font-size: 18px;
            min-width: 360px;
        }
    }
</style>
