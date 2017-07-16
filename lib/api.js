import { user } from '../models/user';
import { appConfig } from '../../config/';
import { rawDataHelper } from './'

class API {
  /*   Private Methods */
  async _request(route, method, params = null, isAuthorized = true) {
    try {
      let body = method == 'POST' ? JSON.stringify(params) : null;
      // let body = method == 'POST' ? rawDataHelper.parseJsonToFormData(params) : null;

      let response = await fetch(`${appConfig.server_url}/${route}`, {
        method: method,
        // headers: this._headerWithToken(isAuthorized, rawDataHelper.objectContainArray(params)),
        headers: this._headerWithToken(isAuthorized),
        body: body
      })

      return response.json();
    } catch (e) {
      console.log(e);
    }
  }

  _headerWithToken(requireToken, multiPart = false) {
    let headers = {
      'Accept': 'application/json'
    };

    // get token from stored user model;
    if (requireToken) {
      headers['Authorization'] = `${user.token}`;
    }

    if (multiPart) {
      headers['Content-Type'] = 'multipart/form-data'
    } else {
      headers['Content-Type'] = 'application/json; charset=UTF-8'
    }

    return headers;
  }

  /* END OF PRIVATE METHODS */

  async get(route) {
    return this._request(route, 'GET');
  }

  async post(route, params, isAuthorized = true) {
    return this._request(route, 'POST', params, isAuthorized);
  }

}

export const api = new API();
