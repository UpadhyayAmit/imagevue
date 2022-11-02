/* eslint-disable no-unused-vars */
import api from '../../api/imgur';
import { router } from '../../main';

const state = {
  images: [],
};

const getters = {
  allImages: (state) => state.images,
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
};

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit('setImages', response.data.data);
  },
  async uploadImages({ rootState, commit }, images) {
    //get access token
    const { token } = rootState.auth;

    //call our api module to do upload
    await api.uploadImages(images, token);

    //redirect user to gallery/imagelist
    router.push('/');
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
