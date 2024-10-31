import axios from "axios";

export const get_challenge_list = async () => {
  const response = await axios.get(`/api/challenge`);
  return response;
}

export const get_challenge = async (chId) => {
  const response = await axios.get(`/api/challenge/${chId}`);
  return response;
}

export const get_challenge_hashtag = async (hashtag) => {
  const response = await axios.get(`/api/challenge/${hashtag}`);
  return response;
}

export const put_challenge = async (chId, userId) => {
  const response = await axios.put(`/api/challenge/${chId}/${userId}`);
  return response;
}

export const post_challenge_image = async (chId, userId, chImg) => {
  const response = await axios.post(`/api/challenge/image`, {
    chId,
    userId,
    chImg
  });
  return response;
};