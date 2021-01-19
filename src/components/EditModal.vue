<template>
    <section class="modal-box">
        <div class="modal-mask" v-on:click="$emit('closeModal')" />
        <section class="modal-proper">
            <header>Edytuj</header>
            <textarea
                v-model="quote.text"
                v-if="type === 'quote'"
                placeholder="Początek..."
                spellcheck="false"
            />
            <textarea
                v-model="quote.strong"
                v-if="type === 'quote'"
                placeholder="Pointa..."
                spellcheck="false"
                class="bold"
            />
            <input
                v-model="date.day"
                v-if="type === 'date'"
                placeholder="DD"
                spellcheck="false"
            />
            <input
                v-model="date.month"
                v-if="type === 'date'"
                placeholder="MM"
                spellcheck="false"
            />
            <input
                v-model="date.year"
                v-if="type === 'date'"
                placeholder="RRRR"
                spellcheck="false"
            />
            <input
                v-model="date.event"
                v-if="type === 'date'"
                placeholder="Wydarzenie"
                spellcheck="false"
            />
            <footer>
                <button v-on:click="update">Zmień</button>
                <button v-on:click="$emit('closeModal')">Anuluj</button>
                <button v-on:click="remove">Usuń</button>
            </footer>
            <p v-if="error">Coś jest nie tak...</p>
        </section>
    </section>
</template>

<script>
export default {
    name: 'add-modal',
    props: ['type', 'data'],
    data() {
        return {
            quote: {
                text: this.$props.data.text || '',
                strong: this.$props.data.strong || '',
            },
            date: {
                day: this.$props.data.day || '',
                month: this.$props.data.month || '',
                year: this.$props.data.year || '',
                event: this.$props.data.event || '',
            },
            error: false,
        };
    },
    methods: {
        validate(type, data) {
            if (type === 'quote') {
                if (data.text !== '' && data.strong !== '') return true;
            }
            if (type === 'date') {
                const {
                    day,
                    month,
                    year,
                    event,
                } = data;
                if (
                    day !== '' && day.length === 2 && parseInt(day, 10) > 0 && parseInt(day, 10) <= 31
                    && month !== '' && month.length === 2 && parseInt(month, 10) > 0 && parseInt(month, 10) <= 12
                    && ((year !== '' && year.length === 4) || year === '')
                    && event !== '') return true;
            }
            return false;
        },
        update() {
            const { type, data } = this.$props;
            const id = data._id;
            if (type === 'quote') {
                const isValid = this.validate('quote', this.quote);
                if (isValid) {
                    this.error = false;
                    const payload = {
                        text: this.quote.text,
                        strong: this.quote.strong,
                    };
                    this.$store.dispatch('updateQuote', { id, payload })
                        .then(() => {
                            this.$emit('closeModal');
                        });
                }
            }
            if (type === 'date') {
                const isValid = this.validate('date', this.date);
                if (isValid) {
                    this.error = false;
                    const payload = {
                        day: this.date.day,
                        month: this.date.month,
                        event: this.date.event,
                    };
                    if (this.date.year !== '') payload.year = this.date.year;
                    this.$store.dispatch('updateDate', { id, payload })
                        .then(() => {
                            this.$emit('closeModal');
                        });
                } else {
                    this.error = true;
                }
            }
        },
        remove() {
            const { type, data } = this.$props;
            const id = data._id;
            if (type === 'quote') {
                this.$store.dispatch('deleteQuote', id)
                    .then(() => {
                        this.$emit('closeModal');
                    });
            }
            if (type === 'date') {
                this.$store.dispatch('deleteDate', id)
                    .then(() => {
                        this.$emit('closeModal');
                    });
            }
        },
    },
};
</script>

<style scoped lang="scss">
    @import '@/styles/global.scss';

    .modal {
        &-box {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 10;
        }
        &-mask {
            width: 100vw;
            height: 100vh;
            background-color: $black;
            opacity: 0.5;
        }
        &-proper {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            max-width: 400px;
            height: auto;
            background-color: $white;
            padding: 15px;
            border-radius: 6px;
            z-index: 20;
            box-shadow: $box-shadow;

            header {
                font-size: 24px;
                margin: 0 auto 20px;
                width: fit-content;
                border-bottom: 2px solid $border-green;
            }

            textarea {
                border: none;
                outline: none;
                resize: none;
                width: 100%;
                min-width: 200px;
                height: 38px;
                font-family: 'Times New Roman';
                font-size: 16px;
                margin-bottom: 15px;
                border-bottom: 1px solid $border-green;

                &::-webkit-scrollbar {
                    display: none;
                }

                &.bold {
                    font-weight: bold;
                }
            }

            input {
                border: none;
                outline: none;
                width: 100%;
                min-width: 200px;
                text-align: center;
                font-size: 16px;
                margin-bottom: 15px;
                border-bottom: 1px solid $border-green;
            }

            footer {
                display: flex;
                justify-content: space-around;
                margin-top: 5px;

                button {
                    border: none;
                    outline: none;
                    width: 75px;
                    padding: 8px;
                    border-radius: 5px;
                    color: white;

                    &:hover {
                        opacity: 0.5;
                        cursor: pointer;
                    }

                    &:first-child {
                        background-color: $border-green;
                        width: 35%;
                    }

                    &:nth-child(2) {
                        background-color: $grey;
                        width: 35%;
                    }

                    &:nth-child(3) {
                        background-color: $red;
                        width: 15%;
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        .modal-box {
        }
    }
</style>
