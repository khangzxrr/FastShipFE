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
                            <div style={{ height: '40vh', width: '100%', marginTop:'-40px' }}>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: "" }}
                                    defaultCenter={defaultProps.center}
                                    defaultZoom={defaultProps.zoom}
                                >
                                    <AnyReactComponent
                                        lat={59.955413}
                                        lng={30.337844}
                                        text="My Marker"
                                    />
                                </GoogleMapReact>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Footer>
    );
};
