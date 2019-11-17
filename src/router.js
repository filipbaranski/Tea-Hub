import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from './views/Dashboard.vue';
import Projects from './views/Projects.vue';
import IG from './views/IG.vue';
import Calendar from './views/Calendar.vue';
import Quotes from './views/Quotes.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard,
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects,
        },
        {
            path: '/ig',
            name: 'ig',
            component: IG,
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: Calendar,
        },
        {
            path: '/quotes',
            name: 'quotes',
            component: Quotes,
        },
    ],
});
