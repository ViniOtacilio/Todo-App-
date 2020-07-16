import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home.vue';
import appScreen from '@/views/appScreen.vue';

Vue.use(Router);

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/app',
            name: 'To Do',
            component:  appScreen
        }

    ]
});