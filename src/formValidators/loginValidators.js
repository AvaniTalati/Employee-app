import {  PASSWORD, USERNAME } from "../constants/constants";


export const loginValidators = {
  [USERNAME]: {
    required: "Please enter userName",
    
  },
  [PASSWORD]: {
    required: "Please enter password",
  },
};
