import axios from 'axios';

const BASE_URL = 'http://localhost:5000';
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getCafesByLocation = async (location) => {
  try {
    const url = location ? `/api/cafes?location=${location}` : '/api/cafes';
    const response = await axiosInstance.get(url);
    const { cafes, locations } = response.data;
    return { cafes, locations };
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching cafes');
  }
};

export const createCafe = async (newCafe) => {
  try {
    const response = await axiosInstance.post('api/cafe', newCafe);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error creating cafe');
  }
};

export const updateCafe = async (updatedCafe) => {
  try {
    const { id: cafeId } = updatedCafe;
    const response = await axiosInstance.put(
      `/api/cafe/${cafeId}`,
      updatedCafe
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error editing cafe');
  }
};

export const deleteCafe = async (cafeId) => {
  try {
    const response = await axiosInstance.delete(`/api/cafe/${cafeId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error deleting cafe');
  }
};
