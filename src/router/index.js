import Vue from 'vue';
import VueRouter from 'vue-router';
import Store from '@/store/';

import SignIn from '@/views/SignInView.vue';
import SignUp from '@/views/SignUpView.vue';
import Home from '@/views/HomeView.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/home',
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    meta: { requireLogin: false },
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    meta: { requireLogin: false },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requireLogin: false },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requireLogin = to.meta.requireLogin;
  const activeLogin = Store.getters['session/activeLogin'];
  if (requireLogin) {
    if (activeLogin) {
      next();
    } else {
      next('/signin');
    }
  } else {
    next();
  }
});

export default router;