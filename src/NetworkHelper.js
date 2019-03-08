import axios from 'axios';

class NetworkHelper {

  constructor() {
  }

  static getBaseUrl() {
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      return "http://127.0.0.1:5000/api";
    } else {
      return "https://theu-backend.herokuapp.com/api";
    }
  }

  static getPosts() {
    return axios.get(NetworkHelper.getBaseUrl() + "/post");
  }

  static getPost(post_id) {
    return axios.get(NetworkHelper.getBaseUrl() + "/post/" + post_id);
  }

  static putLike(post_id) {
    let requestHeaders = {
        'Authorization': 'Bearer ' + NetworkHelper.getToken()
    };

    return axios.post(NetworkHelper.getBaseUrl() + "/like/" + post_id, {
    'post_id' : post_id
    }, {
        headers: requestHeaders
      }
      );
  }

  static createPost(title, text) {
    let requestHeaders = {
      'Authorization': 'Bearer ' + NetworkHelper.getToken()
    };

    return axios.post(NetworkHelper.getBaseUrl() + "/post", {
      'title': title,
      'text': text,
    },
      {
        headers: requestHeaders
      }
    );
  }

  static createComment(post_id, text) {
    let requestHeaders = {
        'Authorization': 'Bearer ' + NetworkHelper.getToken()
    };

    return axios.post(NetworkHelper.getBaseUrl() + "/comment", {
      'post_id': post_id,
      'text': text,
    },
      {
        headers: requestHeaders
      }
    );
  }

  static createUser(email, username, password) {
    return axios.post(NetworkHelper.getBaseUrl() + "/user", {
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
    return axios.post(NetworkHelper.getBaseUrl() + "/contactUs", request);
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
    return axios.post(NetworkHelper.getBaseUrl() + "/user/login", request);
  }

  static saveToken(token) {
    localStorage.setItem('jwt', token);
  }

  static getToken() {
    return localStorage.getItem('jwt');
  }

  static async tokenValid() {
    let requestHeaders = {
      'Authorization': 'Bearer ' + NetworkHelper.getToken()
    };

    return await axios.get(NetworkHelper.getBaseUrl() + "/protected",
    {
      headers: requestHeaders
    }).then(r => r.status === 200);
  }
}

export default NetworkHelper;
