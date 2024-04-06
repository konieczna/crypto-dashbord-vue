<template>
    <header>
        <div class="container">
            <div class="logo">
                <router-link to="/"><img src="../../assets/icons/m-logo.svg" alt="Logo" /></router-link>
            </div>
            <nav :class="{'active': isToggled}">
                <button @click="toggleNav">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul>
                    <li><router-link to="/" @click="toggleNav">Home</router-link></li>
                    <li><router-link to="/about" @click="toggleNav">About</router-link></li>
                    <li><router-link to="/contact" @click="toggleNav">Contact</router-link></li>
                </ul>
            </nav>
            <div class="button">
                <base-button mode="ghost" v-if="isLoggedIn" link to="/login">Log Out</base-button>
                <base-button mode="ghost" v-else link to="/login">Log In</base-button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 30px;
        padding-bottom: 30px;
    }
    nav {
        @media screen and (max-width: 767px) {
            order: 3;
        }
        ul {
            display: flex;
            @media screen and (max-width: 767px) {
                position: absolute;
                left: 0;
                width: 100%;
                background: var(--global-white);
                flex-direction: column;
                top: 0;
                height: 100vh;
                align-items: center;
                visibility: hidden;
                opacity: 0;
                transition: opacity .3s;
                padding: 100px 0 30px;
                z-index: 9;
            }
        }
        &.active {
            ul {
                visibility: visible;
                opacity: 1;
            }
            button {
                span {
                    &:first-of-type {
                        transform: translateY(5px) rotate(45deg);
                    }
                    &:nth-of-type(2) {
                        opacity: 0;
                    }
                    &:last-of-type {
                        transform: translateY(-9px) rotate(-45deg);
                    }
                }
            }
        }
        a {
            text-transform: uppercase;
            color: var(--global-text-default);
            padding: 4px 14px;
            @media screen and (max-width: 767px) {
                padding: 8px;
                display: block;
            }
        }
    }  
    .logo {
        img {
            width: 32px;
            height: 32px;
        }
    }
    button {
        width: 36px;
        border: none;
        background: transparent;
        cursor: pointer;
        position: relative;
        z-index: 10;
        span {
            background-color: var(--global-primary);
            width: 100%;
            height: 3px;
            display: block;
            margin: 4px 0;
            transition: transform .3s;
        }
        @media screen and (min-width: 768px) {
            display: none;
        }
    }

</style>

<script>
export default {
    data() {
        return {
            isToggled: false
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn;
        }
    },
    methods: {
        toggleNav() {
            this.isToggled === true ? this.isToggled = false : this.isToggled = true;
            console.log(this.isToggled);
        }
    }
}
</script>