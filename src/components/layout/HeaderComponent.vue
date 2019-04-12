<template>
    <header>
        <div class="logo">
            <router-link :to="{ name: 'diaries'}">
                <img
                        alt="Traveldiary"
                        src="../../assets/img/logo.png"
                />
            </router-link>
        </div>
        <ul class="navbar">
            <li class="navbar-item">
                <router-link :to="{ name: 'diaries'}">Diaries</router-link>
            </li>
            <li v-if="this.$auth.isAuthenticated()" class="navbar-item">
                <router-link :to="{ name: 'profile'}">Profile</router-link>
            </li>
            <li v-else class="navbar-item">
                <router-link :to="{ name: 'login' }">Login</router-link>
            </li>
            <li v-if="this.$auth.isAuthenticated()" class="navbar-item" @click="$auth.logout()">Logout</li>
        </ul>
    </header>
</template>

<script>
    export default {
        name: 'headerComponent'
    }
</script>
