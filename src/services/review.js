import axiosInstance from "./axiosInstance";

// 후기 조회
export const get_review = async (chId) => {
  const response = await axiosInstance.get(`/api/review/${chId}`);
  return response;
};

// 후기 생성
export const post_review = async (chId, userId, review, point) => {
  const response = await axiosInstance.post(`/api/review/${chId}/${userId}`, {
    userId,
    review,
    point,
  });
  return response;
};
