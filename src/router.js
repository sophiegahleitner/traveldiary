import Vue from 'vue';
import Router from 'vue-router';
import Traveldiary from './components/Traveldiary.vue';
import CreateDiary from './components/diary/CreateDiaryComponent.vue';
import DiaryDetail from './components/diary/DiaryDetailComponent.vue';
import Login from './components/auth/LoginComponent.vue';
import Register from './components/auth/RegisterComponent.vue';
import ProfileComponent from './components/ProfileComponent.vue';

Vue.use(Router)

// export default new Router({
//     mode: 'history',
//     base: process.env.BASE_URL,
//     routes: [
//         {
//             path: '/',
//             name: 'Traveldiary',
//             component: Traveldiary
//         }, {
//             path: '/diary/create',
//             name: 'CreateDiary',
//             component: CreateDiary,
//         }, {
//             path: '/diary/:id',
//             name: 'diary',
//             component: DiaryDetail
//         }, {
//             path: '/login',
//             name: 'login',
//             component: Login
//         }, {
//             path: '/register',
//             name: 'register',
//             component: Register
//         }
//     ]
// })
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
            component: Login
        }, {
            path: '/register',
            name: 'register',
            component: Register
        }, {
            path: '/profile',
            name: 'profile',
            component: ProfileComponent

        }
    ]
})

// very basic "setup" of a global guard
// router.beforeEach((to, from, next) => {
//     if(router.app.$auth.isAuthenticated()){
//         next()
//     }
//     else if(to.name=='login'||to.name=='profile'){
//         router.app.$auth.login()
//     }
//     else{
//         next()
//     }
router.beforeEach((to, from, next) => {
    if(to.name == 'callback') { // check if "to"-route is "callback" and allow access
        next()
    } else if (router.app.$auth.isAuthenticated()) { // if authenticated allow access
        next()
    } else if(to.name == 'profile') { // trigger auth0 login
        router.app.$auth.login()
    }
    else {
        next()
    }
})

export default router