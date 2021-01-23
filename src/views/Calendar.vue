<template>
    <section class="calendar">
        <CalendarModal
            v-if="editModalOpen"
            v-on:closeModal="closeEditModal"
            v-bind:data="this.editedData"
        />
        <section class="calendar-header">
            <section>
                <h3>{{translate(month)}}</h3>
            </section>
        </section>
        <main class="calendar-proper" v-if="calendarData.year">
            <div
                class="calendar-day"
                v-for="day of emptyDays"
                v-bind:key="`empty-day-${day}`"
            />
            <div
                v-for="day of daysInMonth"
                v-bind:key="`actual-day-${day}`"
                :class="{
                    'calendar-day': true,
                    'calendar-day-filled': true,
                    'red': day <= currentDay && calendarData.red.indexOf(day) !== -1,
                    'blocked': day > currentDay,
                    'current': day === currentDay
                }"
                v-on:click="openEditModal(day)"
            >
                <p v-if="day > currentDay">{{day}}</p>
                <div
                    v-if="day <= currentDay"
                    class="calendar-day-footer"
                >
                    <p>
                        {{calendarData.number[day - 1]}}
                    </p>
                    <img
                        v-if="calendarData.no_cube.indexOf(day) === -1"
                        :src="CubeWhite"
                    />
                    <img
                        v-if="calendarData.no_cube.indexOf(day) !== -1"
                        :src="Cube"
                    />
                </div>
            </div>
        </main>
    </section>
</template>

<script>
import CalendarModal from '@/components/CalendarModal.vue';
import Cube from '@/assets/svg/Cube.svg';
import CubeWhite from '@/assets/svg/CubeWhite.svg';

export default {
    name: 'calendar',
    components: {
        CalendarModal,
    },
    data() {
        const currentDate = new Date();
        const currentDateString = currentDate.toString().split(' ');
        return {
            Cube,
            CubeWhite,
            currentDate,
            editModalOpen: false,
            editedData: {},
            currentDay: currentDateString[2],
            month: currentDate.getMonth(),
            year: currentDateString[3],
        };
    },
    computed: {
        calendarData() {
            return this.$store.state.calendar;
        },
        emptyDays() {
            const emptyBefore = this.currentDate.getDay() - (this.currentDay % 7) + 1;
            if (emptyBefore !== 0) return emptyBefore - 1;
            return 6;
        },
        daysInMonth() {
            return new Date(this.year, this.month + 1, 0).getDate();
        },
    },
    methods: {
        openEditModal(day) {
            if (day <= this.currentDay) {
                // eslint-disable-next-line
                const { _id, number, red, no_cube } = this.calendarData;
                const data = {
                    date: `${day >= 10
                        ? day : `0${day}`}.${this.month >= 9 ? this.month + 1
                        : `0${this.month + 1}`}.${this.year}`,
                    id: _id,
                    day,
                    number: number[day - 1],
                    red: red.indexOf(day) !== -1,
                    no_cube: no_cube.indexOf(day) !== -1,
                };
                this.editedData = data;
                this.editModalOpen = true;
            }
        },
        closeEditModal() {
            this.editModalOpen = false;
            this.editedData = {};
        },
        translate(month) {
            switch (month) {
            case 0:
                return 'Styczeń';
            case 1:
                return 'Luty';
            case 2:
                return 'Marzec';
            case 3:
                return 'Kwiecień';
            case 4:
                return 'Maj';
            case 5:
                return 'Czerwiec';
            case 6:
                return 'Lipiec';
            case 7:
                return 'Sierpień';
            case 8:
                return 'Wrzesień';
            case 9:
                return 'Październik';
            case 10:
                return 'Listopad';
            case 11:
                return 'Grudzień';
            default:
                return 'Nie ma takiego miesiąca';
            }
        },
    },
};
</script>

<style scoped lang="scss">
    @import '@/styles/global.scss';

    .calendar {
        &-header {
            display: flex;
            justify-content: center;
            margin-top: 20px;
            text-align: center;
        }

        &-proper {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            max-width: 600px;
            margin: 20px auto 0;
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
                background-color: $border-green;

                &:hover {
                    cursor: pointer;
                    color: $white;
                    opacity: 0.7;
                }

                &.red {
                    background-color: $red;
                }

                &.blocked {
                    cursor: default;
                    color: $black;
                    background-color: $button-shadow;
                    &:hover { opacity: 1; }
                }

                &.current {
                    border: 2px solid $black;
                    margin: 0;
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
