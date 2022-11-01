import qs from 'qs';
//https://api.imgur.com/oauth2/authorize?client_id=b063539a7961925&response_type=token&state=APPLICATION_STATE

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
};
