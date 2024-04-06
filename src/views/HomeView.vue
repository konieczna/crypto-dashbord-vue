<template>
    <div class="container">
      <h1>Crypto Dashboard</h1>
      <!-- <CoinFilter/> TODO --> 
      <CoinsList/>
    </div>
</template>

<script>
  import CoinsList from '@/components/molecules/CoinsList.vue';
  import CoinFilter from '@/components/molecules/CoinFilter.vue';


  export default {
    components: {
    CoinsList,
    CoinFilter
    }
  }
</script>

