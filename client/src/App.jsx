import { Button } from 'react-bootstrap';
import { Link, Outlet } from 'react-router';
import MyNavBar from './MyNavBar';
import Loader from './Loader';
import { useContext, useEffect } from 'react';
import useApi from './useApi';
import { ENDPOINTS } from './apiUtils';
import { UserContext } from './UserContextProvider';
import MyToast from './MyToast';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from './reducers/countReducer';

function App() {
  const { userData } = useContext(UserContext);
  const { makeRequest: initiateLogin } = useApi(ENDPOINTS.USER.LOGIN)
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  useEffect(() => {
    initiateLogin();
    // check the localstore key then redirect
  }, [])



  return (
    <>
      {/* <section className='mt-5'>
        <Link to='signup'>Signup</Link>
        <br />
        <Link to='login' replace={true}>Login</Link>
        <br />
        <Link to='flex'>Flex</Link>
        <br />
        <Link to='routing/m123?keyword=iPhone&capacity=256GB'>Routing</Link>
        <br />
        <Link to='parent/child1'>Child1</Link>
      </section> */}

      <MyNavBar />
      <Loader />
      <MyToast />

      {/* <Button onClick={() => dispatch({ type: ACTIONS.INCREMENT, payload: 1 })} variant="primary">App Component</Button> */}

      {/* <h1>{count}</h1> */}

      <Outlet />
    </>
  )
}

export default App
