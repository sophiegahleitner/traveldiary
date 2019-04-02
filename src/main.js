import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker.js'
import store from './store/store.js'
import './assets/sass/main.scss';
import VueForm from 'vue-form';
//import TraveldiaryDirectives from './directives.js';

import DefaultLayout from './layouts/DefaultLayout.vue';
import AuthLayout from './layouts/AuthLayout.vue';

Vue.component('default-layout', DefaultLayout);
Vue.component('auth-layout', AuthLayout);

Vue.config.productionTip = false;

//Vue.use(TraveldiaryDirectives);
Vue.use(VueForm, {
    inputClasses: {
        valid: 'form-control-success',
        invalid: 'form-control-danger'
    }
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
