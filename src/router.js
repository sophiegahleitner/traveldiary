import Vue from 'vue';
import Router from 'vue-router';
import Traveldiary from './components/Traveldiary.vue';
import CreateDiary from './components/CreateDiary.vue';
import DiaryDetail from './components/DiaryDetail.vue';
import Login from './components/Login.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Traveldiary',
            component: Traveldiary
        }, {
            path: '/diary/create',
            name: 'CreateDiary',
            component: CreateDiary
        }, {
            path: '/diary/:id',
            name: 'diary',
            component: DiaryDetail
        }, {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})