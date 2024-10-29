import axios from "axios";

export const get_ranking = async () => {
  const response = await axios.get(`/api/ranking`);
  return response;
}