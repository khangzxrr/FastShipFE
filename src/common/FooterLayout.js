import React from "react";
import { Col, Layout, Row } from "antd";
import {useNavigate } from 'react-router-dom'
const { Footer } = Layout;

export const FooterLayout = () => {
    const navigate = useNavigate();
    return (
        <Footer style={{ padding: "0px" }}>
            <img
              onClick={() => navigate("/")}
              src="/logo.png"
              style={{
                float: "left",
                height: "100%",
                width: 200,
                margin:'20px 5%',
              }}
            />
            <div style={{ backgroundColor: "white", padding: "10px 0", boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}>
                <div className="container" style={{ color: "black", display: "flex"}}>
                    <Row gutter={[24, 6]}>
                        <Col style={{ fontSize: 24, fontWeight: 600 }} span={6}>
                            Công ty TNHH
                        </Col>
                        <Col style={{ fontSize: 24, fontWeight: 600 }} span={6}>
                            Thông tin chung
                        </Col>
                        <Col style={{ fontSize: 24, fontWeight: 600 }} span={6}>
                            Hỗ trợ người dùng
                        </Col>
                        <Col style={{ fontSize: 24, fontWeight: 600 }} span={6}>
                            Liên hệ
                        </Col>
                        <Col span={6}>
                            <div className="links">
                                <div>
                                    <p>Địa chỉ</p>
                                    <span>28Bis Mạc Đĩnh Chi, Phường Đa Kao, Quận 1, Thành Phố Hồ Chí Minh, Việt Nam</span>
                                </div>
                                <div>
                                    <p>Số chứng nhận ĐKKD</p>
                                    <span>0314758651, Cấp Ngày 29/11/2017, Tại Sở Kế Hoạch Và Đầu Tư Thành Phố Hồ Chí Minh</span>
                                </div>
                                <div>
                                    <p>Số Giấy Phép Sàn Thương Mại Điện Tử</p>
                                    <span>0314758651/KD-0368</span>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="links">
                                <div>
                                    <span>Thông tin về </span>
                                </div>
                                <div>
                                    <span>Quy Chế Hoạt Động</span>
                                </div>
                                <div>
                                    <span>Điều Khoản Sử Dung</span>
                                </div>
                                <div>
                                    <span>Chính Sách Bảo Mật</span>
                                </div>
                                <div>
                                    <span>Chính Sách Giải Quyết Khiếu Nại</span>
                                </div>
                                <div>
                                    <span>Chính Sách Đăng Tải Sản Phẩm</span>
                                </div>
                                <div>
                                    <span>Chính Sách Đổi Trả</span>
                                </div>
                                <div>
                                    <span>Chính Sách Vận Chuyển</span>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="links">
                                <div>
                                    <span>Câu Hỏi Thường Gặp</span>
                                </div>
                                <div>
                                    <span>Hướng Dẫn Đăng Tải Sản Phẩm</span>
                                </div>
                                <div>
                                    <span>Hướng Dẫn Đặt Hàng Và Thanh Toán</span>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="links">
                                <div>
                                    <span>hotro@</span>
                                </div>
                                <div>
                                    <span>02 873 008 80 (Từ T2 đến CN: 8AM-8PM)</span>
                                </div>
                                <div>
                                    <span>Nhận Ngay ƯU ĐÃI Mới</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Footer>
    );
};
