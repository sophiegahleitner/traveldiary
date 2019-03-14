<template>
    <header>
        <h1 v-if="isLoggedIn">Hello</h1>
        <nav>
            <ul class="nav">
                <!--
                <li v-for="item in nav">
                    <a class="nav-link active" href='{{item.link}}'>{{item.title}}</a>
                </li>
                -->
                <li class="nav-item">
                    <a class="nav-link active" href="#">Diaries</a>
                </li>
                <li class="nav-item" v-if="isLoggedIn">
                    <a  class="nav-link" href="#">My Journeys</a>
                </li>
                <li class = "nav-item">
                    <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
                    <a href="#" v-if="isLoggedIn" @click="logout">Logout</a>
                </li>
            </ul>
        </nav>
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
