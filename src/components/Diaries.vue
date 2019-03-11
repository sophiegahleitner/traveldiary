<template>
    <div class="diaries">
        <h1>My Traveldiaries</h1>
        <ul>
            <Diary v-for="diary in diaries" :key="diary.id" v-bind:id="diary.id" v-bind:country="diary.country" v-bind:time="diary.time"></Diary>
        </ul>
        <button v-on:click="createDiary">Create new diary</button>
    </div>
</template>

<script>
    import Diary from './Diary.vue';

    export default {
        name: 'diaries',
        components: {
            Diary
        },
        data() {
            return {
                diaries: [
                    {
                        id: 1,
                        country: "Thailand",
                        time: "15.09.2018 - 29.09.2018"
                    },
                    {
                        id: 3,
                        country: "Zypern",
                        time: "23.08.2018 - 31.08.2018"
                    },
                    {
                        id: 2,
                        country: "Kroatien",
                        time: "01.07.2018 - 09.07.2018"
                    }
                ]
            }
        },
        methods: {
            createDiary: function (e) {
                console.log("new diary");
            }
        }
    }
</script>
