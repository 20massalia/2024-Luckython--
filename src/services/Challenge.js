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

// 챌린지 참여
export const participateInChallenge = async (chId, userId) => {
  const response = await axiosInstance.put(`/api/challenge?chId=${chId}&userId=${userId}`);
  return response.data;
};

// 사진 인증
export const certifyChallengeWithImage = async (chId, userId, formData) => {
  const response = await axiosInstance.post(`/api/challenge/image?chId=${chId}&userId=${userId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
};


// 해시태그별 챌린지 목록 조회
export const getChallengesByHashtag = async (hashtag) => {
  const response = await axiosInstance.get(`/api/challenge/hashtag?tag=${hashtag}`);
  return response.data;
};