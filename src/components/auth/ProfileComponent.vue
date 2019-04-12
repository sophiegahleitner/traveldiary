<template>
    <div class="profile-page">
        <div class="profile-page-hello">
            <img class="profile-pic"
                 :src="$auth.user.picture"
            >
            <h1>Hello, {{$auth.user.nickname}}!</h1>
        </div>
        <DiaryOverviewComponent></DiaryOverviewComponent>
    </div>
</template>

<script>
    import DiaryOverviewComponent from '../diary/DiaryOverviewComponent.vue';

    export default {
        name: 'ProfileComponent',
        components: {
            DiaryOverviewComponent,
        },
    }
</script>