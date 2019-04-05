import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker.js'
import store from './store/store.js'
import './assets/sass/main.scss';
import VueForm from 'vue-form';
import {ApolloClient} from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import './filter.js';


Vue.config.productionTip = false;
const httpLink = new HttpLink({
    uri: 'https://api-euwest.graphcms.com/v1/cjtoo3agdcy7s01b9bc88wamr/master'
})
const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true
})

// 5
Vue.use(VueApollo)
const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
        $loadingKey: 'loading'
    }
})

Vue.use(VueForm, {
    inputClasses: {
        valid: 'form-control-success',
        invalid: 'form-control-danger'
    }
});

new Vue({
    router,
    provide: apolloProvider.provide(),
    store,
    render: h => h(App),
}).$mount('#app');
