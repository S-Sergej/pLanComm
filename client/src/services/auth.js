import axios from "axios";

const signup = (username, password, email) => {
  return axios
    .post("/api/auth/signup", {
      username: username,
      password: password,
      email: email,
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

const login = (username, password, email) => {
  return axios
    .post("/api/auth/login", {
      username: username,
      password: password,
      email: email
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};


const logout = () => {
  axios.delete("/api/auth/logout");
};

export { signup, login, logout };
