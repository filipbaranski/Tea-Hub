<template>
    <div class="dashboard">
        <CalendarModal
            v-if="editModalOpen"
            v-on:closeModal="closeEditModal"
            v-bind:data="this.editedData"
        />
        <Quote class="dashboard-layout" />
        <section class="dashboard-layout dashboard-bottom_container" >
            <CalendarDay v-on:openModal="openEditModal" />
            <Dates />
        </section>
        <div class="dashboard-background" />
    </div>
</template>

<script>
import Quote from '@/components/Dashboard/Quote.vue';
import CalendarDay from '@/components/Dashboard/CalendarDay.vue';
import Dates from '@/components/Dashboard/Dates.vue';

import CalendarModal from '@/components/Calendar/CalendarModal.vue';

export default {
    name: 'dashboard',
    components: {
        Quote,
        CalendarDay,
        Dates,
        CalendarModal,
    },
    data() {
        return {
            editModalOpen: false,
            editedData: {},
        };
    },
    methods: {
        openEditModal(data) {
            if (this.$store.state.calendar.calendarLoading === false) {
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

    .dashboard {
        margin: 0 10px;
        height: calc(100vh - 95px);
        position: relative;
        overflow: hidden;

        &-background {
            min-height: calc(100vh - 140px);
            opacity: 0.4;
            background-image: url('../assets/fav.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: 256px;
        }

        &-layout {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            z-index: 100;
        }

        &-bottom_container {
            position: absolute;
            bottom: 20px;
        }
    }

    @media only screen and (min-width: 768px) {
        .dashboard {
            height: calc(100vh - 130px);
        }
    }
</style>
