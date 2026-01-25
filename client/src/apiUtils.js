import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

export const ENDPOINTS = {
  USER: {
    LOGIN: "/user/login",
    Signup: "/user/signup",
    LOGOUT: "/user/logout",
    RESET_PASSWORD: "/user/reset_password",
  },
  CART: {
    ADD_TO_CART: "/cart/add-to-cart",
    REMOVE: "/cart/remove",
    INCREMENT: "/cart/increment",
    DECREMENT: "/cart/decrement",
    CLEAR_CART: "/cart/clear-cart",
    GET_CART: "/cart/get-cart",
  },
};
