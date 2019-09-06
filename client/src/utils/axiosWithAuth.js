import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "https://track-your-coins-be.herokuapp.com/"
  });
};
