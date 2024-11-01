import axiosInstance from "./axiosInstance";

// 사용자 정보를 가져오는 함수
export const get_user = async (userId) => {
  try {
    const response = await axiosInstance.get(`/api/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

// 사용자가 참여 중인 챌린지를 가져오는 함수
export const get_user_challenge = async (userId) => {
  try {
    const response = await axiosInstance.get(`/api/user/challenge/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user challenge data:", error);
    throw error;
  }
};

// 사용자 정보를 업데이트하는 함수 (기본 PUT 요청)
export const put_user = async (userId) => {
  try {
    const response = await axiosInstance.put(`/api/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error;
  }
};

// 사용자의 포인트를 업데이트하는 함수
export const put_user_point = async (userId, point) => {
  try {
    const response = await axiosInstance.put(`/api/user/${userId}`, { point });
    return response.data;
  } catch (error) {
    console.error("Error updating user points:", error);
    throw error;
  }
};

// 사용자 등록 함수
export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/api/user', userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

// 사용자의 포인트 업데이트 함수 (중복 기능 제거)
export const updateUserPoints = async (userId, point) => {
  try {
    const response = await axiosInstance.put(`/api/user/${userId}`, { point });
    return response.data;
  } catch (error) {
    console.error("Error updating user points:", error);
    throw error;
  }
};