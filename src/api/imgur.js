import qs from 'qs';
import axios from 'axios';
//https://api.imgur.com/oauth2/authorize?client_id=b063539a7961925&response_type=token&state=APPLICATION_STATE
//https://api.imgur.com/3/account/me/images
//Authorization
//Bearer {{accessToken}}
//https://api.imgur.com/3/upload

const CLIENT_ID = 'b063539a7961925';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token',
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  },
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  uploadImages(images, token) {
    const promises = Array.from(images).map((image) => {
      const formData = new FormData();
      formData.append('image', image);

      return axios.post(`${ROOT_URL}/3/upload`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    });

    return Promise.all(promises);
  },
};
