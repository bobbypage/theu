import axios from 'axios';

class NetworkHelper {
  static baseUrl = "http://127.0.0.1:5000/api";
  constructor() {
  }

  static getPosts() {
    return axios.get(NetworkHelper.baseUrl + "/post");
  }

  static getPost(post_id) {
    return axios.get(NetworkHelper.baseUrl + "/post/" + post_id);
  }

  static createPost(title, text) {
    let requestHeaders = {
        'Authorization': 'Bearer ' + NetworkHelper.getToken()
    };

    return axios.post(NetworkHelper.baseUrl + "/post", {
      'title': title,
      'text': text,
    }, 
      {
        headers: requestHeaders
      }
    );
  }

  static createUser(email, username, password) {
    return axios.post(NetworkHelper.baseUrl + "/user", {
      'username': username,
      'email': email,
      'password_hash': password,
    });
  }

  // Returns JWT token
  static loginUser(email, username, password) {
    return axios.post(NetworkHelper.baseUrl + "/user/login", {
      'email': email,
      'username': username,
      'password': password
    });
  }

  static saveToken(token) {
    localStorage.setItem('jwt', token);
  }

  static getToken() {
    return localStorage.getItem('jwt');
  }
}

export default NetworkHelper;
