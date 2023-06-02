import { AppLayout } from "../common/AppLayout";
import HomeEmployee from "../pages/employee/employee-order";
import OrderDetailEmployee from "../pages/employee/employee-orderdetail";
import EmployeeRequest from "../pages/employee/employee-request";
import EmployeeProductIssues from "../pages/employee/employeeProductIssuesList";
import FastBuy from "../pages/fastbuy/fastbuy";
import Form from "../pages/guest/guest-form";
import CustomerManagement from "../pages/manager/customermanagement";
import ManagerCurrency from "../pages/manager/manager-currency";
import ManagerCustomerDetail from "../pages/manager/manager-customerdetail";
import ManagerHome from "../pages/manager/manager-home";
import ManagerOrder from "../pages/manager/manager-order";
import ManagerRevenueDetails from "../pages/manager/manager-revenuedetail";
import ManagerShipper from "../pages/manager/manager-shipper";
import ManagerShipperDetail from "../pages/manager/manager-shipperdetail";
import ShipperManagement from "../pages/manager/shippermanagement";
import Request from "../pages/customer/request";
import HomeShipper from "../pages/shipper/shipper-order";
import OrderDetailShipper from "../pages/shipper/shipper-orderdetail";
import HomePage from "../pages/customer/home";
import Login from "../pages/customer/login";
import Signin from "../pages/customer/signin";
import RegisterAccount from "../pages/customer/register";
import Add from "../pages/customer/add";
import MyOrder from "../pages/customer/order";
import Detail from "../pages/customer/detailod";
import RequestProductIssue from "../pages/customer/requestProductIssue";
import CountTime from "../pages/customer/counttime";
import AdminHome from "../pages/admin/admin-home";
import AdminServer from "../pages/admin/admin-server";
import AdminAccounts from "../pages/admin/admin-accounts";
import ProductIssueDetail from "../pages/customer/productIssueDetail";
import EmployeeWarrantyDetail from "../pages/employee/employee-warrantydetail";
import CustomerWarrantyList from "../pages/customer/warrantylist";
import EmployeeRequestWarranty from "../pages/employee/employee-requestwarranty";
import AdminCreateAccount from "../pages/admin/admin-createaccount";
import AdminInsertAccount from "../pages/admin/admin-insertaccount";
import EmployeeProductReturnDetail from "../pages/employee/employee-productreturndetail ";
import Rules from "../pages/chinhsach/chinhsach";
import BangGia from "../pages/banggia/banggia";
import Update from "../pages/customer/update";

export const route = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/register",
        element: <RegisterAccount />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/order",
        element: <MyOrder />,
      },
      {
        path: "/detailod",
        element: <Detail />,
      },
      {
        path: "/employee-order",
        element: <HomeEmployee />
      },
      {
        path: "/employee-orderdetail",
        element: <OrderDetailEmployee />,
      },
      {
        path: "/shipper-order",
        element: <HomeShipper />
      },
      {
        path: "/shipper-orderdetail",
        element: <OrderDetailShipper />
      },
      {
        path: "/guest-form",
        element: <Form />
      },
      {
        path: "/manager-home",
        element: <ManagerHome />
      },
      {
        path: "/manager-revenuedetail",
        element: <ManagerRevenueDetails />
      },
      {
        path: "/manager-currency",
        element: <ManagerCurrency />
      },
      {
        path: "/manager-order",
        element: <ManagerOrder />
      },
      {
        path: "/manager-shipper",
        element: <ManagerShipper />
      },
      {
        path: "/manager-shipperdetail",
        element: <ManagerShipperDetail />
      },
      {
        path: "/shippermanagement",
        element: <ShipperManagement />
      },
      {
        path: "/customermanagement",
        element: <CustomerManagement />
      },
      {
        path: "/manager-customerdetail",
        element: <ManagerCustomerDetail />
      },
      {
        path: "/fastbuy",
        element: <FastBuy />
      },
      {
        path: "/request",
        element: <Request />
      },
      {
        path: "/employee-request",
        element: <EmployeeRequest />
      },
      {
        path: "/admin-home",
        element: <AdminHome/>
      },
      {
        path: "/admin-server",
        element: <AdminServer/>
      },
      {
        path: "/admin-accounts",
        element: <AdminAccounts/>
      },
      {
        path: "/product-return-list",
        element: <CustomerWarrantyList/>
      },
      {
        path: "/request-product-issue",
        element: <RequestProductIssue />
      },
      {
        path: "/product-issue-detail",
        element: <ProductIssueDetail/>
      },
      {
        path: "/employee-request-warranty",
        element: <EmployeeRequestWarranty/>
      },
      {
        path: "/employee-product-issues",
        element: <EmployeeProductIssues />
      },
      {
        path: "/employee-warranty-detail",
        element:<EmployeeWarrantyDetail/>
      },
      {
        path:"/admin-createaccount",
        element:<AdminCreateAccount/>
      },
      {
        path:"/admin-insertaccount",
        element:<AdminInsertAccount/>
      },
      {
        path:"/employee-product-issue-resolve",
        element:<EmployeeProductReturnDetail/>
      },
      {
        path:"/chinhsach",
        element:<Rules/>
      },
      {
        path:"/banggia",
        element:<BangGia/>
      }
      , {
        path:"/update",
        element:<Update/>
      }
    ]
  },
  {
    path: "/count-redirect-payment",
    element: <CountTime />
  }
];