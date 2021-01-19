<template>
    <div class="button">+</div>
</template>

<script>
export default {
    name: 'add-button',
};
</script>

<style scoped lang="scss">
    @import '@/styles/global.scss';

    .button {
        position: fixed;
        bottom: 10px;
        right: 30px;
        width: 45px;
        height: 45px;
        border-radius: 100%;
        background-color: $border-green;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        color: $white;
        box-shadow: $box-shadow;

        &:hover {
            background-color: $pale-green;
            cursor: pointer;
        }
    }

    @media only screen and (min-width: 1024px) {
        .button {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 45px;
            height: 45px;
            border-radius: 100%;
            background-color: $border-green;
        }
    }
</style>
