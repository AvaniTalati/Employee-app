import { LOGIN_URL } from "../../../config/config";
import axios from "axios";

export const login = (data) => {
  return axios.post(LOGIN_URL, data);
};
