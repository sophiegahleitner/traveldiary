<template>
    <div id="login">
        <img alt="Vue logo" src="../../assets/img/bg-login.jpg">
        <form @submit.prevent="login({ email, password })">
            <input type="text" placeholder="email" v-model="email">
            <input type="password" placeholder="password" v-model="password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>

    export default {
        name: 'LoginComponent',
        data() {
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            login() {
                    this.$store.dispatch("login", {
                    email: this.email,
                    password: this.password
                }).then(() => {
                    this.$router.push("/")
                });
            }
        }
    };
</script>