import { useContext } from "react"
import { UserContext } from "./UserContextProvider"

const useIsLoggedIn = () => {
    const { userData } = useContext(UserContext);
    return !!userData;
}

export default useIsLoggedIn