<template>
    <li class="diary-preview">
        <router-link :to="{ name: 'diary', params:{id: id} }">
            <div class="diary-preview-image">
                <img alt="Vue logo" src="../../assets/img/example.jpg">
            </div>
            <div class="diary-facts">
                <h2>{{country}}</h2>
                <h3>{{begin}}-</h3>
                <h3>{{end}}</h3>
            </div>
        </router-link>
    </li>
</template>

<style>
    .diary-preview {
        width: calc(33% - 60px);
        margin: 30px;
        box-shadow: 1px 5px 15px #ddd;
        display: inline-block;
    }
    .diary-preview:hover{
        box-shadow: none;
    }
    .diary-facts {
        padding: 10px;
    }
</style>

<script>
    export default {
        name: 'DiaryComponent',

        props: {
            id: Number,
            country: String,
            begin: String,
            end: String
        }
    }
</script>
