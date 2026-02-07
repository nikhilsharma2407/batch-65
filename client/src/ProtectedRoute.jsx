import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router'
import useIsLoggedIn from './useIsLoggedIn';

const ProtectedRoute = () => {

  const { pathname } = useLocation();
  const isLoggedIn = useIsLoggedIn();
  const [navigateToLogin, setNavigateToLogin] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) {
      setTimeout(() => {
        setNavigateToLogin(true);
      }, 3000);
    } else {
      setTimeout(() => {
        setNavigateToLogin(false);
      }, 3000);
    }
  }, [isLoggedIn]);

  if (navigateToLogin) {
    return <Navigate to='/login' replace={true} state={pathname} />
  } else if (navigateToLogin === false) {
    return <Outlet />
  }

}

// usercart click->Protected route->loginPage

export default ProtectedRoute