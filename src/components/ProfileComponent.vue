<template>
    <div class="dashboard">
        <nav class="navbar navbar-dark bg-dark">
            <div>
                <img :src="$auth.user.picture" width="30" height="30">
                <span class="text-muted font-weight-light px-2">{{$auth.user.name}}</span>
                <button type="button" class="btn btn-outline-secondary btn-sm" @click="$auth.logout()">Logout</button>
            </div>
        </nav>
        <h1 class="display-4">Hello, {{$auth.user.nickname}}!</h1>
        <DiaryOverviewComponent></DiaryOverviewComponent>
        <router-link to="/diary/create" tag="button">New Diary</router-link>

    </div>
</template>

<script>
    import DiaryOverviewComponent from './diary/DiaryOverviewComponent.vue'
    export default {
        name: 'ProfileComponent',
        components:{
            DiaryOverviewComponent: DiaryOverviewComponent
        }
    }
</script>

<style scoped>
    .btn-primary {
        background: #468f65;
        border: 1px solid #468f65;
    }
    .card {
        text-decoration: none;
        color: #000;
    }
</style>
