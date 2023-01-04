import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(
      "https://debugthismeme.onrender.com/api/auth/login",
      userCredentials
    );
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    alert(err.response.data.message);
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const logoutCall = async (dispatch) => {
  dispatch({ type: "LOGOUT" });
};
