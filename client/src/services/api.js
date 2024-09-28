import axios from 'axios';

const BASE_URL = 'http://localhost:5000';
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getCafesByLocation = async () => {
  try {
    const response = await axiosInstance.get('/api/cafes');
    const cafes = response.data
    console.log(cafes)
    const locations = [...new Set(cafes.map((cafe) => cafe.location))]
    return {cafes, locations};
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching cafes');
  }
};

export const createCafe = async (newCafe) => {
  try {
    const response = await axiosInstance.post('api/cafe');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error creating cafe');
  }
};
