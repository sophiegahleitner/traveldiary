import Vue from 'vue';
import Router from 'vue-router';
import Traveldiary from './components/Traveldiary.vue';
import CreateDiary from './components/diary/CreateDiaryComponent.vue';
import DiaryDetail from './components/diary/DiaryDetailComponent.vue';
import Login from './components/auth/LoginComponent.vue';
import Register from './components/auth/RegisterComponent.vue';

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
            component: CreateDiary,
        }, {
            path: '/diary/:id',
            name: 'diary',
            component: DiaryDetail
        }, {
            path: '/login',
            name: 'login',
            component: Login
        }, {
            path: '/register',
            name: 'register',
            component: Register
        }
    ]
})