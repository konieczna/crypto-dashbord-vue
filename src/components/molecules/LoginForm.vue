<template>
    <base-card>
    <form @submit.prevent="submitForm">
        <p v-if="!isValid" class="notvalid">User or password is not valid.</p>
        <div class="form-control">
            <label><base-small-text>User</base-small-text></label>
            <input type="text" id="user" v-model.trim="user.val">
        </div>
        <div class="form-control">
            <label> <base-small-text>Password</base-small-text></label>
            <input type="password" id="password" v-model="pass.val">
        </div>
        <base-button mode="ghost">Log In</base-button>
    </form>
    <form-success-overlay v-if="isValid && formIsValid" message="Succesfully logged in!" />
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
            user: {
                val: '',
                isValid: false
            },
            pass: {
                val: '',
                isValid: false
            },
            formIsValid: false,
            isValid: true
        }
    },
    methods: {
        validateForm() {
            this.formIsValid = false;
            if(this.user.val === 'user123') {
                this.user.isValid = true;
            }
            if(this.pass.val === 'Crypto123') {
                this.pass.isValid = true;
            }
            if(this.user.isValid == true && this.pass.isValid == true) {
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
            const formData = {
                user: this.user,
                pass: this.pass
            };
            if(this.isValid && this.formIsValid) {
                setTimeout(() => {
                    location.href = '/';
                }, 1500);
            }
            console.log(formData);
        }
    }
}
</script>
