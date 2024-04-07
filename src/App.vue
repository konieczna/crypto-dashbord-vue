<template>
  <div>
    <TheHeader/>
    <RouterView />
    <TheFooter/>
  </div>
</template>

<script>
  import TheHeader from './components/sections/TheHeader.vue'
  import TheFooter from './components/sections/TheFooter.vue'
  import HomeView from './views/HomeView.vue';

  export default {
    components: {
    TheHeader,
    HomeView,
    TheFooter
}
  }
</script>