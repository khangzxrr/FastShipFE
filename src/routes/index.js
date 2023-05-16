import {AppLayout} from "../common/AppLayout";
import Add from "../pages/add";
import Detail from "../pages/detailod";
import HomeEmployee from "../pages/employee/employee-order";
import OrderDetailEmployee from "../pages/employee/employee-orderdetail";
import WarrantyList from "../pages/employee/employee-warranty";
import WarrantyDetail from "../pages/employee/employee-warrantydetail";
import Form from "../pages/guest/guest-form";
import HomePage from "../pages/home";
import Login from "../pages/login";
import CustomerManagement from "../pages/manager/customermanagement";
import ManagerCurrency from "../pages/manager/manager-currency";
import ManagerCustomerDetail from "../pages/manager/manager-customerdetail";
import ManagerHome from "../pages/manager/manager-home";
import ManagerOrder from "../pages/manager/manager-order";
import ManagerRevenueDetails from "../pages/manager/manager-revenuedetail";
import ManagerShipper from "../pages/manager/manager-shipper";
import ManagerShipperDetail from "../pages/manager/manager-shipperdetail";
import ShipperManagement from "../pages/manager/shippermanagement";
import MyOrder from "../pages/order";
import RegisterAccount from "../pages/register";
import HomeShipper from "../pages/shipper/shipper-order";
import OrderDetailShipper from "../pages/shipper/shipper-orderdetail";
import Signin from "../pages/signin";
import Warranty from "../pages/warranty";
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
              {
                path: "/shipper-order",
                element: <HomeShipper/>
              },
              {
                path: "/shipper-orderdetail",
                element: <OrderDetailShipper/>
              },
              {
                path: "/warranty",
                element: <Warranty/>
              },
              {
                path:"/employee-warranty",
                element:<WarrantyList/>
              },
              {
                path:"/employee-warrantydetail",
                element:<WarrantyDetail/>
              },
              {
                path:"/guest-form",
                element:<Form/>
              },
              {
                path:"/manager-home",
                element:<ManagerHome/>
              },
              {
                path:"/manager-revenuedetail",
                element:<ManagerRevenueDetails/>
              },
              {
                path:"/manager-currency",
                element:<ManagerCurrency/>
              },
              {
                path:"/manager-order",
                element:<ManagerOrder/>
              },
              {
                path:"/manager-shipper",
                element:<ManagerShipper/>
              },
              {
                path:"/manager-shipperdetail",
                element:<ManagerShipperDetail/>
              },
              {
                path:"/shippermanagement",
                element:<ShipperManagement/>
              },
              {
                path:"/customermanagement",
                element:<CustomerManagement/>
              },
              {
                path:"/manager-customerdetail",
                element:<ManagerCustomerDetail/>
              }
        ]
    },
];