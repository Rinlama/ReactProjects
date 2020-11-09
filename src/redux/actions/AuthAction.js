import axios from "axios";

const AuthActionType = {
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
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

export { RegisterAuthAction, AuthActionType };
