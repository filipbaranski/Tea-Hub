<template>
    <div class="dashboard">
        <div />
    </div>
</template>

<script>
export default {
    name: 'dashboard',
};
</script>

<style scoped lang="scss">
    .dashboard {
        margin: 0 10px;
        > div {
            min-height: calc(100vh - 140px);
            opacity: 0.4;
            background-image: url(../assets/fav.png);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 256px;
        }
    }
</style>
