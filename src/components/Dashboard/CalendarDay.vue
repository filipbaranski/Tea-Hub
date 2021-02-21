<template>
    <section
        class="calendar_day-container"
        v-on:click="$emit('openModal', editedData)"
        v-if="calendarData.year && calendarDaysUpdating !== null"
    >
        <div
            v-if="calendarLoading || calendarDaysUpdating.indexOf(currentDay) !== -1"
            class="calendar_day-loader"
        />
        <div
            v-if="calendarLoading || calendarDaysUpdating.indexOf(currentDay) !== -1"
            class='calendar_day-mask'
        />
        <div class="calendar_day">
            <div
                :class="{'calendar_day-circle': true,
                    'red': calendarData.red.indexOf(currentDay) !== -1}"
            />
            <img
                :src="calendarData.no_cube.indexOf(currentDay) === -1 ? CubeWhite : Cube"
            />
            <p>
                {{calendarData.number[currentDay - 1] || 0}}
            </p>
        </div>
    </section>
</template>

<script>
import Cube from '@/assets/svg/Cube.svg';
import CubeWhite from '@/assets/svg/CubeWhite.svg';

export default {
    name: 'calendar-day',
    data() {
        const currentDate = new Date();
        return {
            Cube,
            CubeWhite,
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
        editedData() {
            // eslint-disable-next-line
            const { _id, red, number, no_cube } = this.calendarData;
            const day = this.currentDay;
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
            return data;
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

    .calendar_day {
        padding: 5px;
        border: 2px solid $border-green;
        font-size: 14px;
        min-width: 230px;
        max-width: 75vw;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;

        &-container {
            position: relative;
            animation: moduleUpFadeIn 1s;
            animation-delay: -0.1s;
        }

        &:hover {
            cursor: pointer;
            background: $pale-green;
        }

        &-circle {
            width: 24px;
            height: 24px;
            border-radius: 40px;
            background: -webkit-linear-gradient(225deg, rgba(153,204,51,0.8) 0%,
                rgba(153,204,51,1) 60%);;

            &.red {
                background: -webkit-linear-gradient(225deg, rgba(185,14,10,0.8) 0%,
                    rgba(185,14,10,1) 60%);;
            }
        }

        img {
            min-width: 27px;
        }

        p {
            width: 27px;
            font-weight: 600;
        }

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
        .calendar_day {
            font-size: 18px;
            min-width: 360px;
        }
    }
</style>
