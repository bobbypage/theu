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

  static createUser(username, email, password) {
    return axios.post(NetworkHelper.baseUrl + "/user", {
      'username': username,
      'email': email,
      'password_hash': password,
    });
  }

  // Returns JWT token
  static loginUser(email, password) {
    console.log("Network Helper -", email, password);
    return axios.post(NetworkHelper.baseUrl + "/user/login", {
      'email': email,
      'password': password
    });
  }
}

export default NetworkHelper;
