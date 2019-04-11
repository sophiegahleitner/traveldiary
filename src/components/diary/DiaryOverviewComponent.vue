<template>
    <div class="diary-overview">
        <h1>My Traveldiaries</h1>
        <section v-if="diaries">
            <ul>
                <Diary v-for="diary in diaries" :key="diary.id" v-bind:id="diary.id" v-bind:country="diary.country" v-bind:begin="diary.begin" v-bind:end="diary.end"></Diary>
            </ul>
        <!--<button v-if="postCount && postCount > allPosts.length" @click="loadMorePosts">-->
            <!--{{loading ? 'Loading...' : 'Show more'}}-->
        <!--</button>-->
        </section>
        <h2 v-else>
            Loading...
        </h2>
        <input type="text" id = "country">
        <input type="date" id = "time">
        <button v-on:click="createDiary">Create new diary</button>
    </div>
</template>


<script>
    import Diary from './DiaryPreviewComponent.vue';
    import { ALL_PUBLIC_DIARIES_QUERY } from '../../constants/graphql'


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
            $loadingKey: 'loading',
            diaries: ALL_PUBLIC_DIARIES_QUERY
        }

    }
</script>
