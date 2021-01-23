<template>
    <section class="modal-box">
        <div class="modal-mask" v-on:click="$emit('closeModal')" />
        <section class="modal-proper">
            <header>{{ date }}</header>
            <div class="modal-selects">
                <div class="modal-section">
                    <input id="red" type="checkbox" v-model="red" />
                    <label for="red">
                        <div :class="{'modal-circle': true, 'red': red}" />
                    </label>
                </div>
                <div class="modal-section">
                    <input id="cube" type="checkbox" v-model="no_cube" />
                    <label for="cube">
                        <img
                            v-if="no_cube"
                            src="../assets/svg/Cube.svg"
                        />
                        <img
                            v-if="!no_cube"
                            src="../assets/svg/CubeWhite.svg"
                        />
                    </label>
                </div>
            </div>
            <input
                type="text"
                v-model="number"
                placeholder="Powtórzenia"
                spellcheck="false"
            />
            <footer>
                <button v-on:click="update">Zmień</button>
                <button v-on:click="$emit('closeModal')">Anuluj</button>
            </footer>
        </section>
    </section>
</template>

<script>
export default {
    name: 'calendar-modal',
    props: ['data'],
    data() {
        return {
            date: this.$props.data.date,
            id: this.$props.data.id,
            day: this.$props.data.day,
            number: this.$props.data.number,
            red: this.$props.data.red,
            no_cube: this.$props.data.no_cube,
        };
    },
    methods: {
        update() {
            // eslint-disable-next-line
            const { id, day, number, red, no_cube } = this;
            const payload = {
                day,
                number,
                red,
                no_cube,
            };
            this.$store.dispatch('updateCalendar', { id, payload })
                .then(() => {
                    this.$emit('closeModal');
                });
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
        &-section {
            display: flex;
            justify-content: center;
            margin: 20px;
            align-items: center;

            input {
                display: none;
            }

            > label {
                width: 40px;
                cursor: pointer;
            }
        }
        &-selects {
            display: flex;
            justify-content: space-evenly;
            margin-bottom: 20px;
        }
        &-mask {
            width: 100vw;
            height: 100vh;
            background-color: $black;
            opacity: 0.5;
        }
        &-circle {
            width: 34px;
            height: 34px;
            border: 3px solid $black;
            border-radius: 40px;
            background-color: $border-green;

            &.red {
                background-color: $red;
            }
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

            > input {
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
