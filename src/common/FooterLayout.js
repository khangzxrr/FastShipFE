import React from "react";
import { Col, Layout, Row } from "antd"
import GoogleMapReact from 'google-map-react';
import { ImLocation } from 'react-icons/im'
import { AiFillPhone } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { AiFillFacebook, AiOutlineCheck } from 'react-icons/ai'
const { Footer } = Layout;
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export const FooterLayout = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    return (
        <Footer className="footer" style={{ padding: "0px" }}>
            <div style={{ backgroundColor: "white", padding: "20px 0", boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                <div style={{ color: "black", display: "flex", padding: '0% 10%' }}>
                    <Row gutter={[24, 6]}>

                        <Col style={{ fontSize: 24, fontWeight: 600 }} span={6}>
                            Chính sách
                        </Col>
                        <Col style={{ fontSize: 24, fontWeight: 600 }} span={6}>
                            Thông tin liên hệ
                        </Col>
                        <Col style={{ fontSize: 24, fontWeight: 600 }} span={12}>

                        </Col>

                        <Col span={6}>
                            <div className="links">
                                <div>
                                    <AiOutlineCheck /> <a>Điều khoản dịch vụ</a>
                                </div>
                                <div>
                                    <AiOutlineCheck /> <a>Chính sách đổi trả</a>
                                </div>
                                <div>
                                    <AiOutlineCheck /> <a>Câu hỏi thường gặp</a>
                                </div>
                                <div>
                                    <AiOutlineCheck /> <a>Chính sách riêng</a>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="links">
                                <div>
                                    <ImLocation /> <a>Lô E2a-7, Đường D1 Khu Công nghệ cao, P. Long Thạnh Mỹ, TP. Thủ Đức, TP. Hồ Chí Minh</a>
                                </div>
                                <div>
                                    <AiFillPhone /> <a>028 7300 1866</a>
                                </div>
                                <div>
                                    <AiOutlineMail /> <a>hotro@fastship.com</a>
                                </div>
                                <div>
                                    <AiFillFacebook /> <a>FastShip.com Facebook</a>
                                </div>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div style={{ width: '100%', marginLeft: '0px', marginTop: '-30px' }}>
                                <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=tr%C6%B0%E1%BB%9Dng%20%C4%91%E1%BA%A1i%20h%E1%BB%8Dc%20FPT%20qu%E1%BA%ADn%209+(123)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                    <a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a>
                                </iframe>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Footer>
    );
};
