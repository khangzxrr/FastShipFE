import React, { useEffect } from 'react'
import { Input, Button, Steps } from 'antd'
import "../myod/detailod.css"
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getOrderByIdAction } from '../../features/getOrderById/getOrderByIdAction';
import { createPaymentAction } from '../../features/createPayment/createPaymentAction';
import { logout } from '../../features/login/loginSlice';

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
                    alert('Bạn không có quyền thanh toán, vui lòng đăng nhập lại')
                    dispatch(logout())
                    navigate('/login')
                }
                
            })
    }

    useEffect(() => {
        const orderId = new URLSearchParams(search).get('orderId')

        console.log(orderId)

        if (orderId == null){
            
            alert('không có thông tin orderId')
            navigate('/home')
        }

        dispatch(getOrderByIdAction(orderId, token))
            .catch((err) => {
                if (err.response.status === 400){
                    alert('Lỗi khi xảy ra khi lấy thông tin order')
                    navigate('/home')
                }
            })

    }, [search])




    return (
        <>
            <div className='detail3' style={{ width: '90%', margin: '10px 5%', fontWeight: 500 }}>
                <div style={{ width: '70%' }}>
                    <div style={{ width: '100%' }}>
                        <Steps size='small' style={{ fontWeight: 600, margin: '20px 0px 50px 75px', padding: '0px 100px' }}
                            current={order.progressStatus}
                            items={[
                                {
                                    title: 'Thanh toán lần 1',
                                },
                                {
                                    title: 'Chờ nhân viên order hàng',
                                },
                                {
                                    title: 'Đang order hàng từ người bán',
                                },
                                {
                                    title: 'đang giao từ Mỹ về Việt Nam',
                                },
                                {
                                    title: 'Đang ở kho Việt Nam',
                                },
                                {
                                    title: 'Đang giao đến người dùng',
                                },
                                {
                                    title: 'Hoàn tất',
                                },
                            ]}
                        />
                    </div>
                    <div className='detail'>
                        <h1>Chờ thanh toán</h1>
                        <table style={{ display: 'flex', width: '100%', marginBottom: '50px' }}>
                            <tbody>
                                <tr>
                                    <td>orderDate</td>
                                    <td>customer description</td>
                                    <td>deliveryAddress</td>
                                    <td>contactPhoneNumber</td>
                                    <td>shipEstimatedDays</td>
                                </tr>
                                <tr>
                                    <td>{order.orderDate}</td>
                                    <td>{order.customerDescription}</td>
                                    <td>{order.deliveryAddress}</td>
                                    <td>{order.contactPhoneNumber}</td>
                                    <td>{order.shipEstimatedDays}</td>
                                </tr>
                            </tbody>
                        </table>
                        <br></br>
                        <h1>Order details</h1>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Id</td>
                                    <td>Name</td>
                                    <td>Price</td>
                                    <td>Quantity</td>
                                    <td>US shipcost</td>
                                </tr>
                                {
                                    order.orderDetails && order.orderDetails.map(od =>
                                    (<tr>
                                        <td>{od.orderDetailId}</td>
                                        <td>{od.product.name}</td>
                                        <td>{od.productCost}</td>
                                        <td>{od.quantity}</td>
                                        <td>{od.shipCost}</td>
                                    </tr>))
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
                <div className='detail2' style={{ fontWeight: 600 }}>
                    <div style={{ width: '100%', }}>
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
