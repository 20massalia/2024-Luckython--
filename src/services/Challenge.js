// src/services/Challenge.js
import axiosInstance from "./axiosInstance";

// 챌린지 전체 목록 조회
export const get_challenge_list = async () => {
  const response = await axiosInstance.get(`/api/challenge`);
  return response;
};

// 챌린지 생성
export const post_challenge = async (
  title,
  content,
  hashtag,
  startDate,
  endDate,
  prize
) => {
  const response = await axiosInstance.post(`/api/challenge`, {
    title,
    content,
    hashtag,
    startDate,
    endDate,
    prize,
  });
  return response;
};

// 챌린지 수정
export const put_challenge = async (
  title,
  content,
  hashtag,
  startDate,
  endDate,
  prize
) => {
  const response = await axiosInstance.put(`/api/challenge`, {
    title,
    content,
    hashtag,
    startDate,
    endDate,
    prize,
  });
  return response;
};

// 챌린지 삭제
export const delete_challenge = async (chId) => {
  const response = await axiosInstance.delete(`/api/challenge/${chId}`);
  return response;
};

// 아이디별 챌린지 조회
export const get_challenge = async (userId) => {
  const response = await axiosInstance.get(
    `/api/challenge/userId?userId=${userId}`
  );
  return response;
};

// 해시태그별 목록 조회
export const get_challenge_hashtag = async (hashtag) => {
  const response = await axiosInstance.get(
    `/api/challenge/hashtag?hashtag=${hashtag}`
  );
  return response;
};

// 챌린지 참여
export const put_challenge_chId = async (chId, userId) => {
  const response = await axiosInstance.put(
    `/api/challenge?chId=${chId}&userId=${userId}`
  );
  return response;
};

// 사진 인증 (이미지는 공란으로 보냄. 실 이미지 전송 X)
export const post_challenge_image = async (chId, userId) => {
  const response = await axiosInstance.post(
    `/api/challenge/image?chId=${chId}&userId=${userId}`,
    {
      chId,
      userId,
      chImg: "",
    }
  );
  return response;
};
