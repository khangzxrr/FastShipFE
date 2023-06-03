import React from 'react'
import { BsFillAirplaneFill } from 'react-icons/bs'
import { IoMdBoat } from 'react-icons/io'
import { MdOutlineSecurity } from 'react-icons/md'
import { BsFillChatHeartFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { MdRectangle, MdOutlineRectangle } from 'react-icons/md'
import { GiStarsStack } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { Divider } from 'antd'
export default function ContentMiddle() {
    return (
        <>
            <div className='container' style={{ marginTop: "100px" }}>
                <div className='content1' style={{ display: "flex" }}>
                    <div>
                        <h2><span style={{ color: "black" }}>VẬN CHUYỂN</span></h2>
                        <h2>NHANH CHÓNG <span style={{ color: "black" }}>VÀ</span> AN TOÀN</h2>
                    </div>
                    <div style={{ padding: "30px 5px" }}>
                        <p>Thông qua việc tối ưu hóa chi phí, nâng cao hiệu suất các dịch vụ của mình, Xanh lơ cung cấp cho khách hàng dịch vụ vận chuyển nhanh với chi phí rẻ đồng thời giảm tác động đến môi trường.</p>
                    </div>
                </div>
                <div className='content2' style={{ display: "flex" }}>
                    <div style={{ marginRight: "2%" }}>
                        <span><BsFillAirplaneFill style={{ color: "#FFE715" }} /></span>
                        <h2>HÀNG KHÔNG</h2>
                        <p>Cung cấp giá cước tiết kiệm, phù hợp với các mặt hàng nặng, số lượng lớn</p>
                    </div>
                    <div>
                        <span><IoMdBoat style={{ color: "#FFE715" }} /></span>
                        <h2>HÀNG HẢI</h2>
                        <p>Với thời gian vận chuyển từ 7-15 ngày giúp cho việc mua hàng hoá từ Mỹ trở nên dễ dàng và nhanh chóng. Chỉ vài click chuột đơn giản, hàng hoá nhanh chóng được chuyển tới bạn</p>
                    </div>
                    <div style={{ marginLeft: "2%" }}>
                        <span><MdOutlineSecurity style={{ color: "#FFE715" }} /></span>
                        <h2>An Toàn Vận Chuyển</h2>
                        <p>Hàng hoá được bảo hiểm 100% (*). Các mặt hàng khó vận chuyển như chất dễ cháy, hoá chất, ... sẽ được FastShip tư vấn và đảm bảo hàng về tới Việt Nam an toàn</p>
                    </div>
                </div>
                <div className='content3' style={{
                    display: "flex", padding: "20px", backgroundColor: "black", borderRadius: "27px",
                    marginTop: "30px", marginBottom: "50px"
                }}>
                    <BsFillChatHeartFill style={{ color: "#FFE715", fontSize: "40px", marginTop: "10px", marginLeft: "50px" }} />
                    <div style={{ width: "80%", marginLeft: "60px" }}>
                        <h2 style={{ color: "#FFE715", }}>Khách hàng nói gì</h2>
                        <p style={{ color: "grey" }}>Hàng mình nhận siêu đẹp. Anh chị nhân viên bên FastShip hỗ trợ mình rất nhiệt tình và hàng về thì giao mình rất nhanh chóng. Mình sẽ ủng hộ FastShip vào các lần đặt hàng sau nữa</p>
                        <div style={{ display: "flex" }}>
                            <div style={{ width: "95%" }}>
                                <p style={{ color: "white" }}>Anh Tân</p>
                                <AiFillStar style={{ color: "#FFE715" }} />
                                <AiFillStar style={{ color: "#FFE715" }} />
                                <AiFillStar style={{ color: "#FFE715" }} />
                                <AiFillStar style={{ color: "#FFE715" }} />
                                <AiFillStar style={{ color: "#FFE715" }} />
                            </div>
                            <div style={{ float: "right", marginTop: "30px" }}>
                                <MdRectangle style={{ color: "#FFE715" }} />
                                <MdOutlineRectangle style={{ color: "#FFE715" }} />
                                <MdOutlineRectangle style={{ color: "#FFE715" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='content4' style={{ width: "100%", textAlign: "center", backgroundColor: "black", padding: "1px", marginBottom: "50px" }}>
                <h2>SERVICE <GiStarsStack />SERVICE <GiStarsStack /> SERVICE</h2>
            </div>
            <div className='container'>
                <div className='content1' style={{ display: "flex" }}>
                    <div>
                        <h2>DỊCH VỤ <span style={{ color: "black" }}>NỔI BẬT</span></h2>
                    </div>
                    <div style={{ padding: "10px 5px" }}>
                        <p>Khách hàng sử dụng dịch vụ của FastShip cũng chính là người đồng hành cùng chúng tôi trong các hoạt động vì xã hội.<br/>Giải pháp logistics tiết kiệm gắn liền với lợi ích xã hội, môi trường.</p>
                    </div>
                </div>
                <div className='content5' style={{ display: "flex" }}>
                    <div>
                        <img src={('service1.jpg')} />
                        <p>Mua hàng</p>
                        <h2>MUA HÀNG AMAZON</h2>
                    </div>
                    <div>
                        <img src={('service2.jpg')} />
                        <p>Mua hàng</p>
                        <h2>MUA HÀNG EBAY</h2>
                    </div>
                    <div>
                        <img src={('service1.jpg')} />
                        <p>Mua hàng</p>
                        <h2>MUA HÀNG MỸ</h2>
                    </div>
                    <div>
                        <img src={('service2.jpg')} />
                        <p>Mua hàng</p>
                        <h2>MUA HÀNG NHẬT</h2>
                    </div>
                </div>
                <div style={{ display: 'flex', marginTop: "50px" }}>
                    <div style={{ width: "60%", padding: "10px 50px 10px 0px" }}>
                        <h2>VÌ SAO <span style={{ color: "#FFE715" }}>NÊN LỰA CHỌN</span></h2>
                        <h2>CHÚNG TÔI</h2>
                        <p style={{ color: "#C9C9C9" }}>Giải pháp logistics tiết kiệm gắn liền với lợi ích xã hội, môi trường.</p>
                    </div>
                    <div className='content6' style={{ width: "20%" }}>
                        <div>
                            <p style={{ color: "#C3F10E", fontWeight: 1000 }}>1,426,378</p>
                            <p style={{ color: "white", fontWeight: 600 }}>Kiên hàng được giao</p>
                        </div>
                        <div>
                            <span>
                                <img src={('service3.png')} />
                            </span>
                            <p style={{ color: "#FFE715", fontWeight: 1000 }}>45.436</p>
                            <p style={{ color: "white", fontWeight: 600 }}>Khách hàng</p>
                        </div>
                    </div>
                    <div className='content6' style={{ width: "20%", marginTop: "30px" }}>
                        <div>
                            <span>
                                <img src={('service4.png')} />
                            </span>
                            <p style={{ color: "#FFE715", fontWeight: 1000 }}>45.436</p>
                            <p style={{ color: "white", fontWeight: 600 }}>Khách hàng</p>
                        </div>
                        <div>
                            <span>
                                <img src={('service5.png')} />
                            </span>
                            <p style={{ color: "#C3F10E", fontWeight: 1000 }}>45.436</p>
                            <p style={{ color: "white", fontWeight: 600 }}>Khách hàng</p>
                        </div>
                    </div>
                </div>
                <div >
                    <div>
                        <h2><span style={{ color: "#FFE715" }}>TIN TỨC</span> HÔM NAY</h2>
                    </div>
                    <div className='content7' style={{ display: "flex", height: "600px" }}>
                        <div style={{width:'50%', marginRight:'2%'}}>
                            <img src={('service6.jpg')} style={{ width: "615px", }} />
                            <h2>Hướng dẫn cách thanh toán bằng thẻ Visa trên eBay</h2>
                            <h4 style={{textAlign:'left'}}>eBay là một trong những trang thương mại điện tử có số lượng khách hàng truy cập “khủng” nhất hiện nay.</h4>
                        </div>
                        <div className='content8' style={{width:'48%'}}>
                            <div style={{ display: "flex" }}>
                                <img src={('service7.jpg')} style={{ width: "180px", height: "130px" }} />
                                <div>
                                    <h2>Giải đáp: Mua hàng trên Ebay có bị đánh thuế không?</h2>
                                    <h4 style={{textAlign:'left'}}>Hẳn là có rất nhiều bạn đang tự hỏi, liệu mua hàng trên Ebay có bị đánh thuế không?...</h4>
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <img src={('service7.jpg')} style={{ width: "180px", height: "130px" }} />
                                <div>
                                    <h2>Cách order nước hoa chính hãng đơn giản nhất</h2>
                                    <h4 style={{textAlign:'left'}}>Thị trường nước hoa rất đa dạng với nhiều sản phẩm và thương hiệu khác nhau...</h4>
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <img src={('service7.jpg')} style={{ width: "180px", height: "130px" }} />
                                <div>
                                    <h2>Order quần áo Hàn Quốc đơn giản, hàng đẹp</h2>
                                    <h4 style={{textAlign:'left'}}>Order quần áo Hàn Quốc trở thành một trong những xu hướng mua sắm lý tưởng của người tiêu dùng Việt, nhất là giới trẻ....</h4>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <Divider><Link>Xem thêm</Link></Divider>
                </div>
                <div>
                    <div>
                        <h2><span style={{ color: "#FFE715" }}>CÂU HỎI</span> THƯỜNG GẶP</h2>
                    </div>
                    <div style={{ display: "flex", width:"100%", border:"1px solid black", borderRadius:"20px", padding:"5px 10px", marginBottom:"20px"}}>
                        <img src={('service10.png')} style={{ width: "50px", height: "50px", margin:"20px 50px 20px 50px"}} />
                        <div style={{marginTop:"10px"}}>
                            <h1>So sánh Amazon và Ebay: Đâu là lựa chọn mua hàng tốt nhất?</h1>
                        </div>
                    </div>
                    <div style={{ display: "flex", width:"100%", border:"1px solid black", borderRadius:"20px", padding:"5px 10px", marginBottom:"20px"}}>
                        <img src={('service10.png')} style={{ width: "50px", height: "50px", margin:"20px 50px 20px 50px"}} />
                        <div style={{marginTop:"10px"}}>
                            <h1>Order quần áo Hàn Quốc đơn giản, hàng đẹp</h1>
                        </div>
                    </div>
                    <div style={{ display: "flex", width:"100%", border:"1px solid black", borderRadius:"20px", padding:"5px 10px", marginBottom:"50px"}}>
                        <img src={('service10.png')} style={{ width: "50px", height: "50px", margin:"20px 50px 20px 50px"}} />
                        <div style={{marginTop:"10px"}}>
                            <h1>Nên Order giày Mỹ chính hãng ở đâu uy tín, giá rẻ?</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
