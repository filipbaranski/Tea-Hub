<template>
    <div class="header">
        <header>
            <router-link to="/">
                <h1>Tea Hub</h1>
            </router-link>
        </header>
        <nav>
            <router-link
                to="/projects"
                :class="{'active': this.$route.name === 'projects' }"
            >
                Projekty
            </router-link>
            <router-link
                to="/calendar"
                :class="{'active': this.$route.name === 'calendar' }"
            >
                Kalendarz
            </router-link>
            <router-link
                to="/ig"
                :class="{'active': this.$route.name === 'ig' }"
            >
                IG
            </router-link>
            <router-link
                to="/quotes"
                :class="{'active': this.$route.name === 'quotes' }"
            >
                Quotes
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Header',
};
</script>

<style scoped lang="scss">
    .header {
        display: flex;
        flex-direction: column;
    }
    header {
        background-image: url('../assets/bar360.png');
        background-size: 360px;
        height: 55px;
        text-align: center;
        background-repeat: no-repeat;
        a {
            text-decoration: none;
        }
        h1 {
            line-height: 55px;
            color: #ffffff;
            font-size: 30px;
            margin: 0;
            text-shadow: 0 0 10px #000000, 0 0 30px #000000, 0 0 50px #000000;
        }
    }
    img {
        width: 100%;
        height: 55px;
        object-fit: cover;
        margin-bottom: -4px;
    }
    nav {
        display: flex;
        justify-content: space-between;
        height: 35px;
        background-color: #fff;
        > a {
            color: black;
            text-decoration: none;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
            border-bottom: 3px solid #eeffee;
            line-height: 35px;
            font-size: 14px;
            &:hover {
                border-bottom: 3px solid #99cc33;
            }
        }
        & .active {
            border-bottom: 3px solid #99cc33;
        }
    }

    @media only screen and (min-width: 1024px) {
        header {
            background-size: 100%;
            height: 75px;
            background-image: url('../assets/bar.png');
            h1 {
                line-height: 75px;
                font-size: 50px;
            }
        }
        nav {
            height: 55px;
            a {
                font-size: 18px;
            }
        }
    }
</style>
