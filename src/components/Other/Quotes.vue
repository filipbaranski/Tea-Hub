<template>
    <section class="quote">
        <AddModal
            v-if="modalOpen"
            v-on:closeModal="closeModal"
            type='quote'
        />
        <EditModal
            v-if="editModalOpen"
            v-on:closeModal="closeEditModal"
            type='quote'
            v-bind:data="this.editedData"
        />
        <div
            v-for="quote of quotes"
            v-bind:key="quote.id"
            class="quote-container"
            v-on:click="openEditModal(quote)"
        >
            <p class="quote-text">
                {{ quote.text }} <strong> {{ quote.strong }} </strong>
            </p>
        </div>
        <section v-on:click="openModal">
            <AddButton />
        </section>
    </section>
</template>

<script>
import AddButton from '@/components/AddButton.vue';
import AddModal from '@/components/AddModal.vue';
import EditModal from '@/components/EditModal.vue';

export default {
    name: 'quotes',
    components: {
        AddButton,
        AddModal,
        EditModal,
    },
    data() {
        return {
            modalOpen: false,
            editModalOpen: false,
            editedData: {},
        };
    },
    computed: {
        quotes() {
            return this.$store.state.quotes;
        },
    },
    methods: {
        openModal() {
            this.modalOpen = true;
        },
        closeModal() {
            this.modalOpen = false;
        },
        openEditModal(data) {
            this.editedData = data;
            this.editModalOpen = true;
        },
        closeEditModal() {
            this.editModalOpen = false;
        },
    },
};
</script>

<style scoped lang="scss">
    @import '@/styles/global.scss';

    .quote {
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
            border: 2px solid $border-green;
            height: 105px;
            background-image: url('../../assets/quote360.png');
            background-repeat: no-repeat;
            background-size: 30px;
            background-position: 10px 10px;

            &:hover {
                background: $pale-green;
                cursor: pointer;
            }
        }

        &-text {
            text-align: center;
            margin: 0 30px;
            color: $grey;
            font-size: 14px;
            font-style: oblique;
        }
    }

    @media only screen and (min-width: 1024px) {
        .quote {
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
