<template>
    <header>
        <div class="logo">
            <router-link :to="{ name: 'Traveldiary'}">Traveldiary</router-link>
        </div>
        <div v-if="this.$auth.isAuthenticated()" class="navigation">
            <router-link :to="{ name: 'profile'}">Profile</router-link>
        </div>
        <div v-else class="login">
            <router-link :to="{ name: 'login' }">Login</router-link>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'headerComponent',
        methods: {
            logout() {
                this.$store.dispatch('logout');
            }
        },
        computed: {
            isLoggedIn() {
                return this.$store.getters.isLoggedIn;
            }
        },
    }
</script>
