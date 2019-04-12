<template>
    <div class="diary-overview">
        <h1 v-if="!privateDiaries">Public Traveldiaries</h1>
        <h2 v-if ="diaries.length === 0">
            Sorry, you have not added any diary yet.
        </h2>
        <section v-else class="diaries">
            <router-link v-if="privateDiaries" to="/diary/create" tag="button">New Diary</router-link>
            <Diary v-for="diary in diaries" :key="diary.id" v-bind:id="diary.id" v-bind:country="diary.country" v-bind:begin="diary.begin" v-bind:end="diary.end" v-bind:image="diary.image"></Diary>
        </section>
    </div>
</template>


<script>
    import Diary from './DiaryPreviewComponent.vue';
    import { ALL_PUBLIC_DIARIES_QUERY } from '../../constants/graphql';
    import { USER_DIARIES } from '../../constants/graphql';

    export default {
        name: 'DiaryOverviewComponent',
        components: {
            Diary
        },
        data() {
            return {
                diaries: [],
                loading: 0,
                privateDiaries: this.$route.name === 'profile',
            }
        },
        apollo: {
            $loadingKey: 'loading',
//            diaries: ALL_PUBLIC_DIARIES_QUERY
            diaries:{
                query(){
                    if(this.privateDiaries){
                        return USER_DIARIES
                    } else {
                        return ALL_PUBLIC_DIARIES_QUERY
                    }
                },
                variables(){
                    if(this.privateDiaries){
                        return {
                            userId: this.$auth.user.name
                        }
                    }
                }
            }
        }

    }
</script>
