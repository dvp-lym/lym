import Vue from 'vue';
import Router from 'vue-router';

import Slideshow from './views/Slideshow';
import Omnibus from './views/Omnibus';
import Administrator from './views/Administrator';
import Special from './views/Special';
import Test from './views/Test';

Vue.use(Router);
const routes = [
    {
        path: '/Omnibus',
        name: 'Omnibus',
        component: Omnibus  
    },
    {
        path: '/Administrator',
        name: 'Administrator',
        component: Administrator
    },
    {
        path: '/Special',
        name: 'Special',
        component: Special
    },
    {
        path: '/Test',
        name: 'Test',
        component: Test
    },
    {
        path: '*',
        name: 'Slideshow',
        component: Slideshow,
    },
];
const router = new Router({
  mode: 'hash',
  routes
});
export default router;
