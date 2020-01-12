import axios from "axios";

const RootPath = "http://localhost:5000/movie21";

const Get = path => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${RootPath}/${path}`).then(
      result => {
        resolve(result.data);
      },
      err => {
        reject(err);
      }
    );
  });
  return promise;
};

const config = {
  headers: { Authorization: "Bearer " + localStorage.getItem("token") }
};

//GET
const getLogin = () => Get("/login");

const API = {
  getLogin,
};

export default API;
