import React from "react";
import { Redirect } from "react-router-dom";
import http from "./httpService";
import jwtDecode from "jwt-decode";
import { apiUrl } from "../config.json";
const apiEndpoint = `${apiUrl}/auth/driver/login`;
const passwordrestlink = `${apiUrl}/reset_password`;
const tokenKey = "WEHAUL_DRIVER";

http.setJwt(getJwt());
export async function login(data) {
  const { data: jwt } = await http.post(apiEndpoint, data);
  localStorage.setItem("WEHAUL_DRIVER", jwt?.token);

  console.log(jwt);
  return jwt;
}

export function loginWithJwt() {
  localStorage.setItem(tokenKey);
}
export function logout() {
  localStorage.removeItem(tokenKey);
}

export function expiredLogout() {
  const user = getCurrentUser();
  if (user && user.exp) {
    if (Date.now() >= user.exp * 1000) {
      localStorage.removeItem(tokenKey);
      return <Redirect to="/login" />;
    }
  } else {
    return <Redirect to="/login" />;
  }
}
export function getJwt() {
  return localStorage.getItem(tokenKey);
}
export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function ConfirmAccount(token) {
  return http.put(`${apiEndpoint}/${token}`);
}
export function Forgotpassword(useremail) {
  return http.post(passwordrestlink, useremail);
}
export function Resetpassword(token, userdata) {
  return http.put(`${passwordrestlink}/${token}`, userdata);
}
let auth = {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
  expiredLogout,
  ConfirmAccount,
  Forgotpassword,
  Resetpassword,
};
export default auth;
