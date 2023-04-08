import {AppLayout} from "../common/AppLayout";
import Add from "../pages/add";
import Detail from "../pages/detailod";
import HomeEmployee from "../pages/employee/employee-order";
import OrderDetailEmployee from "../pages/employee/employee-orderdetail";
import HomePage from "../pages/home";
import Login from "../pages/login";
import MyOrder from "../pages/order";
import RegisterAccount from "../pages/register";
import Signin from "../pages/signin";
export const route = [
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                index: true,
                element: <HomePage />,
              },
              {
                path:"/home",
                element: <HomePage />,
              },
              {
                path: "/login",
                element: <Login />,
              },
              {
                path: "/signin",
                element: <Signin/>,
              },
              {
                path: "/register",
                element: <RegisterAccount/>,
              },
              {
                path: "/add",
                element: <Add/>,
              },
              {
                path: "/order",
                element: <MyOrder/>,
              },
              {
                path: "/detailod",
                element: <Detail/>,
              },
              {
                path: "/employee-order",
                element: <HomeEmployee/>
              },
              {
                path: "/employee-orderdetail",
                element: <OrderDetailEmployee/>,
              },
        ]
    },
];