import axios from "axios";
import jwtDecode from "jwt-decode";
import { apiEndPoint } from "../../utils/api";
import { setSnackbar } from "./uiActions";

export function loginUser(data) {
  return (dispatch) => {
    dispatch({
      type: "LOGINING_USER",
    });

    axios
      .post(`${apiEndPoint}/admin-auth`, data)
      .then((res) => {
        const token = res.data;
        console.log("loginnnnn", token);
        localStorage.setItem("OBAS_ADMIN_TOKEN", token);
        setAuthorizationHeader(token);
        const decodedToken = jwtDecode(token);
        dispatch(setUser(decodedToken));

        // window.location.href = `/`;
        dispatch({
          type: "COMPLETE_LOGINING_USER",
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch(setSnackbar(err.message, "error"));
        if (err.response && err.response.data) {
          dispatch(setSnackbar(err.response.data.message, "error"));
        }
        dispatch({
          type: "COMPLETE_LOGINING_USER",
        });
      });
  };
}

export function setUser(data) {
  return { type: "SET_USER", payload: data };
}

export function authenticateUser(data) {
  return (dispatch) => {
    dispatch({ type: "AUTHENTICATE_USER" });
  };
}

export function signUpUser(data) {
  return (dispatch) => {
    dispatch({ type: "SIGNING_USER" });
    axios
      .post(`${apiEndPoint}/admin/adminRegister`, data)
      .then((res) => {
        dispatch({ type: "REGISTER_USER" });
        console.log("response", res);

        if (res.status === 200) {
          dispatch({ type: "COMPLETE_SIGNING_USER" });
          setTimeout(() => {
            window.location.href = "/login";
          }, 4000);
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "COMPLETE_SIGNING_USER" });
        dispatch(setSignUpErrors(err.message));
        if (err.response && err.response.data && err.response.data.msg) {
          console.log("helloooo");
        }
      });
  };
}

export function loginInUser() {
  return (dispatch) =>
    dispatch({
      type: "LOGINING_USER",
    });
}

export function signingInUser() {
  return (dispatch) => {
    dispatch({ type: "SIGNING_USER" });
  };
}

export function finishSigningInUser() {
  return (dispatch) => {
    dispatch({ type: "COMPLETE_SIGNING_USER" });
  };
}

export function setSignUpErrors(data) {
  return (dispatch) => {
    window.scrollTo(0, 0);
    dispatch({
      type: "SET_SIGNUP_ERRORS",
      payload: data,
    });
  };
}

export function clearSignUpErrors() {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_SIGNUP_ERRORS",
    });
  };
}
export function setRegistrationState(data) {
  return (dispatch) => {
    dispatch({
      type: "SET_REGISTRATION_STATE",
      payload: data,
    });
  };
}
export function clearRegistrationState() {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_REGISTRATION_STATE",
    });
  };
}

// function to set the userid to redux store after initially registering the user to the database and getting the result from the backend
export function setRegUserId(data) {
  return (dispatch) => {
    dispatch({
      type: "SET_REG_USERID",
      payload: data,
    });
  };
}
// function to clear the userid from redux store
export function clearRegUserId() {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_REG_USERID",
    });
  };
}

// function to logout the user
export function logOutUser() {
  return (dispatch) => {
    localStorage.removeItem("OBAS_ADMIN_TOKEN");
    delete axios.defaults.headers.common["x-auth-token"];
    dispatch({ type: "LOGOUT_USER" });
    window.location.href = "/login";
  };
}

export const setAuthorizationHeader = (token) => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};