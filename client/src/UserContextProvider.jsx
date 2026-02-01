import { createContext, useContext, useState } from "react";

export const UserContext = createContext({
    userData: null,
    setUserData: null,
    message: null,
    setMessage: null,
    success: null,
    setSuccess: null,
    isLoading: null,
    setIsLoading: null,
});

const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [message, setMessage] = useState(null);
    const [success, setSuccess] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    return <UserContext.Provider value={{
        userData,
        setUserData,
        message,
        setMessage,
        success,
        setSuccess,
        isLoading,
        setIsLoading,
    }}>
        {children}
    </UserContext.Provider>
}

export const useUserContext = ()=>{
    return useContext(UserContext);
}

export default UserContextProvider
