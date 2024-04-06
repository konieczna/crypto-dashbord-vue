<template>
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="col">
                    <div class="logo">
                        <router-link to="/"><img src="../../assets/icons/m-logo.svg" alt="Logo" /></router-link>
                        <base-small-text>Crypto Dashboard</base-small-text>
                    </div>
                </div>
                <div class="col footer-menu">
                    <base-small-text>Menu</base-small-text>
                    <nav>
                        <ul>
                            <li><router-link to="/">Home</router-link></li>
                            <li><router-link to="/about">About</router-link></li>
                            <li><router-link to="/contact">Contact</router-link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="copyright">
                
            </div>
        </div>
    </footer>
</template>


<style lang="scss" scoped>
    footer {
        padding: 50px 0;
    }
    .footer-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        @media screen and (max-width: 767px) {
            grid-template-columns: 1fr;
        }
    }

    .logo {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        @media screen and (max-width: 767px) {
            display: flex;
        }
    }
    
    nav {
        margin-top: 6px;
        li {
            margin-bottom: 4px;
        }
    }
</style>