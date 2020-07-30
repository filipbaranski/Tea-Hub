import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from './views/Dashboard.vue';
import Projects from './views/Projects.vue';
import Calendar from './views/Calendar.vue';
import Other from './views/Other.vue';

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
            path: '/calendar',
            name: 'calendar',
            component: Calendar,
        },
        {
            path: '/other',
            name: 'other',
            component: Other,
        },
    ],
});
