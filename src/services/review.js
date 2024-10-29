import axios from "axios";

export const get_review = async (chId) => {
  const response = await axios.get(`/api/review/${chId}`);
  return response;
}

export const post_review = async (chId) => {
  const response = await axios.post(`/api/review/${chId}`);
  return response;
}