<template>
    <section class="date">
        <AddModal
            v-if="addModalOpen"
            v-on:closeModal="closeModal"
            type='date'
        />
        <EditModal
            v-if="editModalOpen"
            v-on:closeModal="closeEditModal"
            type='date'
            v-bind:data="this.editedData"
        />
        <p class="date-separator first">Coroczne</p>
        <div
            v-for="date of orderedDates"
            v-bind:key="date.id"
            :class="{'date-container': true, 'loading': datesDateUpdating.indexOf(date._id) !== -1}"
            v-on:click="openEditModal(date)"
        >
            <p class="date-format">
                {{ date.day }}.{{ date.month }}
            </p>
            <p class="date-event">
                {{ date.event }}
            </p>
            <div
                v-if="(datesLoading === true && datesDateUpdating.length === 0)
                    || datesDateUpdating.indexOf(date._id) !== -1"
                class="date-loader"
            />
            <div
                v-if="(datesLoading === true && datesDateUpdating.length === 0)
                    || datesDateUpdating.indexOf(date._id) !== -1"
                class='date-mask'
            />
        </div>
        <p class="date-separator">Terminy</p>
        <div
            v-for="date of orderedOneTimeDates"
            v-bind:key="date.id"
            :class="{'date-container': true,
                'grey': passed(date) === true,
                'loading': datesDateUpdating.indexOf(date._id) !== -1}"
            v-on:click="openEditModal(date)"
        >
            <p class="date-format">
                {{ date.day }}.{{ date.month }}.{{ date.year }}
            </p>
            <p class="date-event">
                {{ date.event }}
            </p>
            <div
                v-if="(datesLoading === true && datesDateUpdating.length === 0)
                    || datesDateUpdating.indexOf(date._id) !== -1"
                class="date-loader"
            />
            <div
                v-if="(datesLoading === true && datesDateUpdating.length === 0)
                    || datesDateUpdating.indexOf(date._id) !== -1"
                class='date-mask'
            />
        </div>
        <section v-on:click="openModal">
            <AddButton />
        </section>
    </section>
</template>

<script>
import AddButton from '@/components/commons/AddButton.vue';
import AddModal from '@/components/Other/AddModal.vue';
import EditModal from '@/components/Other/EditModal.vue';

export default {
    name: 'date',
    components: {
        AddButton,
        AddModal,
        EditModal,
    },
    data() {
        return {
            addModalOpen: false,
            editModalOpen: false,
            editedData: {},
        };
    },
    computed: {
        datesDateUpdating() {
            return this.$store.state.dates.datesDateUpdating;
        },
        datesLoading() {
            return this.$store.state.dates.datesLoading;
        },
        datesData() {
            return this.$store.state.dates.dates;
        },
        orderedDates() {
            if (this.datesData.length !== 0) {
                const data = this.datesData;
                const filtered = data.filter((date) => !date.year);
                const result = filtered.sort(this.compare);
                return result;
            }
            return [];
        },
        orderedOneTimeDates() {
            if (this.datesData.length !== 0) {
                const data = this.datesData;
                const filtered = data.filter((date) => date.year);
                const result = filtered.sort(this.compareWithYear);
                return result;
            }
            return [];
        },
    },
    methods: {
        compare(a, b) {
            if (`${a.month}${a.day}` > `${b.month}${b.day}`) return 1;
            if (`${b.month}${b.day}` > `${a.month}${a.day}`) return -1;

            return 0;
        },
        compareWithYear(a, b) {
            if (`${a.year}${a.month}${a.day}` > `${b.year}${b.month}${b.day}`) return 1;
            if (`${b.year}${b.month}${b.day}` > `${a.year}${a.month}${a.day}`) return -1;

            return 0;
        },
        openModal() {
            this.addModalOpen = true;
        },
        closeModal() {
            this.addModalOpen = false;
        },
        openEditModal(data) {
            if (this.datesLoading === false && this.datesDateUpdating.indexOf(data._id) === -1) {
                this.editedData = data;
                this.editModalOpen = true;
            }
        },
        closeEditModal() {
            this.editModalOpen = false;
        },
        passed(date) {
            const currentDate = new Date().toJSON().slice(0, 10);
            // eslint-disable-next-line
            const entryDate = ({ year, month, day }) => new Date(year, month - 1, parseInt(day, 10) + 1)
                .toJSON()
                .slice(0, 10);
            return entryDate(date) < currentDate;
        },
    },
};
</script>

<style scoped lang="scss">
    @import '@/styles/global.scss';

    @keyframes rotateLoader {
        0% {
            transform: translateY(-50%) rotate(0deg);
        }
        100% {
            transform: translateY(-50%) rotate(360deg);
        }
    }

    .date {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        &-loader {
            position: absolute;
            bottom: -8px;
            right: 5px;
            height: 14px;
            width: 14px;
            border-radius: 20px;
            border-top: 3px solid $border-green;
            border-bottom: 3px solid $border-green;
            border-left: 3px solid transparent;
            border-right: 3px solid transparent;
            z-index: 10000;
            animation: rotateLoader 1s linear infinite;
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

        &-container {
            position: relative;
            width: calc(100% - 20px);
            display: flex;
            align-items: center;
            margin: 5px;
            border: 2px solid $border-green;
            height: 25px;
            font-size: 14px;
            z-index: 1;

            &.grey {
                border: 2px solid $grey;

                > .date-format {
                    background-color: $grey;
                }

                &:hover {
                    background: $pale-grey;
                }
            }

            &:hover {
                background: $pale-green;
                cursor: pointer;
            }

            &.loading {
                z-index: -1;
            }

            section {
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 18px;
                    height: 18px;
                    margin-left: 12px;

                    &:hover {
                        cursor: pointer;
                    }
                }
            }

            &-space {
                width: 100%;
                height: 20px;
            }
        }

        &-separator {
            margin-top: 20px;
            margin-bottom: 5px;
            font-size: 16px;
            text-decoration: underline;
            width: 83.33%;
            padding-left: 16.67%;
            text-align: center;

            &.first {
                margin-top: 0;
            }
        }

        &-format {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $white;
            height: 100%;
            background-color: $border-green;
            padding: 0 5px;
        }

        &-event {
            flex: 5;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
    }

    @media only screen and (min-width: 1024px) {
        .date {
            flex-direction: row;

            &-loader {
                bottom: -6px;
            }

            &-container {
                font-size: 18px;
                height: 30px;
                width: calc(100% - 42px);
            }

            &-separator {
                font-size: 20px;
            }
        }
    }
</style>
