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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div className='content2' style={{ display: "flex" }}>
                    <div style={{ marginRight: "10px" }}>
                        <span><BsFillAirplaneFill style={{ color: "#FFE715" }} /></span>
                        <h2>HÀNG KHÔNG</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </div>
                    <div>
                        <span><IoMdBoat style={{ color: "#FFE715" }} /></span>
                        <h2>HÀNG HẢI</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                        <span><MdOutlineSecurity style={{ color: "#FFE715" }} /></span>
                        <h2>An Toàn Vận Chuyển</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </div>
                </div>
                <div className='content3' style={{
                    display: "flex", padding: "20px", backgroundColor: "black", borderRadius: "27px",
                    marginTop: "30px", marginBottom: "50px"
                }}>
                    <BsFillChatHeartFill style={{ color: "#FFE715", fontSize: "40px", marginTop: "10px", marginLeft: "50px" }} />
                    <div style={{ width: "80%", marginLeft: "60px" }}>
                        <h2 style={{ color: "#FFE715", }}>Khách hàng nói gì</h2>
                        <p style={{ color: "grey" }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics</p>
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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
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
                        <p style={{ color: "#C9C9C9" }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</p>
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
                        <div>
                            <img src={('service6.jpg')} style={{ width: "615px", }} />
                            <h2>TIN TỨC HÔM NAY</h2>
                            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </h4>
                        </div>
                        <div className='content8'>
                            <div style={{ display: "flex" }}>
                                <img src={('service7.jpg')} style={{ width: "180px", height: "130px" }} />
                                <div>
                                    <h2>TIN TỨC HÔM NAY</h2>
                                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <img src={('service7.jpg')} style={{ width: "180px", height: "130px" }} />
                                <div>
                                    <h2>TIN TỨC HÔM NAY</h2>
                                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <img src={('service7.jpg')} style={{ width: "180px", height: "130px" }} />
                                <div>
                                    <h2>TIN TỨC HÔM NAY</h2>
                                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <Divider><Link>Show more</Link></Divider>
                </div>
                <div>
                    <div>
                        <h2><span style={{ color: "#FFE715" }}>CÂU HỎI</span> THƯỜNG GẶP</h2>
                    </div>
                    <div style={{ display: "flex", width:"100%", border:"1px solid black", borderRadius:"20px", padding:"5px 10px", marginBottom:"20px"}}>
                        <img src={('service10.png')} style={{ width: "50px", height: "50px", margin:"20px 50px 20px 50px"}} />
                        <div style={{marginTop:"10px"}}>
                            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </h4>
                        </div>
                    </div>
                    <div style={{ display: "flex", width:"100%", border:"1px solid black", borderRadius:"20px", padding:"5px 10px", marginBottom:"20px"}}>
                        <img src={('service10.png')} style={{ width: "50px", height: "50px", margin:"20px 50px 20px 50px"}} />
                        <div style={{marginTop:"10px"}}>
                            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </h4>
                        </div>
                    </div>
                    <div style={{ display: "flex", width:"100%", border:"1px solid black", borderRadius:"20px", padding:"5px 10px", marginBottom:"50px"}}>
                        <img src={('service10.png')} style={{ width: "50px", height: "50px", margin:"20px 50px 20px 50px"}} />
                        <div style={{marginTop:"10px"}}>
                            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
