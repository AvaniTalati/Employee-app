import React from "react";
import { useForm } from "react-hook-form";
import styles from "./login.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { PASSWORD, USERNAME } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../redux/features/login/loginAsyncAction";
import { loginValidators } from "../../formValidators/loginValidators";
import { USER_LOGIN_TYPE } from "../../constants/asyncActionTypes";

const Login = ({authenticate}) => {
  const {  userData } = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  
  const trimValue = (e) => {
    let value = e.target.value;
    if (value.length === 1 && value === " ") {
      e.target.value = "";
    } else if (
      value.length > 1 &&
      value[0] === " " &&
      value[value.length - 1] === " "
    ) {
      value = value.trim();
      const words = value.split(" ");
      const filteredWords = words.filter((word) => word !== "");
      e.target.value = filteredWords.join(" ");
    } else if (value.length > 1 && value[0] === " ") {
      e.target.value = value.trim();
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(userLogin(data)).then((e) => {
      if (e.type === `${USER_LOGIN_TYPE}/fulfilled`) {
        const token = e.payload.token;
        const username = data[USERNAME]; 
        const password = data[PASSWORD]; 

        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        authenticate();
  
        navigate("/empDashboard");
      }
    });
  };

  return (
    <>
      <div className={styles.loginContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formContainer}>
            <div className={styles.emailContainer}>
              <label className={styles.label}> UserName: </label>
              <input
                className={styles.emailField}
                type="text"
                placeholder="Username"
                {...register(USERNAME, loginValidators[USERNAME])}
                onChange={(e) => trimValue(e)}
              />
            </div>
            <p className={styles.errorText}>
              {errors.userName && (
                <span className={styles.error}>{errors.userName.message}</span>
              )}
            </p>
            <div className={styles.passwordContainer}>
              <label className={styles.label}>  Password: </label>
              <input
                className={styles.emailField}
                type="text"
                placeholder="Password"
                {...register(PASSWORD, loginValidators[PASSWORD])}
                onChange={(e) => trimValue(e)}
              />
            </div>
            <p className={styles.errorText}>
              {errors.password && (
                <span className={styles.error}>{errors.password.message}</span>
              )}
            </p>
           
          </div>

          <button className={styles.loginBtn}>Login</button>
        </form>
      </div>
    </>
  );
};
export default Login;
