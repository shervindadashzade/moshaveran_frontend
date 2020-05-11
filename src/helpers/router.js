import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

import LoginScreen from '../login/LoginScreen';
export const router = new Router({
    mode : 'history',
    routes: [
        { path : '/', component : LoginScreen },
    ],
});