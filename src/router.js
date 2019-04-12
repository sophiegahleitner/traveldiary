import Vue from 'vue';
import Router from 'vue-router';
import Traveldiary from './components/Traveldiary.vue';
import CreateDiary from './components/diary/CreateDiaryComponent.vue';
import DiaryDetail from './components/diary/DiaryDetailComponent.vue';
import ProfileComponent from './components/ProfileComponent.vue';
import CallbackComponent from './components/auth/Callback.vue';

Vue.use(Router)

const router = new Router({
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
            component: Traveldiary
        }, {
            path: '/register',
            name: 'register',
            component: Traveldiary
        }, {
            path: '/profile',
            name: 'profile',
            component: ProfileComponent
        }, {
            path: '/callback',
            name: 'callback',
            component: CallbackComponent
        }
    ]
})

router.beforeEach((to, from, next) => {
    if(to.name == 'callback') {
        next()
    } else if (router.app.$auth.isAuthenticated()) {
        next()
    } else if(to.name == 'profile'||to.name=="login") { // trigger auth0 login
        router.app.$auth.login()
    }
    else{
        next()
    }
})

export default router