<template>
    <div>
        <h2>Compare coins</h2>
        <span class="filter-option">
            <label>Coin name</label>
            <select name="compare-to" id="compare-to" @change="setFilter">
                <option v-for="coin in coinsList" :key="coin.id" :value="coin.name">{{ coin.name }}</option>
            </select>
            <label>-></label>
            <select name="compare-with" id="compare-with" @change="setFilter">
                <option v-for="coin in coinsList" :key="coin.id" :value="coin.name">{{ coin.name }}</option>
            </select>
        </span>
    </div>
</template>

<script>
    export default {
        computed: {
            coinsList() {
                return this.$store.getters.coins;
            }
        },
        methods: {
            setFilter(event) {
                const selectId = event.target.id;
        
                // this.$emit('change-filter', );
            }
        }
    }
</script>
