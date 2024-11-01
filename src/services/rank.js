import axiosInstance from "./axiosInstance";

// 랭킹 불러오기
export const get_ranking = async () => {
  const response = await axiosInstance.get(`/api/ranking`);
  console.log("API 호출 응답:", response.data);
  return response.data;
};