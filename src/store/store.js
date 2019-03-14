import Vuex from '../../node_modules/vuex'
import Vue from 'vue'
    const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLoggedIn: !!localStorage.getItem("token")
    }, mutations: {
        [LOGIN](state) {
            state.pending = true;
        },
        [LOGIN_SUCCESS](state) {
            state.isLoggedIn = true;
            state.pending = false;
        },
        [LOGOUT](state) {
            state.isLoggedIn = false;
        }
    },
    actions: {
        login({commit}, creds) {
            commit(LOGIN); // show spinner
            return new Promise(resolve => {
                setTimeout(() => {
                    localStorage.setItem("token", "JWT");
                    commit(LOGIN_SUCCESS);
                    resolve();
                }, 1000);
            });
        },
        logout({commit}) {
            localStorage.removeItem("token");
            commit(LOGOUT);
        }
    },
    getters: {
        isLoggedIn: state => {
            return state.isLoggedIn
        }
    }
});

export default store;