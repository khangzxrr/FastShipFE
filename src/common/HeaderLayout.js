import React from "react";
import { Button, Layout, Menu } from "antd";
import {
  DownOutlined,
  MailOutlined,
  PhoneFilled,
  RightOutlined,
} from "@ant-design/icons";
import "../common/style.css";
import { Link, useNavigate } from "react-router-dom";
import {VscAccount} from 'react-icons/vsc'
const { Header } = Layout;

const Item = ({ children }) => (
  <div
    style={{ width: "100%", display: "flex", justifyContent: "space-between" }}
  >
    <span>{children}</span>
    <RightOutlined style={{ marginLeft: 30, fontSize: 9 }} />
  </div>
);

const items = [

  {
    label: "DỊCH VỤ",
    key: "service",
  },
  {
    label: "BẢNG GIÁ",
    key: "price,"
  },
  {
    label: "CHÍNH SÁCH",
    key: "rule",
  },
  {
    label: "TIN TỨC",
    key: "news",
  },
  {
    label: "LIÊN HỆ",
    key: "contact",
  },
];

export const HeaderLayout = () => {
  const navigate = useNavigate();
  return (
    <>
          <div style={{ backgroundColor: "#f0f0ed" }}>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
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
          <div className="href">
            <Link to="/order">Tài Khoản</Link>
            <Link to="/login">Đăng Nhập</Link>
            <Link to="/signin">Đăng Ký</Link>
          </div>
        </div>
      </div>
      <Header
        style={{
          height: "65px",
          position: "sticky",
          top: 0,
          zIndex: 9,
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid rgba(5, 5, 5, 0.06)",
        }}
      >
                  <div
          className="container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
            <img
              onClick={() => navigate("/")}
              src="/logo.png"
              style={{
                float: "left",
                height: "100%",
                width: 190,
                marginRight: 15,
                
              }}
            />
          <div style={{ display: "flex" }}>
            <Menu
              theme="light"
              mode="horizontal"
              items={items}
              style={{ width: "100%", fontSize: 12, fontWeight: "bold" }}
            />
          </div>
          <div>
            
            <Button style={{ fontSize: 11 }}>
              YÊU CẦU BÁO GIÁ
            </Button>
          </div>  
        </div>
      </Header>
    </>
  );
};
