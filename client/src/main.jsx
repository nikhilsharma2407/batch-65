import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import routes from './routes';
import UserContextProvider from './UserContextProvider';
import { applyMiddleware, createStore } from 'redux';
import countReducer from './reducers/countReducer';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk'
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes
  }
]);

const store = createStore(countReducer, applyMiddleware(logger, thunk));

createRoot(document.getElementById('root')).render(
  <>
    {/* <UserContext.Provider value={{
      userData,
      setUserData,
      message,
      setMessage,
      success,
      setSuccess,
      isLoading,
      setIsLoading,
    }}>
    // these becomes the children
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </UserContext.Provider> */}


    <UserContextProvider>
      <Provider store={store}>
        <RouterProvider router={router}>
          {/* <Suspense fallback={()=><h1 style={{position:'fixed', top:'50%'}}>Loading</h1>}> */}
            <App />
          {/* </Suspense> */}
        </RouterProvider>
      </Provider>
    </UserContextProvider>
  </>
)
