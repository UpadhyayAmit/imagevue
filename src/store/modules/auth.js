/* eslint-disable no-unused-vars */
import qs from 'qs';
import api from '../../api/imgur';
import { router } from '../../main';

const state = {
  token: window.localStorage.getItem('imgur_token'),
};
const getters = {
  isLoggedIn: (updatedState) => !!updatedState.token,
};
const mutations = {
  setToken: (updatedState, newToken) => {
    updatedState.token = newToken;
  },
};

const actions = {
  logout: ({ commit }) => {
    commit('setToken', null);
    window.localStorage.removeItem('imgur_token');
  },
  login: () => {
    api.login();
  },
  finalizeLogin: ({ commit }, hashData) => {
    const query = qs.parse(hashData.replace('#', ''));
    commit('setToken', query.access_token);
    window.localStorage.setItem('imgur_token', query.access_token);
    router.push('/');
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
