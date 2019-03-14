<template>
    <li class="diary">
        <router-link :to="{ name: 'diary', params:{id: id} }">
            <div class="diary-image">
                <img alt="Vue logo" src="../assets/img/example.jpg">
            </div>
            <div class="diary-facts">
                <h2>{{country}}</h2>
                <h3>{{time}}</h3>
            </div>
        </router-link>
    </li>
</template>

<style>

</style>

<script>
    export default {
        name: 'diary',
        props: {
            id: Number,
            country: String,
            time: String
        }
    }
</script>
