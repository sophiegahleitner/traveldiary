<template>
    <section v-bind="diary">
    <h2 v-if="!diary">
        Loading...
    </h2>
    <div class="diary-details" v-else>
        <h1>Diary Details</h1>
        <div v-if="diary.image" class="diary-image">
        <img
                :alt="diary.id"
                :src="`https://media.graphcms.com/resize=w:650,h:366,fit:crop/${diary.image.handle}`"
        />
        </div>
        <p>{{diary.description}}</p>
    </div>
        </section>
</template>

<script>
    import { DIARY_DETAIL } from '../../constants/graphql'

    export default {
        name: 'DiaryDetailComponent',
        data: ()=> ({
            loading: 0
        }),
        apollo:{
            $loadingKey: 'loading',
            diary: {
                query: DIARY_DETAIL,
                variables(){
                    return{
                        id: this.$route.params.id
                    }
                }
            }
        }
    }
</script>
