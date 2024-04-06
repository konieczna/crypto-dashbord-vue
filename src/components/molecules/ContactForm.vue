<template>
    <base-card>
    <form @submit.prevent="submitForm()">
        <div class="form-control">
            <label> <base-small-text>Your name</base-small-text></label>
            <input type="text" id="name" v-model="name.val" @input="clearValidity('name')">
            <p v-if="!name.isValid" class="notvalid">Input must be filled.</p>
        </div>
        <div class="form-control">
            <label> <base-small-text>Your e-mail</base-small-text></label>
            <input type="mail" id="mail" v-model="email.val" @input="clearValidity('email')">
            <p v-if="!email.isFilled" class="notvalid">Input must be filled.</p>
            <p v-if="email.val && !email.val.match(validEmailRegex)" class="notvalid">E-mail address is not valid.</p>
        </div>
        <div class="form-control">
            <label> <base-small-text>Your message</base-small-text></label>
            <textarea id="message" v-model="message.val" @input="clearValidity('message')"></textarea>
            <p v-if="!message.isValid" class="notvalid">Textarea must be filled.</p>
        </div>
        <base-button mode="ghost">Send</base-button>
    </form>
    <form-success-overlay v-if="isValid && formIsValid" message="Message succesfully sent!" />
</base-card>

</template>

<script>
import FormSuccessOverlay from './FormSuccessOverlay.vue';
export default {
    components: {
        FormSuccessOverlay
    },
    data() {
        return {
            name: {
                val: '',
                isValid: true
            },
            email: {
                val: '',
                isValid: true,
                isFilled: true
            },
            message: {
                val: '',
                isValid: true
            },
            formIsValid: false,
            isValid: true,
            validEmailRegex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }
    },
    computed: {
        validateEmail(val) {
            return val !== '' && val.match(this.validEmailRegex);
        },
    },
    methods: {
        clearValidity(input) {
            if(input === 'email') {
                this[input].isFilled = true;
                if(this[input].val.match(this.validEmailRegex)) {
                    this[input].isValid = true;
                }
            } else {
                this[input].isValid = true;
            }
        },
        validateForm() {
            this.formIsValid = false;
            if(this.name.val === '') {
                this.name.isValid = false;
            }
            if(this.email.val === '') {
                this.email.isFilled = false;
            }
            if(!this.email.isFilled && !this.email.val.match(this.validEmailRegex)) {
                this.email.isValid = false;
            }
            if(this.message.val === '') {
                this.message.isValid = false;
            }
            console.log(this.name.isValid);
            console.log(this.email.isValid);
            console.log(this.message.isValid);
            if(this.name.isValid == true && this.email.isValid == true && this.message.isValid == true ) {
                this.formIsValid = true;
            }
        },
        submitForm() {
            this.validateForm();
            if(!this.formIsValid) {
                this.isValid = false;
                return;
            }
            this.isValid = true;
        }
    }
}
</script>
