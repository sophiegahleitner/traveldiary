<template>
    <div class="traveldiary">
        <DiaryOverviewComponent></DiaryOverviewComponent>
        <MapComponent></MapComponent>
    </div>
</template>

<script>
    import DiaryOverviewComponent from './diary/DiaryOverviewComponent.vue';
    import MapComponent from './map/MapComponent.vue';

    export default {
        name: 'traveldiary',
        components: {
            DiaryOverviewComponent,
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
