<template>
    <section class="calendar">
        <main class="calendar-proper" v-if="Object.keys(calendarData).length !== 0">
            <div
                class="calendar-day"
                v-for="day of emptyDays(year, month)"
                v-bind:key="`empty-day-${day}`"
            />
            <div
                :class="{
                    'calendar-day': true,
                    'calendar-day-filled': true,
                    'green': day <= currentDay && calendarData.red.indexOf(day) === -1,
                    'red': day <= currentDay && calendarData.red.indexOf(day) !== -1
                }"
                v-for="day of daysInMonth(year, month)"
                v-bind:key="`actual-day-${day}`"
            >
                <p>{{dayContent(day)}}</p>
                <div
                    v-if="day <= currentDay"
                    class="calendar-day-footer"
                >
                    <p>{{calendarData.number[day - 1] === 0 ? '' : calendarData.number[day - 1]}}</p>
                    <img v-if="calendarData.no_cube.indexOf(day) === -1" src="../assets/svg/Cube.svg" />
                </div>
            </div>
        </main>
    </section>
</template>

<script>
export default {
    name: 'calendar',
    data() {
        return {
            currentDay: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
        };
    },
    computed: {
        calendarData() {
            return this.$store.state.calendar;
        },
    },
    methods: {
        daysInMonth(y, m) {
            return new Date(y, m + 1, 0).getDate();
        },
        emptyDays(y, m) {
            const emptyBefore = new Date(y, m, 1).getDay();
            if (emptyBefore === 0) {
                return 6;
            }
            return emptyBefore - 1;
        },
        dayContent(day) {
            if (day <= this.currentDay) {
                return '';
            }
            return day;
        },
    },
};
</script>

<style scoped lang="scss">
    @import '@/styles/global.scss';

    .calendar {
        &-proper {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            max-width: 600px;
            margin: 50px auto 0;
        }

        &-day {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 2px;
            width: 13%;
            height: 50px;
            font-weight: 600;

            img {
                width: 20px;
                height: 20px;
            }

            &-filled {
                background-color: $button-shadow;

                &:hover {
                    cursor: pointer;
                    background-color: $pale-green;
                    color: $white;
                }

                &.green {
                    background-color: $border-green;

                    &:hover { opacity: 0.5; }
                }

                &.red {
                    background-color: $red;
                    &:hover { opacity: 0.5; }
                }
            }

            &-footer {
                position: absolute;
                height: 100%;
                width: 100%;
                text-shadow: $text-shadow;

                p {
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    font-size: 12px;
                }

                img {
                    position: absolute;
                    bottom: 5px;
                    left: 5px;
                }
            }
        }
    }

</style>
