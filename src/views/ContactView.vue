<template>
    <div class="container">
        <div class="contact container-centered">
            <h1>Contact us</h1>
            <ContactForm/>
        </div>
    </div>
  </template>
  
  <script>
import ContactForm from '@/components/molecules/ContactForm.vue';
export default {
    components: {
        ContactForm
    }
}
</script>