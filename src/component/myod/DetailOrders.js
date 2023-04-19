import React, { useEffect } from 'react'
import { Input, Button, Steps, Descriptions } from 'antd'
import "../myod/detailod.css"
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getOrderByIdAction } from '../../features/getOrderById/getOrderByIdAction';
import { createPaymentAction } from '../../features/createPayment/createPaymentAction';
import { logout } from '../../features/login/loginSlice';
import Chat from './Chat';
import { Link } from 'react-router-dom';
import { getOrderChatAction } from '../../features/getOrderChat/getOrderChatAction';
export default function DetailOrders() {

    const { search } = useLocation()

    

    const { token } = useSelector(state => state.login)
    const { order } = useSelector(state => state.getOrderById)

    const dispatch = useDispatch()
    const navigate = useNavigate()


    function handleCreatePaymentOnClick () {
        dispatch(createPaymentAction(order.orderId, window.location.href, token))
            .then(response => window.location.href = response.payUrl)
            .catch(err => {
                if (err.response.status === 401){
                    //alert('Bạn không có quyền thanh toán, vui lòng đăng nhập lại')
                    dispatch(logout())
                    navigate('/login')
                }
                
            })
    }

    useEffect(() => {
        const orderId = new URLSearchParams(search).get('orderId')

        console.log(orderId)

        if (orderId == null){
            
            //alert('không có thông tin orderId')
            navigate('/home')
        }

        dispatch(getOrderByIdAction(orderId, token))
            .then(dispatch(getOrderChatAction(orderId)))
            .catch((err) => {
                if (err.response.status === 400){
                    //alert('Lỗi khi xảy ra khi lấy thông tin order')
                    navigate('/home')
                }
            })

    }, [search])




    return (
        <>
            <div className='detail3' style={{ width: '90%', margin: '10px 5%', fontWeight: 500 }}>
                <div style={{ width: '70%' }}>
                    <div className='detail'>
                        <h1>Chi tiết đơn hàng</h1>
                        <div style={{
                            width: '100%', border: '1px solid grey',
                            borderRadius: '20px', marginBottom: '30px', padding: '20px 20px', border: 'none', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
                        }}>
                            <Descriptions title="User Info">
                                <Descriptions.Item label="UserName">{order.customerName}</Descriptions.Item>
                                <Descriptions.Item label="Telephone">{order.contactPhoneNumber}</Descriptions.Item>
                            </Descriptions>
                        </div>
                        <div style={{
                            width: '100%', border: '1px solid grey',
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
                        <h1>Chi tiết sản phẩm</h1>
                        <div className="main">
                            <ul className="cards">
                            {
                                    order.orderDetails && order.orderDetails.map(od =>
                                    (
                                        <li className="cards_item" key={od.orderDetailId}>
                                            <div class="card">
                                                <div class="card_image">
                                                    <img src={od.product.imageUrl} alt={od.product.name} />
                                                    <span class="card_price"><span>$</span>{od.productCost}</span>
                                                </div>
                                                <div class="card_content">
                                                    <h2 class="card_title">{od.product.name}</h2>
                                                    <div class="card_text">
                                                        <p style={{wordBreak:'break-word'}}>Link: <Link>{od.product.url}</Link></p>
                                                        <p>Phụ thu: ${od.additionalCost}</p>
                                                        <p>Phí xử lí: ${od.processCost}</p>
                                                        <p>Số lượng: {od.quantity}</p>
                                                        <p>Phí ship đến kho US: ${od.shipCost}</p>
                                                        <p>Phí trọng lượng 1kg: ${od.product.costPerWeight}</p>
                                                        <p>Bảo hành: {od.product.warrantable ? 'có' : 'không'}</p>
                                                        {od.product.warrantable &&
                                                            (<p>Mô tả bảo hành: {od.product.warrantableDescription}</p>)}
                                                        <p>Đổi trả: {od.product.returnable ? 'có' : 'không'}</p>
                                                        {od.product.returnable &&
                                                            (<p>Mô tả đổi trả: Chấp nhận {od.product.returnDuration} ngày đổi trả</p>)}
                                                                
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='detail2' style={{ fontWeight: 600 }}>
                    <div>
                        <Steps size='large' style={{ fontWeight: 600, padding: '0px 10px', height: '500px' }}
                            current={order.progressStatus}
                            direction='vertical'
                            items={[
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
                    <div style={{ width: '100%',marginTop:'140px' }}>
                        <div style={{ width: '50%', color: 'grey' }}>
                            <h3>TỔNG CỘNG</h3>
                        </div>
                        <div style={{ width: '50%', textAlign: 'right' }}>
                            <h3>{order.price} VNĐ</h3>
                        </div>
                    </div>
                    <div style={{ width: '100%', }}>
                        <div style={{ width: '50%', color: 'grey' }}>
                            <h3>CÒN LẠI</h3>
                        </div>
                        <div style={{ width: '50%', textAlign: 'right' }}>
                            <h3>{order.remainCost} VNĐ</h3>
                        </div>
                    </div>

                    {
                        order.status === "noPayYet" &&
                        (<Button type="primary" style={{ width: '100%', color: 'black', fontWeight: 600 }} onClick={handleCreatePaymentOnClick}>Thanh toán Lần 1 (80%)</Button>)
                    }
                </div>
            </div>
        </>

    )
}
