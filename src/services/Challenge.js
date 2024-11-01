import axiosInstance from "./axiosInstance";

// 챌린지 전체 목록 조회
export const getChallengeList = async () => {
  const response = await axiosInstance.get(`/api/challenge`);
  return response.data;
};

// 챌린지 생성
export const createChallenge = async (challengeData) => {
  const response = await axiosInstance.post(`/api/challenge`, challengeData);
  return response.data;
};

// 아이디별 챌린지 조회
export const getChallengesByUser = async (userId) => {
  const response = await axiosInstance.get(`/api/challenge/userId?userId=${userId}`);
  return response.data;
};

// 챌린지 수정
export const updateChallenge = async (chId, challengeData) => {
  const response = await axiosInstance.put(`/api/challenge/${chId}`, challengeData);
  return response.data;
};