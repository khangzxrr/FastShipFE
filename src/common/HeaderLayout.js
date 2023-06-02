import React from "react";
import { Button, Layout, Menu } from "antd";
import {
  PhoneFilled,
} from "@ant-design/icons";
import "../common/style.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/login/loginSlice";
import { BsFillCartCheckFill } from "react-icons/bs"
import { clearEmployeeGetOrderById } from "../features/employeeGetOrderById/employeeGetOrderByIdSlice";
const { Header } = Layout;
const items = [
  {
    label: "DỊCH VỤ",
    key: "service",
  },
  {
    label: <Link to='/banggia'>BẢNG GIÁ</Link>,
    key: "price,"
  },
  {
    label: <Link to='/chinhsach'>CHÍNH SÁCH</Link>,
    key: "rule",
  },
  {
    label: "TIN TỨC",
    key: "news",
  },
  {
    label: <Link to='/fastbuy'>FASTBUY</Link>,
    key: "thanhly",
  },
];

export const HeaderLayout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { roleName } = useSelector(state => state.login)

  const loginInfo = useSelector(state => state.login)

  function logoutOnClick() {
    dispatch(logout())
    dispatch(clearEmployeeGetOrderById())
    navigate("/login")
  }

  return (
    <>
      <div style={{ backgroundColor: "#f0f0ed", padding:'0% 5%'}}>
        <div
          className="containerHeader"
          style={{
            fontWeight: "bold",
            padding: 10,
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <PhoneFilled style={{ marginRight: 5, fontSize: 20 }} />
              <span>1900 636 707</span>
            </div>
            <div
              style={{
                marginLeft: 40,
                display: "flex",
                justifyContent: "center",
              }}
            >
            </div>
          </div>
          {loginInfo.isLogin ?
            <div className="href">
              <Link to="/login">{loginInfo.email}</Link>
              <Link style={{border:'none'}} onClick={logoutOnClick}>Đăng xuất</Link>
            </div>
            :
            <div className="href">
              <Link to="/login">Đăng Nhập</Link>
              <Link style={{border:'none'}} to="/signin">Đăng Ký</Link>
            </div>
          }


        </div>
      </div>
      <Header className="header"
        style={{
          height: "65px",
          position: "sticky",
          top: 0,
          zIndex: 9,
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid rgba(5, 5, 5, 0.06)",
        }}
      >
        <div>
        <img
            onClick={() => navigate("/")}
            src="/logopage.jpg"
            alt="logo fastship"
            className="logomobile"
            style={{
              height: "60px",
              width: 130,
              marginLeft:'auto',
              marginRight:'auto'
            }}
          />
        </div>
        <div
          className="containerHeader"
          
        >

          <div style={{ display: "flex", width:'700px' }}>
          <img
            onClick={() => navigate("/")}
            src="/logopage.jpg"
            alt="logo fastship"
            style={{
              float: "left",
              height: "60px",
              width: 130,
              marginRight: 15,

            }}
          />
            <Menu
              theme="light"
              mode="horizontal"
              items={items}
              style={{ width: "100%", fontSize: 12, fontWeight: "bold" }}
            />
          </div>
          <div>
            {roleName === "EMPLOYEE" &&
              (<Link to="/employee-order">
                <Button style={{ fontSize: 11 }} >
                  Đơn hàng tôi đang đảm nhiệm
                </Button>
              </Link>)
            }

            {roleName === "EMPLOYEE" &&
              (<Link to="/employee-product-issues">
                <Button style={{ fontSize: 11 }} >
                  Những sản phẩm đổi trả / bảo hành
                </Button>
              </Link>)
            }

            {roleName === "CUSTOMER" &&
              (<Link to="/order">
                <Button style={{ fontSize: 11 }} >
                  Đơn hàng của tôi
                </Button>
              </Link>)
            }


            <Link to="/add">
              <Button style={{ fontSize: 15, border: 'none', boxShadow: 'none' }} >
                <BsFillCartCheckFill />
              </Button>
            </Link>
          </div>
        </div>
      </Header>
    </>
  );
};
