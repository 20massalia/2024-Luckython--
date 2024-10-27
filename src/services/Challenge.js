import axios from "axios";

export const get_challenge_list = async () => {
  const response = await axios.get(`/api/challenge`);
  return response.data;
}