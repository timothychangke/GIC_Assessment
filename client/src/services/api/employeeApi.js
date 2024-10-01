import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getEmployeesByCafe = async (cafe) => {
  try {
    const url = cafe ? `/api/employees?cafe=${cafe}` : '/api/employees';
    const response = await axiosInstance.get(url);
    const { employees, cafes } = response.data;
    return { employees, cafes };
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Error fetching employees'
    );
  }
};

export const createEmployee = async (newEmployee) => {
  try {
    // TODO
    const newEmployeeObj = Object.fromEntries(newEmployee.entries());
    const response = await axiosInstance.post('/api/employee', newEmployeeObj);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error creating employee');
  }
};

export const updateEmployee = async (updatedEmployee) => {
  try {
    const { id: employeeId } = updatedEmployee;
    console.log(updatedEmployee);
    const response = await axiosInstance.put(
      `/api/employee/${employeeId}`,
      updatedEmployee
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error editing employee');
  }
};

export const deleteEmployee = async (employeeId) => {
  try {
    const response = await axiosInstance.delete(`/api/employee/${employeeId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error deleting employee');
  }
};
