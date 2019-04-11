<template>
    <div class="dashboard">
        <nav class="navbar navbar-dark bg-dark">
            <div>
                <img :src="$auth.user.picture" width="30" height="30">
                <span class="text-muted font-weight-light px-2">{{$auth.user.name}}</span>
                <button type="button" class="btn btn-outline-secondary btn-sm" @click="$auth.logout()">Logout</button>
            </div>
        </nav>
        <h1 class="display-4">Hello, {{$auth.user.name}}!</h1>
    </div>
</template>

<script>

    export default {
        name: 'ProfileComponent'
    }
</script>

<style scoped>
    @import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');
    .btn-primary {
        background: #468f65;
        border: 1px solid #468f65;
    }
    .card {
        text-decoration: none;
        color: #000;
    }
</style>
