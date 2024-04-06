<template>
    <div class="login container container-centered">
      <h1>Log In</h1>
      <LoginFormVue/>
    </div>
  </template>

  <script>
import LoginFormVue from '@/components/molecules/LoginForm.vue';

  export default {
    components: {
        LoginFormVue
    }
  }
  </script>
