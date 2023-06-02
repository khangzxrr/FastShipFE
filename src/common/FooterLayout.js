import React from "react";
import { Col, Layout, Row } from "antd"
import { IoMdArrowDropright } from 'react-icons/io'
import {ImLocation} from 'react-icons/im'
import {AiFillPhone} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillFacebook, AiOutlineCheck} from 'react-icons/ai'
const { Footer } = Layout;
export const FooterLayout = () => {
    return (
        <Footer className="footer" style={{ padding: "0px" }}>
            <div style={{ backgroundColor: "white", padding: "20px 0", boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                <div style={{ color: "black", display: "flex", padding:'0% 10%' }}>
                    <Row gutter={[24, 8]}>
                        <Col style={{ fontSize: 24, fontWeight: 600 }} span={8}>
                            Tài khoản
                        </Col>
                        <Col style={{ fontSize: 24, fontWeight: 600 }} span={8}>
                            Chính sách
                        </Col>
                        <Col style={{ fontSize: 24, fontWeight: 600 }} span={8}>
                            Thông tin liên hệ
                        </Col>
                       
                        <Col span={8}>
                            <div className="links">
                                <div>
                                    <IoMdArrowDropright /> <a>Tài khoản</a>
                                </div>
                                <div>
                                    <IoMdArrowDropright /> <a>Tạo đơn hàng</a>
                                </div>
                                <div>
                                    <IoMdArrowDropright /> <a>Đăng ký thành viên</a>
                                </div>
                                <div>
                                    <IoMdArrowDropright /> <a>Giới thiệu</a>
                                </div>
                                <div>
                                    <IoMdArrowDropright /> <a>Liên hệ</a>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="links">
                                <div>
                                 <AiOutlineCheck/> <a>Điều khoản dịch vụ</a>
                                </div>
                                <div>
                                <AiOutlineCheck/> <a>Chính sách đổi trả</a>
                                </div>
                                <div>
                                <AiOutlineCheck/> <a>Câu hỏi thường gặp</a>
                                </div>
                                <div>
                                <AiOutlineCheck/> <a>Chính sách riêng</a>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="links">
                                <div>
                                   <ImLocation/> <a>Lô E2a-7, Đường D1 Khu Công nghệ cao, P. Long Thạnh Mỹ, TP. Thủ Đức, TP. Hồ Chí Minh</a>
                                </div>
                                <div>
                                   <AiFillPhone/> <a>028 7300 1866</a>
                                </div>
                                <div>
                                    <AiOutlineMail/> <a>hotro@fastship.com</a>
                                </div>
                                <div>
                                   <AiFillFacebook/> <a>FastShip.com Facebook</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Footer>
    );
};
