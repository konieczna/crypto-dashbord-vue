<template>
    <li>
        <base-card>
            <div class="coin-data">
                <div class="coin-data__name">
                    <img alt="Coin logo" :src="img"/>
                    <span class="symbol">{{ name }} <base-small-text>/USDT</base-small-text></span>
                </div>
                
                <div class="coin-data__details">
                    <div class="bidprice">
                        <base-small-text mode="d-block">Price</base-small-text>
                        <p>{{ bidPrice }} USD</p>
                    </div>
                    <div class="pricechange">
                        <base-small-text mode="d-block">Last 24h</base-small-text>
                        <price-change :priceChangePercent="priceChangePercent"/>
                    </div>
                </div>
            </div>
            <div class="coin-details-button">
                <base-button mode="ghost" link :to="coinLink">See more</base-button>
            </div>
        </base-card>
    </li>
</template>

<script>
import PriceChange from './PriceChange.vue';
export default {
    components: {
        PriceChange
    },
    props: ['id', 'name', 'img', 'bidPrice', 'priceChangePercent'],
    computed: {
        coinLink() {
            return '/' + this.id;
        },
    }
}
</script>


<style lang="scss" scoped>
    img {
        width: 25px;
        height: 25px;
    }
    li > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .coin-data {
        margin: 10px 0;
        &__name, &__details {
            display: flex;
            align-items: center;
        }
        .symbol {
            margin-left: 7px;
            font-weight: 500;
            font-size: 18px;
        }
        &__details {
            margin-top: 6px;
            flex-wrap: wrap;
            .name {
                text-transform: uppercase;
                font-size: 13px;
                color: var(--global-light-gray);
            }
            & > div {
                margin-right: 20px;
            }
        }
        .bidprice {
            min-width: 120px;
        }
    }
    
</style>