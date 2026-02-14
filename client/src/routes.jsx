import { lazy } from "react";
const Cart = lazy(() => import("./Cart"));
const FlexBox = lazy(() => import("./FlexBox"));
const Login = lazy(() => import("./Login"));
const Orders = lazy(() => import("./Orders"));
import Parent, { Child1, Child2, Child3 } from "./Parent";
// const Parent = lazy(() => import('./Parent'));

// const Parent = ParentModule?.default;
// const Child1 = ParentModule?.Child1;
// const Child2 = ParentModule?.Child2;
// const Child3 = ParentModule?.Child3;

const Products = lazy(() => import('./Products'))
// import Products from "./Products";
const ProtectedRoute = lazy(() => import("./ProtectedRoute"));
const Counter = lazy(() => import("./reducers/Counter"));
const Routing = lazy(() => import("./Routing"));
const Signup = lazy(() => import("./Signup"));

// const ParentComponent = lazy(()=>import('./Parent'))

const routes = [
    {
        path: '',
        element: <Products />,
    },
    {
        path: 'parent',
        element: <Parent />,
        children: [
            // parent/child1
            {
                path: 'child1',
                element: <Child1 />
            },
            {
                path: 'child2',
                element: <Child2 />
            },
            {
                path: 'child3',
                element: <Child3 />
            }
        ]
    },
    {
        path: 'routing/:productId',
        element: <Routing />,
    },
    {
        path: 'flex',
        element: <FlexBox />
    },
    {
        path: 'signup',
        element: <Signup />
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'counter',
        element: <Counter />
    },
    {
        path: 'user',
        element: <ProtectedRoute />,
        children: [
            {
                path: 'cart', element: <Cart />
            },
            {
                path: 'order', element: <Orders />
            },
        ]

    }
];


export default routes;