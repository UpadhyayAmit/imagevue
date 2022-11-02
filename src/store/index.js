import { createStore } from 'vuex';
import auth from './modules/auth';
import images from './modules/images';
// import Vue from 'vue';

// Vue.use(Vuex);

const store = createStore({
  modules: {
    auth: auth,
    images: images,
  },
});
export default store;

// export default new Vuex.Store({

// })
