import axios from "axios";
import axiosInstance from "./axiosInstance";

export const userId = process.env.REACT_APP_USER_ID;

export const get_user = async (userId) => {
  const response = await axios.get(`/api/user/${userId}`);
  return response.data;
};

export const get_user_challenge = async (userId) => {
  const response = await axios.get(`/api/user/challenge/${userId}`);
  return response.data;
};

export const put_user = async (userId) => {
  const response = await axios.put(`/api/user/${userId}`);
  return response.data;
};

export const put_user_point = async (userId, point) => {
  const response = await axios.put(`/api/user/${userId}`, { point });
  return response.data;
};

export const getUser = async (userId) => {
  const response = await axiosInstance.get(`/api/user/${userId}`);
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await axiosInstance.post('/api/user', userData);
  return response.data;
};

export const updateUserPoints = async (userId, point) => {
  const response = await axiosInstance.put(`/api/user/${userId}`, { point });
  return response.data;
};

// import axios from "axios";

// export const userId = process.env.REACT_APP_USER_ID;

// export const get_user = async (userId) => {
//   const response = await axios.get(`/api/user/${userId}`);
//   return response;
// }

// export const  get_user_challenge = async (userId) => {
//   const response = await axios.get(`/api/user/challenge/${userId}`);
//   return response;
// }

// export const put_user = async (userId) => {
//   const response = await axios.put(`/api/user/${userId}`);
//   return response;
// }

// export const put_user_point = async (userId) => {
//   const response = await axios.put(`/api/user/${userId}`);
//   return response;
// }