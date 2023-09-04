import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from '../login/loginSlice'
import employeeReducer from "../employee-dashboard/employeeDashboardSlice"
const rootReducer = combineReducers({
  login: loginReducer,
  employee:employeeReducer
});

export default rootReducer;
