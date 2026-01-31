import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import routes from './routes';
import UserContextProvider from './UserContextProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes
  }
]);

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
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </UserContextProvider>
  </>
)
