<template>
    <div class="diary-preview">
        <router-link :to="{ name: 'diary', params:{id: id} }">
            <div v-if="image" class="diary-preview-image">
                <img
                        :alt="`${image.handle}`"
                        :src="`https://media.graphcms.com/resize=w:650,h:366,fit:crop/${image.handle}`"
                />            </div>
            <div class="diary-facts">
                <h2>{{country}}</h2>
                <h3>{{begin | formatDate}}-</h3>
                <h3>{{end | formatDate}}</h3>
            </div>
        </router-link>
    </div>
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
            id: String,
            country: String,
            begin: String,
            end: String,
            image: Object
        }
    }
</script>
