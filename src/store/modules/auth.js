/* eslint-disable no-unused-vars */

import api from '../../api/imgur';

const state = {
  token: null,
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
  },
  login: () => {
    api.login();
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
