import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';
import store from './store/index';
import AuthHandler from './components/AuthHandler.vue';
import ImageList from './components/ImageList.vue';
import UploadForm from './components/UploadForm.vue';

// Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: ImageList,
  },
  {
    path: '/upload',
    component: UploadForm,
  },
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
