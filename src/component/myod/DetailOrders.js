import React, { useEffect } from 'react'
import { Button, Steps, Descriptions } from 'antd'
import "../myod/detailod.css"
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getOrderByIdAction } from '../../features/getOrderById/getOrderByIdAction';
import { createPaymentAction } from '../../features/createPayment/createPaymentAction';
import { logout } from '../../features/login/loginSlice';
import Chat from './Chat';
import { Link } from 'react-router-dom';
import { Utils } from '../../features/utils/Utils';

export default function DetailOrders() {
    const { search } = useLocation()
    const { token } = useSelector(state => state.login)
    const { order } = useSelector(state => state.getOrderById)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function handleCreatePaymentOnClick() {
        dispatch(createPaymentAction(order.orderId, window.location.href, token))
            .then(response => window.location.href = response.payUrl)
            .catch(err => {
                if (err.response.status === 401) {
                    //alert('Bạn không có quyền thanh toán, vui lòng đăng nhập lại')
                    dispatch(logout())
                    navigate('/login')
                }
            })
    }
    useEffect(() => {
        const orderId = new URLSearchParams(search).get('orderId')

        if (orderId == null) {
            alert('không có thông tin orderId')
            navigate('/home')
            return
        }
        dispatch(getOrderByIdAction(orderId, token))
            .catch((err) => {
                alert('Lỗi khi xảy ra khi lấy thông tin order')
                navigate('/home')
                return
            })
    }, [search])
    return (
        <>
            {/* <div className='detail3' style={{ width: '90%', margin: '10px 5%', fontWeight: 500 }}>
                <div style={{ width: '70%' }}>
                    <div className='detail'>
                        <h1>Chi tiết đơn hàng</h1>
                        <div style={{
                            width: '100%',
                            borderRadius: '20px', marginBottom: '30px', padding: '20px 20px', border: 'none', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
                        }}>
                            <Descriptions title="User Info">
                                <Descriptions.Item label="UserName">{order.customerName}</Descriptions.Item>
                                <Descriptions.Item label="Telephone">{order.contactPhoneNumber}</Descriptions.Item>
                            </Descriptions>
                        </div>
                        <div style={{
                            width: '100%',
                            borderRadius: '20px', marginBottom: '30px', padding: '20px 20px', border: 'none', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
                        }}>
                            <Descriptions title="Order Info">
                                <Descriptions.Item span={2} label="Order Date">{order.orderDate}</Descriptions.Item>
                                <Descriptions.Item label="Note">{order.customerDescription}</Descriptions.Item>
                                <Descriptions.Item label="Delivery Address">{order.deliveryAddress}</Descriptions.Item>
                                <Descriptions.Item label="Contact Phone Number">{order.contactPhoneNumber}</Descriptions.Item>
                                <Descriptions.Item label="Ship Estimated Days">{order.shipEstimatedDays}</Descriptions.Item>
                            </Descriptions>
                        </div>
                        <Chat />
                    </div>
                </div>
                <div className='detail2' style={{ fontWeight: 600 }}>
                    <div>
                        <Steps size='large' style={{ fontWeight: 600, padding: '0px 10px', height: '500px' }}
                            current={order.progressStatus}
                            direction='vertical'
                            items={[
                                {
                                    title: 'Waiting Price Quotating',
                                },
                                {
                                    title: 'Deposit',
                                },
                                {
                                    title: 'Waiting ordering',
                                },
                                {
                                    title: 'Ordering from seller',
                                },
                                {
                                    title: 'Delivery US to VN',
                                },
                                {
                                    title: 'In VN warehouse',
                                },
                                {
                                    title: 'On delivery',
                                },
                                {
                                    title: 'Completed',
                                },
                            ]}
                        />
                    </div>

                </div>
                <div style={{ display: 'flex', width: '100%', marginBottom:'20px' }}>
                    <div style={{ width: '65%', marginRight:'5%' }}>
                        <h1>Chi tiết sản phẩm</h1>
                        <div className='products'>
                            <ul style={{ listStyleType: 'none' }}>
                                {
                                    order.orderDetails && order.orderDetails.map(od =>
                                    (
                                        <li key={od.orderDetailId} >
                                            <div className='product' style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", width:'100%' }}>
                                                <p ><img src={od.product.imageUrl} alt={od.product.name} style={{ float: 'left' }} />
                                                    <span style={{ fontSize: 20, fontWeight: 500 }}>{od.product.name}</span><br /><a href={od.product.url} target="_blank" rel="noopener noreferrer">Link Product</a>
                                                    <br/>
                                                    Giá sản phẩm:${od.productCost}<br/>
                                                    Phụ thu: ${od.additionalCost}<br />
                                                    Phí xử lí: ${od.processCost}<br />Số lượng: {od.quantity}<br />
                                                    Phí ship đến kho US: ${od.shipCost}<br />
                                                    Phí trọng lượng 1kg: ${od.product.costPerWeight}<br />
                                                    Trọng lượng sau khi cân ở VN: 0 <br/>
                                                    Đơn vị tiền tệ khi đặt: {od.product.productCurrencyExchangeRecord.currencyName} | Tỉ giá: {Utils.formatToVNDCurrency(od.product.productCurrencyExchangeRecord.rate)}<br/>
                                                    <button style={{fontWeight:600, backgroundColor:'yellow', height:'20px', border:'none', borderRadius:'5px'}}>
                                                        TỔNG CỘNG GIÁ SAU KHI CHUYỂN ĐỔI VỀ VNĐ: {Utils.formatToVNDCurrency(Math.ceil(od.totalCost * od.product.productCurrencyExchangeRecord.rate))}
                                                    </button>
                                                    <br/>



                                                    Bảo hành: {od.product.warrantable ? 'có' : 'không'}<br />
                                                    {od.product.warrantable &&
                                                        (<span>Mô tả bảo hành: {od.product.warrantableDescription}</span>)}
                                                    <span>Đổi trả: {od.product.returnable ? 'có' : 'không'}</span><br />
                                                    {od.product.returnable &&
                                                        (<span>Mô tả đổi trả: Chấp nhận {od.product.returnDuration} ngày đổi trả</span>)}
                                                        <Link to={"/warranty"}><Button className='btnBaohanh' type='primary'>YÊU CẦU BẢO HÀNH/ ĐỔI TRẢ</Button></Link>
                                                        
                                                </p>

                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    { order.status !== "noPriceQuotation" && 
                    (
                        <div style={{ width: '30%' }}>
                        <h1>Thanh toán</h1>
                        <div style={{ width: '100%' }}>
                            <div style={{ width: '50%', color: 'grey' }}>
                                <h3>TỔNG CỘNG (VNĐ)</h3>
                            </div>
                            <div style={{ width: '50%', textAlign: 'right' }}>
                                <h3>{Utils.formatToVNDCurrency(order.price)}</h3>
                            </div>
                        </div>
                        <div style={{ width: '100%', }}>
                            <div style={{ width: '50%', color: 'grey' }}>
                                <h3>CÒN LẠI</h3>
                            </div>
                            <div style={{ width: '50%', textAlign: 'right' }}>
                                <h3>{Utils.formatToVNDCurrency(order.remainCost)}</h3>
                            </div>
                        </div>

                        {
                            order.status === "noPayYet" &&
                            (<Button type="primary" style={{ width: '100%', color: 'black', fontWeight: 600 }} onClick={() => handleCreatePaymentOnClick()}>Thanh toán Lần 1 (80%)</Button>)
                        }
                    </div>)
                    }
                    
                </div>
            </div> */}
            <div className='container' style={{ marginTop: '50px' }}>
                <Steps
                    progressDot
                    current={order.progressStatus}
                    items={[
                        {
                            title: 'Waiting Price Quotating',
                        },
                        {
                            title: 'Deposit',
                        },
                        {
                            title: 'Waiting ordering',
                        },
                        {
                            title: 'Ordering from seller',
                        },
                        {
                            title: 'Delivery US to VN',
                        },
                        {
                            title: 'In VN warehouse',
                        },
                        {
                            title: 'On delivery',
                        },
                        {
                            title: 'Completed',
                        },
                    ]}
                />
            </div>
            <div className="container" style={{ display: 'flex', marginTop: '20px', marginBottom: '20px' }}>
                <div style={{ width: '60%', marginRight: '2%', padding: '0px 20px 30px 20px' }}>
                    <h2>CHI TIẾT ĐƠN HÀNG</h2>
                    {
                        order.orderDetails && order.orderDetails.map(od =>
                        (
                            <div key={od.orderDetailId} className='requestproducts' style={{ display: 'flex', padding: '10px' }}>
                                <div style={{ width: '40%' }}>
                                    <img
                                        src={od.product.imageUrl} alt={od.product.name}
                                        style={{
                                            height: '150px',
                                            width: '100%',
                                            marginTop: '20px',
                                            marginBottom: '10px'
                                            , boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
                                        }}
                                    />
                                    <Link to={"/warranty"}><Button className='btnBaohanh' type='primary'>YÊU CẦU BẢO HÀNH/ ĐỔI TRẢ</Button></Link>

                                </div>
                                <div style={{ padding: '0px 10px', width: '60%' }}>
                                    <div>
                                        <h2>{od.product.name}</h2>
                                        <a href={od.product.url}>Link Product</a><br />
                                        <p>Số lượng: {od.quantity}</p>
                                        <p>Khối lượng: {od.product.weight}</p>
                                        <p>Bảo hành: {od.product.warrantable ? 'Có' : 'Không'}</p>
                                        {od.product.warrantable &&
                                            (<span>Mô tả bảo hành: {od.product.warrantableDescription}</span>)}
                                        <p>Đổi trả: {od.product.returnable ? 'Có' : 'Không'}</p>
                                        {od.product.returnable &&
                                            (<p>Mô tả đổi trả: Chấp nhận {od.product.returnDuration} ngày đổi trả</p>)}
                                        <p>Tỷ giá từ {od.product.productCurrencyExchangeRecord.currencyName} sang VN: {Utils.formatToVNDCurrency(od.product.productCurrencyExchangeRecord.rate)}</p>
                                    </div>
                                    <div className='fee'>
                                        <p>Giá sản phẩm: ${od.productCost}</p>
                                        <p>Phụ thu: ${od.additionalCost}</p>
                                        <p>Phí xử lý: ${od.processCost}</p>
                                        <p>Phí ship đến kho US: {od.shipCost}</p>
                                        <p>Phí trọng lượng theo kg: ${od.product.costPerWeight}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {order.status !== "noPriceQuotation" &&
                        (
                            <div style={{ width: '100%' }}>
                                <h1>Thanh toán
                                    {
                                        order.status === "noPayYet" &&
                                        (<Button type="primary" style={{ width: '30%', color: 'black', fontWeight: 600, float: 'right' }} onClick={() => handleCreatePaymentOnClick()}>Thanh toán Lần 1 (80%)</Button>)
                                    }
                                </h1>

                                <div style={{ width: '100%', display: 'flex' }}>
                                    <div style={{ width: '50%', color: 'grey', textAlign: 'left' }}>
                                        <p>TỔNG CỘNG</p>
                                    </div>
                                    <div style={{ width: '50%', textAlign: 'right' }}>
                                        <p>{Utils.formatToVNDCurrency(order.price)}</p>
                                    </div>
                                </div>
                                <div style={{ width: '100%', display: 'flex' }}>
                                    <div style={{ width: '50%', color: 'grey' }}>
                                        <p>CÒN LẠI</p>
                                    </div>
                                    <div style={{ width: '50%', textAlign: 'right' }}>
                                        <p>{Utils.formatToVNDCurrency(order.remainCost)}</p>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
                <div style={{ width: '38%', padding: '0px 10px 10px 10px' }}>
                    <h2>THÔNG TIN CUSTOMER</h2>
                    <Descriptions>
                        <Descriptions.Item label="UserName" span={3}>{order.customerName}</Descriptions.Item>
                        <Descriptions.Item label="Telephone" span={3}>{order.contactPhoneNumber}</Descriptions.Item>
                    </Descriptions>
                    <h2>THÔNG TIN ĐƠN HÀNG</h2>
                    <Descriptions>
                        <Descriptions.Item span={3} label="Order Date">{order.orderDate}</Descriptions.Item>
                        <Descriptions.Item span={3} label="Note">{order.customerDescription}</Descriptions.Item>
                        <Descriptions.Item span={3} label="Delivery Address">{order.deliveryAddress}</Descriptions.Item>
                        <Descriptions.Item span={3} label="Contact Phone Number">{order.contactPhoneNumber}</Descriptions.Item>
                        <Descriptions.Item span={3} label="Ship Estimated Days">{order.shipEstimatedDays}</Descriptions.Item>
                    </Descriptions>
                    <h2>NỘI DUNG TRAO ĐỔI</h2>
                    <Chat />
                </div>
            </div>
        </>
    )
}
