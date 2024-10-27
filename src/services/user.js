import axios from "axios";

export const get_user = async (userId) => {
  const response = await axios.get(`/api/user/${userId}`);
  return response.data;
}

export const  get_user_challenge = async (userId) => {
  const response = await axios.get(`/api/user/challenge/${userId}`);
  return response.data;
}

export const put_user = async (userId) => {
  const response = await axios.put(`/api/user/${userId}`);
  return response.data;
}

