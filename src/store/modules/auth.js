/* eslint-disable no-unused-vars */
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
};
