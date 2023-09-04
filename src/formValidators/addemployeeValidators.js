import {
  ACTUAL_DESIGNATION,
  BRANCH,
  COPS_CAPACTITY,
  COPS_NEXT_USER1,
  COPS_NEXT_USER2,
  COPS_NEXT_USER3,
  DEPARTMENT,
  DESIGNATION,
  EMAIL,
  EMP_ID,
  EMP_NAME,
  MAIN_USER,
  MAXLOAD_OTHER_BRANCH,
  MAXLOAD_OWN_BRANCH,
  MAXLOAD_PER_DAY,
  MOBILE,
  NEXT_USER,
  PRIORITY_OTHER_BRAND,
  REGION,
  SALES_OFFICE,
  USER_ID,
  VIEW_CUSTOMER,
  VIEW_QUATOTAION,
} from "../constants/constants";

export const employeeValidators = {
  [EMP_ID]: {
    required: "Please enter empid",
  },
  [REGION]: {
    required: "Please enter region",
  },
  [SALES_OFFICE]: {
    required: "Please enter office",
  },
  [DESIGNATION]: {
    required: "Please select designation",
  },
  // [VIEW_CUSTOMER]: {
  //   required: "Please enter password",
  // },
  [USER_ID]: {
    required: "Please enter user id",
  },
  [EMAIL]: {
    required: "Please enter email",
  },

  [COPS_CAPACTITY]: {
    required: "Please enter cops capacity",
  },


  [EMP_NAME]: {
    required: "Please enter emp name",
  },
  [BRANCH]: {
    required: "Please enter branch",
  },
  [DEPARTMENT]: {
    required: "Please enter department",
  },
  [ACTUAL_DESIGNATION]: {
    required: "Please enter actual designation",
  },
  [VIEW_QUATOTAION]: {
    required: "Please enter view quatotaion",
  },
  [MOBILE]: {
    required: "Please enter mobile value",
  },
 
  [MAXLOAD_PER_DAY]: {
    required: "Please enter maxload per day",
  },
  [MAXLOAD_OTHER_BRANCH]: {
    required: "Please enter maxload other branch",
  },
};
