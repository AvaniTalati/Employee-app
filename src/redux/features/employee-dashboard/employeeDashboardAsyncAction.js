import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addEmployees,
  employeeList,
  getAllbranchesList,
  getAlldepartmentList,
  getAlldesignationList,
  getAllregionList,
  getAllsalesList,
} from "./employeeDashboardCrud";
import {
  ADD_EMPLOYEE,
  GET_ALL_BRANCHES,
  GET_ALL_DEPARTMENTS,
  GET_ALL_DESIGNATION,
  GET_ALL_EMPLOYEES,
  GET_REGION_NAME,
  GET_SALES,
} from "../../../config/config";
import { ADD_EMPLOYEE_TYPE } from "../../../constants/asyncActionTypes";

export const getAllEmployee = createAsyncThunk(GET_ALL_EMPLOYEES, employeeList);

export const getAllRegionName = createAsyncThunk(
  GET_REGION_NAME,
  getAllregionList
);

export const getAllSales = createAsyncThunk(GET_SALES, getAllsalesList);

export const getAllBranchLists = createAsyncThunk(
  GET_ALL_BRANCHES,
  getAllbranchesList
);

export const getAllDepartmentLists = createAsyncThunk(
  GET_ALL_DEPARTMENTS,
  getAlldepartmentList
);

export const getAllDesignationLists = createAsyncThunk(
  GET_ALL_DESIGNATION,
  getAlldesignationList
);


export const getAllAddEmployeeLists = createAsyncThunk(
  ADD_EMPLOYEE_TYPE,
  addEmployees
);
