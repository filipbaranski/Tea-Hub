<template>
    <section class="calendar">
        <CalendarModal
            v-if="editModalOpen"
            v-on:closeModal="closeEditModal"
            v-bind:data="this.editedData"
        />
        <main class="calendar-proper" v-if="calendarData.year && calendarDaysUpdating !== null">
            <div
                v-if="calendarLoading || calendarDaysUpdating.length !== 0"
                class="calendar-loader"
            />
            <div
                v-if="calendarLoading || calendarDaysUpdating.length !== 0"
                class='calendar-mask'
            />
            <div
                class="calendar-day"
                v-for="day of emptyDays"
                v-bind:key="`empty-${day}`"
            />
            <div
                v-for="day of daysInMonth"
                v-bind:key="`actual-${day}`"
                :class="{
                    'calendar-day': true,
                    'calendar-day-filled': true,
                    'red': calendarData.red.indexOf(day) !== -1,
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
                        :src="calendarData.no_cube.indexOf(day) === -1 ? CubeWhite : Cube"
                    />
                </div>
            </div>
        </main>
    </section>
</template>

<script>
import CalendarModal from '@/components/Calendar/CalendarModal.vue';
import Cube from '@/assets/svg/Cube.svg';
import CubeWhite from '@/assets/svg/CubeWhite.svg';

export default {
    name: 'calendar',
    components: {
        CalendarModal,
    },
    data() {
        const currentDate = new Date();
        return {
            Cube,
            CubeWhite,
            currentDate,
            editModalOpen: false,
            editedData: {},
            currentDay: currentDate.getDate(),
            month: currentDate.getMonth(),
            year: currentDate.getFullYear(),
        };
    },
    computed: {
        calendarDaysUpdating() {
            return this.$store.state.calendar.calendarDaysUpdating;
        },
        calendarLoading() {
            return this.$store.state.calendar.calendarLoading;
        },
        calendarData() {
            return this.$store.state.calendar.calendar;
        },
        emptyDays() {
            const emptyBefore = this.currentDate.getDay() - (this.currentDay % 7) + 1;
            if (emptyBefore > 0) return emptyBefore - 1;
            return emptyBefore + 6;
        },
        daysInMonth() {
            return new Date(this.year, this.month + 1, 0).getDate();
        },
    },
    methods: {
        openEditModal(day) {
            if (day <= this.currentDay
                && this.calendarLoading === false
                && this.calendarDaysUpdating.length === 0) {
                // eslint-disable-next-line
                const { _id, red, number, no_cube } = this.calendarData;
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
    },
};
</script>

<style scoped lang="scss">
    @import '@/styles/global.scss';

    @keyframes rotateLoader {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }

    .calendar {
        &-mask {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: $white;
            z-index: 1000;
            opacity: 0.5;
            cursor: default;
        }

        &-loader {
            position: absolute;
            top: 50%;
            left: 50%;
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
            cursor: default;
        }

        &-proper {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            max-width: 600px;
            margin: 80px auto 0;
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
                background: -webkit-linear-gradient(225deg, rgba(153,204,51,0.8) 0%,
                    rgba(153,204,51,1) 60%);

                &:hover {
                    cursor: pointer;
                    color: $white;
                    opacity: 0.7;
                }

                &.red {
                    background: -webkit-linear-gradient(225deg, rgba(185,14,10,0.8) 0%,
                        rgba(185,14,10,1) 60%);
                }

                &.blocked {
                    cursor: default;
                    color: $black;
                    background: $button-shadow;
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
