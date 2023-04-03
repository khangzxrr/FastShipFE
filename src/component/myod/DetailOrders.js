import React from 'react'
import { Input, Button, Steps } from 'antd'
import { useState } from 'react';
import { Radio } from 'antd'
import { AiFillCreditCard } from 'react-icons/ai'
import { AiFillCalendar, AiFillHome } from 'react-icons/ai'
import { MdOutlineSecurity } from 'react-icons/md'
import { MdOutlineContentCopy, MdPeopleAlt } from 'react-icons/md'
import { Link } from 'react-router-dom';
import "../myod/detailod.css"

export default function DetailOrders() {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <>
            <div className='detail3' style={{ width: '90%', margin: '10px 5%', fontWeight: 500 }}>
                <div style={{ width: '70%' }}>
                    <div style={{width:'100%'}}>
                    <Steps size='small' style={{fontWeight:600, margin:'20px 0px 50px 75px', padding:'0px 100px'}}
                    current={1}
                    items={[
                        {
                            title: 'Đang xử lý',
                        },
                        {
                            title: 'Đã xử lý',
                        },
                        {
                            title: 'Đã chấp nhận',
                        },
                        {
                            title: 'Hoàn tất',
                        },
                    ]}
                />
                    </div>
                    <div className='detail'>
                        <h1>Chờ thanh toán</h1>
                        <h4>1.Thông tin liên lạc</h4>
                        <Input style={{ width: '25%', margin: '0px 2% 0px 3%' }} placeholder='TÊN' /><Input style={{ width: '25%' }} placeholder='HỌ' /><Input style={{ width: '40%', margin: '0px 3% 0px 2%' }} placeholder='SĐT' />
                        <br />
                        <br />
                        <Input style={{ width: '25%', margin: '0px 2% 0px 3%' }} placeholder='VIỆT NAM' /><Input style={{ width: '25%' }} placeholder='THÀNH PHỐ' /><Input style={{ width: '40%', margin: '0px 3% 0px 2%' }} placeholder='ĐỊA CHỈ' />
                        <h4>2.Phương thức thanh toán</h4>
                        <Radio.Group onChange={onChange} value={value} style={{ padding: '10px 20px' }}>
                            <Radio value={1} style={{ display: 'block' }}><span style={{ fontWeight: 700 }}>Bank Card</span>
                                <div style={{ margin: '20px 0px 20px 20px' }}>
                                    <Input suffix={<AiFillCreditCard />} placeholder='Card Number' style={{ width: '50%', marginBottom: '10px' }} />
                                    <br />
                                    <Input suffix={<AiFillCalendar />} placeholder='MM/YY' style={{ width: '28%', marginRight: '10px' }} />
                                    <Input suffix={<MdOutlineSecurity />} placeholder='CVV' style={{ width: '20%' }} />
                                    <p style={{ color: 'grey' }}>Data is protected under the PCI DSS standard. We do not store your data and do not share it with the merchant.</p>
                                    <Button type="primary" style={{ color: 'black', height: '50px', width: '100px' }}>Pay</Button>
                                </div>

                            </Radio>
                            <br />
                            <Radio value={2}><span style={{ fontWeight: 700 }}>Оnline payment system</span>
                                <p style={{ color: 'grey' }}>Convenient method of payment using <br /> YouMoney and Perfect Money payment systems</p>

                            </Radio>
                            <br />
                            <Radio value={3} ><span style={{ fontWeight: 700 }}>Cryptocurrencies</span>
                                <p style={{ color: 'grey' }}>Anonymous payments using Bitcoin, Etherium,<br />Dash, Litecoin and other cryptocurrencies</p>
                            </Radio>
                        </Radio.Group>
                        <h4>3.Thông tin thanh toán</h4>
                        <div style={{ margin: '10px 0px 20px 20px', padding: '0px 20px' }}>
                            <Input suffix={<AiFillCreditCard />} style={{ width: '40%' }} defaultValue="0171119929999" /> <Link style={{ margin: '0px 10px' }}>Copy</Link>
                            <Input suffix={<MdOutlineContentCopy />} style={{ width: '40%' }} defaultValue="Nội dung: 189897" /> <Link style={{ margin: '0px 10px' }}>Copy</Link>
                            <Input suffix={<MdPeopleAlt />} style={{ width: '40%', margin: '10px 55px 0px 0px' }} defaultValue="Nguyễn Phương Đoan" />
                            <Input suffix={<AiFillHome />} style={{ width: '40%' }} defaultValue="Ngân Hàng Á Châu, PGD Lê Quang Định, TP HCM." />
                            <p style={{ fontSize: 13, lineHeight: "18px" }}>Sau khi chuyển tiền trong vòng 1h (60 phút) nếu không nhận được thông báo xác nhận thanh toán hoặc có bất kỳ thắc mắc gì thì vui lòng thông báo cho XanhLo.com qua hotline: 1900 636 707, hoặc email : hotro@xanhlo.com để chúng tôi xác nhận lại với ngân hàng.</p>
                            <h3>LƯU Ý: Phí vận chuyển và cân nặng được cập nhật khi hàng hoá về tới Việt Nam.</h3>
                            <p style={{ fontSize: 13, lineHeight: "18px" }}>
                                * Thời gian vận chuyển từ 7-15 ngày làm việc kể từ ngày công ty chúng tôi nhận được hàng tại văn phòng ở nước ngoài.<br />
                                * Trọng lượng tối thiểu chúng tôi tính cho 1 đơn hàng là 0.5kg.<br />
                                * Giao nhận hàng hóa : Giao hàng miễn phí trong nội thành của Tp Hồ Chí Minh. Ngoại thành và các tỉnh thành còn lại trong cả nước, quý khách thanh toán phí ship cho đơn vị vận chuyển.<br />
                                <h3>Điều khoản sử dụng dịch vụ mua hộ</h3>
                                * Số tiền đặt mua sẽ được hoàn trả nếu khách hàng không nhận được hàng trong trường hợp người bán không chuyển hàng hoặc quá 8 tuần kể từ khi hàng tới kho ở nước ngoài của Xanhlo. Ngoại trừ có thỏa thuận khác.<br />
                                * XanhLo.com cam kết mua hàng theo đúng yêu cầu của khách hàng.<br />
                                * Những mặt hàng vận chuyển trên chỉ áp dụng cho cá nhân, phi mậu dịch. Các yêu cầu nhập khẩu mậu dịch vui lòng liên hệ trực tiếp để XanhLo.com làm hợp đồng.<br />
                                * Thời gian vận chuyển từ 7-15 ngày làm việc kể từ ngày chúng tôi nhận được hàng tại văn phòng ở nước ngoài. Thời gian vận chuyển hàng về có thể bị thay đổi do nhà cung cấp hoặc hải quan duyệt xét. Sau 8 tuần kể từ ngày hàng hóa tới văn phòng XanhLo.com tại các nước (không bao gồm thời gian do các điều kiện bất khả kháng như thiên tai, dịch bệnh, hỏa hoạn,...), nếu quý khách chưa nhận được hàng tại Việt Nam, sẽ hoàn lại số tiền quý khách đã đặt cọc.<br />
                                * Trong trường hợp , sau khi XanhLo.com đã đặt mua nhưng nhà cung cấp không chuyển hàng hoặc quý khách đổi ý muốn hủy đơn , XanhLo.com sẽ tiến hành hoàn số tiền cọc còn lại sau khi đã trừ phí xử lý 5% và phí chuyển tiền qua ngân hàng (nếu có). Số tiền này sẽ được hoàn trả sau khi XanhLo.com nhận được tiền từ nhà cung cấp.<br />
                                * XanhLo.com là nhà cung cấp dịch vụ vận chuyển, không phải dịch vụ bán hàng, các vấn đề liên quan đến chất lượng hàng hóa, kích thước , màu sắc , mẫu mã, số lượng...bảo hành, hoàn trả khách hàng vui lòng liên hệ trực tiếp với người bán, hoặc XanhLo.com sẽ hỗ trợ liên hệ và làm các thủ tục khiếu nại . Các chi phí hoàn trả (nếu có) khách hàng sẽ thanh toán.<br />
                                * Kể từ khi thông báo hàng về, trong vòng 30 ngày làm việc khách hàng không nhận hàng và thanh toán, XanhLo.com có quyền thanh lý toàn bộ hàng hóa và không hoàn lại tiền đặt cọc.<br />
                                ** Các điều khoản trên có hiệu lực khi khách hàng đặt cọc mua hàng.</p>
                        </div>

                    </div>
                </div>
                <div className='detail2' style={{ fontWeight: 600 }}>
                    <h2>CHI TIẾT</h2>
                    <p>Kiểm tra lại các thông tin bên dưới</p>
                    <div style={{ marginBottom: '10px', width: '100%', display: 'flex', padding: '10px 20px', lineHeight: "5px", backgroundColor: '#C3F10E', borderRadius: '20px', fontWeight: 600 }}>
                        <div style={{ width: '80%' }}>
                            <p>iPad Pro 2020</p>
                            <p>đen</p>
                        </div>
                        <p>$1,200</p>
                    </div>
                    <div style={{ marginBottom: '10px', width: '100%', display: 'flex', padding: '10px 20px', lineHeight: "5px", backgroundColor: '#C3F10E', borderRadius: '20px', fontWeight: 600 }}>
                        <div style={{ width: '80%' }}>
                            <p>iPad Pro 2020</p>
                            <p>đen</p>
                        </div>
                        <p>$1,200</p>
                    </div>
                    <div style={{ width: '100%', marginTop: '10px', borderBottom: '1px dashed grey' }}>
                        <div style={{ width: '50%', color: 'grey' }}>
                            <p>Phí nội địa Mỹ</p>
                            <p>Phí xử lý</p>
                            <p>Phụ thu</p>
                            <p>Đơn giá PVC</p>
                        </div>
                        <div style={{ width: '50%', textAlign: 'right' }}>
                            <p>$12</p>
                            <p>$1.2</p>
                            <p>$1.5</p>
                            <p>$10/1kg</p>
                        </div>
                    </div>
                    <div style={{ width: '100%', }}>
                        <div style={{ width: '50%', color: 'grey' }}>
                            <h3>TỔNG CỘNG</h3>
                        </div>
                        <div style={{ width: '50%', textAlign: 'right' }}>
                            <h3>$1,3000</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
