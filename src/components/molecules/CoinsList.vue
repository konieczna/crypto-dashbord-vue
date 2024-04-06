<template>
    <ul v-if="hasCoins">
        <list-item v-for="coin in filteredCoins" 
        :key="coin.id" 
        :id="coin.id" 
        :name="coin.name" 
        :img="coin.img" 
        :bidPrice="coin.bidPrice" 
        :priceChangePercent="coin.priceChangePercent"></list-item>
    </ul>
    <h3 v-else>No coins found</h3>
</template>

<script>
import ListItem from './ListItem.vue';

export default {
  components: { ListItem },
    computed: {
        filteredCoins() {
            return this.$store.getters.coins;
        },
        hasCoins() {
            return this.$store.getters.hasCoins;
        }
    },
    created() {
        this.loadCoins();
    },
    methods: {
        loadCoins() {
            this.$store.dispatch('loadCoins');
        }
    }
}
</script>

