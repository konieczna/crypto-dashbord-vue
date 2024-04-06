<template>
    <section>
        <div class="container">
            <base-button link :to="homeLink" mode="back">Back</base-button>
            <div class="coin-detail">
                <div class="coin-detail__header">
                    <img :src="getCoinImg" alt=""/>
                    <h1>{{ getCoinFullName ? getCoinFullName : getCoinName }} <span class="font-weight-300">{{ getCoinName }}</span></h1>
                </div>
                <div class="coin-detail__details">
                    <!-- <h2>Details</h2> -->
                    <base-small-text>Price</base-small-text>
                    <p>{{ getCoinBidPrice }} USD</p>
                    <base-small-text>Last 24h</base-small-text>
                    <price-change :priceChangePercent="getCoinPriceChangePercent" />
                    <base-small-text>Volume 24h</base-small-text>
                    <p>{{ getCoinVolum }}</p>
                    <base-small-text>Order book view</base-small-text>
                    <p>Available soon!</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import PriceChange from '../molecules/PriceChange.vue';

export default {
    components: {
        PriceChange
    },
    props: ['id', 'name', 'fullName'],
    data() {
        return {
            selectedCoin: null
        }
    },
    computed: {
        filteredCoins() {
            return this.$store.getters.coins;
        },
        homeLink() {
            return '/';
        },
        getCoinName() {
            // return this.selectedCoin.name;
            return this.$store.getters.coins[this.id].name;
        // },
        },
        getCoinFullName() {
            return this.$store.getters.coins[this.id].fullName;
        },
        getCoinImg() {
            return this.$store.getters.coins[this.id].img;
        },
        getCoinBidPrice() {
            return this.$store.getters.coins[this.id].bidPrice;
        },
        getCoinPriceChangePercent() {
            return this.$store.getters.coins[this.id].priceChangePercent;
        },
        getCoinVolum() {
            return this.$store.getters.coins[this.id].weightedAvgPrice;
        },
    },
    created() {
        this.loadCoins();
        // this.getCoin();
    },
    methods: {
        loadCoins() {
            this.$store.dispatch('loadCoins');
        },
        // getCoin() {
        //     this.selectedCoin = this.$store.getters.coins.find(coin => coin.id == this.id);
        //     console.log(this.$store.getters.coins);
        //     console.log(this.$store.getters.coins.find(coin => console.log(coin.id + this.id)));
        // }
    },
}
</script>

<style lang="scss" scoped>
    .coin-detail {
        margin-top: 32px;
        &__header {
            display: flex;
            align-items: center;
            margin-bottom: 16px;
            h1 {
                margin-left: 12px;
                margin-bottom: 0;
            }
        }
        img {
            width: 30px;
        }
    }
</style>
