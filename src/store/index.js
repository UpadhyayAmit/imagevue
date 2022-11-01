import { createStore } from 'vuex';
import auth from './modules/auth';
// import Vue from 'vue';

// Vue.use(Vuex);

const store = createStore({
  modules: {
    auth: auth,
  },
});
export default store;

// export default new Vuex.Store({

// })
