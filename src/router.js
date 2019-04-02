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
            meta: { layout: "default" },
            component: Traveldiary
        }, {
            path: '/diary/create',
            name: 'CreateDiary',
            meta: { layout: "default" },
            component: CreateDiary,
        }, {
            path: '/diary/:id',
            name: 'diary',
            meta: { layout: "default" },
            component: DiaryDetail
        }, {
            path: '/login',
            name: 'login',
            meta: { layout: "auth" },
            component: Login
        }, {
            path: '/register',
            name: 'register',
            meta: { layout: "auth" },
            component: Register
        }
    ]
})