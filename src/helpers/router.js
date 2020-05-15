import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

import LoginScreen from '../login/LoginScreen';

import DashboardScreen from '../dashboard/DashboardScreen';
import HomeScreen from '../dashboard/HomeScreen';
import subCategoryScreen from '../dashboard/SubCategoryScreen';
import SelectDoctorScreen from '../dashboard/SelectDoctorScreen';
export const router = new Router({
    mode : 'history',
    routes: [
        { path : '/', component : LoginScreen },
        { path: '/dashboard', component : DashboardScreen,
        children:[
            {path:'/dashboard' , component:HomeScreen},
            {path:'/dashboard/category', component:subCategoryScreen},
            {path: '/dashboard/counselors', component:SelectDoctorScreen}
        ] },
    ],
});