import axios from 'axios';

class NetworkHelper {
  static baseUrl = "http://127.0.0.1:5000/api";
  constructor() {
  }

  static getPosts() {
    return axios.get(NetworkHelper.baseUrl + "/post");
  }

  static createPost(title, text, user_id) {
    return axios.post(NetworkHelper.baseUrl + "/post", {
      'title': title,
      'text': text,
      'user_id': user_id,
    });
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
    console.log("Network Helper -", email, password);
    let request = {
        'password': password
    }
    if (email.includes("@")) {
        request["email"] = email;
    } else {
        request["username"] = email;
    }

    return axios.post(NetworkHelper.baseUrl + "/user/login", request);
  }

  static saveToken(token) {
    localStorage.setItem('jwt', token);
  }

  static getToken(token) {
    return localStorage.getItem('jwt');
  }
}

export default NetworkHelper;
