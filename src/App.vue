<template>
  <div>
    <TheHeader/>
    <RouterView />
    <TheFooter/>
  </div>
</template>

<script>
  // import { RouterLink, RouterView } from 'vue-router'
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

<style lang="scss">
  .form-control {
      margin-bottom: 16px;
  }
  label {
      display: block;
  }
  input, textarea {
      padding: 10px 14px;
      background: var(--global-white);
      border: 1px solid #DCDADA;
      border-radius: 5px;
      width: 100%;
  }
  .notvalid {
      color: var(--global-red);
      font-size: 14px;
      margin-bottom: 10px;
  }
  form {
      padding: 30px;
      width: 320px;
      max-width: 100%;
      @media screen and (max-width: 767px) {
          padding: 20px 10px;
      }
  }

  .container-centered {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  nav a {
      &:hover, &.router-link-active {
          color: var(--global-primary);
      }
  }
</style>