<template>
    <section class="modal-box">
        <div class="modal-mask" v-on:click="$emit('closeModal')" />
        <section class="modal-proper">
            <header>Dodaj</header>
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
                <button v-on:click="send">Stwórz</button>
                <button v-on:click="$emit('closeModal')">Anuluj</button>
            </footer>
            <p v-if="error">Coś jest nie tak...</p>
        </section>
    </section>
</template>

<script>
export default {
    name: 'add-modal',
    props: ['type'],
    data() {
        return {
            quote: {
                text: '',
                strong: '',
            },
            date: {
                day: '',
                month: '',
                year: '',
                event: '',
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
        send() {
            const { type } = this.$props;
            if (type === 'quote') {
                const isValid = this.validate('quote', this.quote);
                if (isValid) {
                    this.$store.dispatch('postQuote', {
                        text: this.quote.text,
                        strong: this.quote.strong,
                    })
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
                    this.$store.dispatch('postDate', payload)
                        .then(() => {
                            this.$emit('closeModal');
                        });
                } else {
                    this.error = true;
                }
            }
        },
    },
};
</script>

<style scoped lang="scss">
    @import '@/styles/global.scss';

    @keyframes moduleUpFadeIn {
            0% {
                transform: translateX(-50%) translateY(-25%);
                opacity: 0;
            }
            100% {
                transform: translateX(-50%) translateY(-50%);
                opacity: 1;
            }
        }

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
            animation: moduleUpFadeIn 0.5s;

            header {
                font-size: 24px;
                margin: 0 auto 20px;
                width: fit-content;
                border-bottom: 2px solid $border-green;
                padding: 2px 6px;
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
                    width: 35%;
                    padding: 8px;
                    border-radius: 5px;
                    color: white;

                    &:hover {
                        opacity: 0.5;
                        cursor: pointer;
                    }

                    &:first-child {
                        background-color: $border-green;
                    }

                    &:last-child {
                        background-color: $grey;
                    }
                }
            }
        }
    }
</style>
