
import './registerServiceWorker'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/sass/main.scss';
import VueForm from 'vue-form';
import {ApolloClient} from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import './filter.js';
import VueResource from 'vue-resource';
import auth from './auth';
Vue.use(auth);

Vue.config.productionTip = false;
const httpLink = new HttpLink({
    uri: 'https://api-euwest.graphcms.com/v1/cjtoo3agdcy7s01b9bc88wamr/master'
});

const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true
});

Vue.use(VueApollo)
const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
        $loadingKey: 'loading'
    }
});

Vue.use(VueForm, {
    inputClasses: {
        valid: 'form-control-success',
        invalid: 'form-control-danger'
    }
});

Vue.use(VueResource)

new Vue({
    router,
    provide: apolloProvider.provide(),
    render: h => h(App),
}).$mount('#app');
