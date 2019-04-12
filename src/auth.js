import auth0 from 'auth0-js'
import Vue from 'vue'
import Router from './router'


// exchange the object with your own from the setup step above.
let webAuth = new auth0.WebAuth({
    domain: 'dev-gz1b6l9p.eu.auth0.com',
    clientID: 'w2NUP6DWlcOVqp5HUPdfv04giNnrg6E6',
    // make sure this line is contains the port: 8080
    redirectUri: 'https://nervous-knuth-c55d1a.netlify.com/callback',
    // we will use the api/v2/ to access the user information as payload
    audience: 'https://dev-gz1b6l9p.eu.auth0.com/api/v2/',
    responseType: 'token id_token',
    scope: 'openid profile' // define the scopes you want to use
});

let auth = new Vue({
    computed: {
        token: {
            get: function() {
                return localStorage.getItem('id_token')
            },
            set: function(id_token) {
                localStorage.setItem('id_token', id_token)
            }
        },
        accessToken: {
            get: function() {
                return localStorage.getItem('access_token')
            },
            set: function(accessToken) {
                localStorage.setItem('access_token', accessToken)
            }
        },
        expiresAt: {
            get: function() {
                return localStorage.getItem('expires_at')
            },
            set: function(expiresIn) {
                let expiresAt = JSON.stringify(expiresIn * 1000 + new Date().getTime())
                localStorage.setItem('expires_at', expiresAt)
            }
        },
        user: {
            get: function() {
                return JSON.parse(localStorage.getItem('user'))
            },
            set: function(user) {
                localStorage.setItem('user', JSON.stringify(user))
            }
        }
    },
    methods: {
        login() {
            webAuth.authorize()
        },
        logout() {
            return new Promise((resolve, reject) => {
                localStorage.removeItem('access_token')
                localStorage.removeItem('id_token')
                localStorage.removeItem('expires_at')
                localStorage.removeItem('user')
                webAuth.logout({
                    returnTo: 'https://nervous-knuth-c55d1a.netlify.com/', // Allowed logout URL listed in dashboard
                    clientID: 'w2NUP6DWlcOVqp5HUPdfv04giNnrg6E6', // Your client ID
                })
                Router.push({name:'Traveldiary'})
                window.location.reload()
            })
        },
        isAuthenticated() {
            return new Date().getTime() < this.expiresAt
        },
        handleAuthentication() {
            return new Promise((resolve, reject) => {
                webAuth.parseHash((err, authResult) => {

                    if (authResult && authResult.accessToken && authResult.idToken) {
                        this.expiresAt = authResult.expiresIn
                        this.accessToken = authResult.accessToken
                        this.token = authResult.idToken
                        this.user = authResult.idTokenPayload
                        resolve()

                    } else if (err) {
                        this.logout()
                        reject(err)
                    }

                })
            })
        }
    }
})

export default {
    // auth
    install: function(Vue) {
        Vue.prototype.$auth = auth
    }
}