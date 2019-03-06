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

  static createComment(text) {
    let requestHeaders = {
        'Authorization': 'Bearer ' + NetworkHelper.getToken()
    };

    return axios.post(NetworkHelper.baseUrl + "/comment", {
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

  static loginUser(email, type, message) {
    let request = {
        'email': email,
        'type': type,
        'message': message
    }
    return axios.post(NetworkHelper.baseUrl + "/contactUs", request);
  }

  // Returns JWT token
  static loginUser(email, username, password) {
    let request = {
        'password': password
    }
    if (username.includes("@")) {
        request["email"] = username;
    } else {
        request["username"] = username;
    }
    return axios.post(NetworkHelper.baseUrl + "/user/login", request);
  }

  static saveToken(token) {
    localStorage.setItem('jwt', token);
  }

  static getToken() {
    return localStorage.getItem('jwt');
  }
}

export default NetworkHelper;
