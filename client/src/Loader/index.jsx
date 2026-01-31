import React, { useContext } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import { UserContext } from '../UserContextProvider';
import './styles.scss'

const Loader = () => {
    const { isLoading } = useContext(UserContext);
    return (
        isLoading ? <Spinner className='loader' /> : null
    )
}

export default Loader