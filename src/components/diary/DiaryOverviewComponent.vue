<template>
    <div class="diary-overview">
        <h1>My Traveldiaries</h1>
        <h2 v-if ="diaries.length==0">
            No Diaries
        </h2>
        <section v-else if="diaries">
            <ul>
                <Diary v-for="diary in diaries" :key="diary.id" v-bind:id="diary.id" v-bind:country="diary.country" v-bind:begin="diary.begin" v-bind:end="diary.end" v-bind:image="diary.image"></Diary>
            </ul>
        </section>

        <h2 v-else>
            Loading...
        </h2>
    </div>
</template>


<script>
    import Diary from './DiaryPreviewComponent.vue';
    import { ALL_PUBLIC_DIARIES_QUERY } from '../../constants/graphql'
    import { USER_DIARIES } from '../../constants/graphql'


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
//            diaries: ALL_PUBLIC_DIARIES_QUERY
            diaries:{
                query(){
                    if(this.$route.name == 'profile'){
                        return USER_DIARIES
                    } else {
                        return ALL_PUBLIC_DIARIES_QUERY
                    }
                },
                variables(){
                    if(this.$route.name == 'profile'){
                        return {
                            userId: this.$auth.user.name
                        }
                    }
                }
            }
        }

    }
</script>
