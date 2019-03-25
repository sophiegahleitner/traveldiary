<template>
    <li class="diary">
        <router-link :to="{ name: 'diary', params:{id: id} }">
            <div class="diary-image">
                <img alt="Vue logo" src="../assets/example.jpg">
            </div>
            <div class="diary-facts">
                <h2>{{country}}</h2>
                <h3>{{time}}</h3>
            </div>
        </router-link>
    </li>
</template>

<style>
    .diary {
        width: calc(33% - 60px);
        margin: 30px;
        box-shadow: 1px 5px 15px #ddd;
        display: inline-block;
    }
    .diary:hover{
        box-shadow: none;
    }
    .diary-facts {
        padding: 10px;
    }
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
