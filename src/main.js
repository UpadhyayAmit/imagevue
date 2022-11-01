import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';
import store from './store/index';
import AuthHandler from './components/AuthHandler.vue';

// Vue.use(VueRouter);

const routes = [
  {
    path: '/oauth2/callback',
    component: AuthHandler,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(store).mount('#app');
