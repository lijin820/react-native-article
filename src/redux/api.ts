import axios from 'axios';

const baseUrl = 'http://api.pulsehealthtechnology.com/api/v1';
const token =
  '2YIgGi4JmGyNVQ7IR1KcPvHnjWOTKyhcFP+E0n5qk7DH7x68lBKq6V/dQukzQHwhxcOawW5CYM6VUS76GMfP3g==';

export default class Api {
  public headers() {
    return {
      'Content-Type': 'application/json',
    };
  }

  public authHeaders() {
    return {
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + token,
    };
  }

  public request(method: any, path: any, data: any) {
    return axios({
      method: method,
      url: `${baseUrl}${path}`,
      headers: this.authHeaders(),
      data: data,
    });
  }

  public getBanners() {
    const instance = new Api();
    return instance.request('get', '/banner/mobilelatest', null);
  }

  public getPosts() {
    const instance = new Api();
    return instance.request(
      'get',
      '/post/2151/newrecents?postType=0&width=110&height=110&page=1&pageSize=20',
      null,
    );
  }
}
