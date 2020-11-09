import axios from "axios";

const AuthActionType = {
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  LOGOUT_FAIL: "LOGOUT_FAIL",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
};

const RegisterAuthAction = (userState, history) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/register", userState);
      const { data } = res;
      dispatch({ type: AuthActionType.REGISTER_SUCCESS, payload: data });
      history.push("/");
    } catch (error) {
      console.error(error);
      dispatch({ type: AuthActionType.REGISTER_FAIL, payload: {} });
    }
  };
};

const LoginAuthAction = (loginState, history) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/authenticate", loginState);
      const { data } = res;
      dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: data });
      history.push("/");
    } catch (error) {
      console.error(error);
      dispatch({ type: AuthActionType.LOGIN_FAIL, payload: {} });
    }
  };
};

const LogOutAuthAction = (history) => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/logout");
      const { data } = res;
      dispatch({
        type: AuthActionType.LOGOUT_SUCCESS,
        payload: data.message,
      });
      history.push("/");
    } catch (error) {
      console.error(error);
      dispatch({ type: AuthActionType.LOGOUT_FAIL, payload: {} });
    }
  };
};

export {
  RegisterAuthAction,
  AuthActionType,
  LogOutAuthAction,
  LoginAuthAction,
};
