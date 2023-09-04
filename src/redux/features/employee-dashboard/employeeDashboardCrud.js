import { ADD_EMPLOYEE, GET_ALL_BRANCHES, GET_ALL_DEPARTMENTS, GET_ALL_DESIGNATION, GET_ALL_EMPLOYEES, GET_REGION_NAME, GET_SALES } from "../../../config/config";
import axios from "axios";

export const employeeList = async () => {
  try {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(GET_ALL_EMPLOYEES, {
      headers: headers,
    });

    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};


export const getAllregionList = async (data) => {
  try {
    const response = await axios.get(GET_REGION_NAME, data);
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error; 
  }
};

export const getAllsalesList = async (data) => {
  try {
    const response = await axios.get(GET_SALES, data);
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getAllbranchesList = async (data) => {
  try {
    const response = await axios.get(GET_ALL_BRANCHES, data);
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getAlldepartmentList = async (data) => {
  try {
    const response = await axios.get(GET_ALL_DEPARTMENTS, data);
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getAlldesignationList = async (data) => {
  try {
    const response = await axios.get(GET_ALL_DESIGNATION, data);
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// export const addEmployees = (data) => {
//   return axios.post(ADD_EMPLOYEE, data);
// };


export const addEmployees = (payload) => {
  return axios.post(`${ADD_EMPLOYEE}`, { data: payload });
};