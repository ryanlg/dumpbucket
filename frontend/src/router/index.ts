import Vue from 'vue';
import Router from 'vue-router';

import { routes } from '../js';

Vue.use(Router);

export default new Router({
  routes,
  mode: 'hash',
});
