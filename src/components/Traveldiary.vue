<template>
    <div class="traveldiary">
        <Diaries></Diaries>
        <MapComponent></MapComponent>
    </div>
</template>

<script>
    import Diaries from './diary/DiaryOverviewComponent.vue';
    import MapComponent from './map/MapComponent.vue';

    export default {
        name: 'traveldiary',
        components: {
            Diaries,
            MapComponent,
        },
    }
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
