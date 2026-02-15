import { useContext, useState } from "react";
import { axiosInstance, REQUEST_TYPES } from "./apiUtils";
import { UserContext } from "./UserContextProvider";

const useApi = (url, type = REQUEST_TYPES.GET) => {
  const { setUserData, setMessage, setSuccess, isLoading, setIsLoading } =
    useContext(UserContext);

  const [responseData, setResponseData] = useState(null);

  const makeRequest = async (
    payload,
    options = { updateCart: false, updateUser: true, logout: false },
  ) => {
    const { updateCart, updateUser, logout } = options;
    try {
      setIsLoading(true);
      setMessage(null);
      const apiResponse = (await axiosInstance[type](url, payload)).data;

      const { message, success, data = null } = apiResponse;
      console.log("🚀 ~ makeRequest ~ data:", data);

      setSuccess(success);
      setMessage(message);
      if (updateCart) {
        setUserData((userData) => ({ ...userData, cart: data }));
      } else if (updateUser) {
        setUserData(data);
      } else if (logout) {
        setUserData(null);
      } else {
        setResponseData(data);
      }
    } catch (error) {
      console.log("🚀 ~ makeRequest ~ error:", error);
      setSuccess(false);
      setMessage(error.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { makeRequest, isLoading, responseData };
};

export default useApi;
