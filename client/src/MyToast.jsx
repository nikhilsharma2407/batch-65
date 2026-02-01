import React, { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useUserContext } from './UserContextProvider'

const MyToast = () => {
    const { message, success } = useUserContext();
    
    useEffect(() => {
        if (success) {
            toast.success(message)
        } else {
            toast.error(message)
        }
    }, [message, success])

    return (
        <ToastContainer />
    )
}

export default MyToast