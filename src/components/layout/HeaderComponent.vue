<template>
    <header>
        <div class="logo">
            <span>Traveldiary</span>
        </div>
        <div v-if="isLoggedIn" class="navigation">
            <nav>
                <ul class="navbar">
                    <li class="navbar-item">
                        <a class="nav-link active" href="#">Diaries</a>
                    </li>
                    <li class="navbar-item">
                        <a class="nav-link" href="#">My Journeys</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" @click="logout">Logout</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div v-else class="login">
            <router-link to="/login">Login</router-link> |
            <router-link to="/register">Register</router-link>
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
