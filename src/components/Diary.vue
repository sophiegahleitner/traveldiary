<template>
    <li class="diary">
        <router-link :to="{ name: 'diary', params:{id: id} }"><h2>{{country}}</h2></router-link>
        <h3>{{time}}</h3>
    </li>
</template>

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
