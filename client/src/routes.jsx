import FlexBox from "./FlexBox";
import Login from "./Login";
import Orders from "./Orders";
import Parent, { Child1, Child2, Child3 } from "./Parent";
import Products from "./Products";
import ProtectedRoute from "./ProtectedRoute";
import Counter from "./reducers/Counter";
import Routing from "./Routing";
import Signup from "./Signup";
import UserCart from "./UserCart";

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
                path: 'cart', element: <UserCart />
            },
            {
                path: 'order', element: <Orders />
            },
        ]

    }
];


export default routes;