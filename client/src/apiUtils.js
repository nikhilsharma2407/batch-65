import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

export const ENDPOINTS = {
  USER: {
    LOGIN: "/user/login",
    Signup: "/user/signup",
    LOGOUT: "/user/logout",
    RESET_PASSWORD: "/user/reset-password",
  },
  CART: {
    ADD_TO_CART: "/cart/add-to-cart",
    REMOVE: "/cart/remove",
    INCREMENT: "/cart/increment",
    DECREMENT: "/cart/decrement",
    CLEAR_CART: "/cart/clear-cart",
    GET_CART: "/cart/get-cart",
    CHECKOUT: "/order/create-checkout-session",
  },
};

export const REQUEST_TYPES = {
  GET: "get",
  POST: "post",
  PUT: "put",
  PATCH: "patch",
  DELETE: "delete",
};
