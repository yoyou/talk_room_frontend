import Vue from 'vue'
import App from './App.vue'
import Login from './login.vue'
import Room from './room.vue'
import Socket from 'socket.io-client'
import Vuex from 'vuex';
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.use(Vuex);
const sk = Socket('http://127.0.0.1:3000')

var routes = [{
        path: '/login',
        component: Login
    },
    {
        path: '/room',
        component: Room
    }
]

var store = new Vuex.Store({
    state: {
        socket: sk
    },
    getters: {
        emit: (state) => (event, o) => {
            return state.socket.emit(event, o);
        },

        on: (state) => (event, fun) => {
            state.socket.on(event, fun);
        }
    }
})

var router = new VueRouter({
    routes
})


Vue.config.productionTip = false



new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')