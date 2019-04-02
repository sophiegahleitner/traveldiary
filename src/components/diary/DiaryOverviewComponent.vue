<template>
    <div class="diary-overview">
        <h1>My Traveldiaries</h1>
        <ul>
            <Diary v-for="diary in diaries" :key="diary.id" v-bind:id="diary.id" v-bind:country="diary.country" v-bind:begin="diary.begin" v-bind:end="diary.end"></Diary>

        </ul>
        <input type="text" id = "country">
        <input type="date" id = "time">
        <button v-on:click="createDiary">Create new diary</button>
    </div>
</template>


<script>
    import Diary from './DiaryPreviewComponent.vue';
    import { ALL_DIARIES_QUERY } from '../../constants/graphql'


    export default {
        name: 'DiaryOverviewComponent',
        components: {
            Diary
        },
        data() {
            return {
                diaries: [],
                loading: 0

            }
        },
        methods: {
            createDiary: function () {
                this.diaries.push({id:this.diaries.length+1, country: document.getElementById("country").value, time: document.getElementById("time").value});
            }
        },
        apollo: {
            diaries: ALL_DIARIES_QUERY
        }

    }
</script>
