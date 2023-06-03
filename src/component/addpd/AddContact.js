import React, { useEffect, useState } from 'react'
import { Button, Descriptions, Input, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOrderAction } from '../../features/createOrder/createOrderAction';
const { Title, Paragraph} = Typography;
export default function AddContact() {

    const { products } = useSelector(state => state.requestProduct)
    const { token, phoneNumber, address } = useSelector(state => state.login)

    const [customerDescription, setCustomerDescription] = useState('')
    const [newAddress, setAddress] = useState('')
    const [newPhoneNumber, setPhoneNumber] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        setAddress(address)
        setPhoneNumber(phoneNumber)
    }, [phoneNumber, address])

    function requestCreateOrder() {

        console.log(token)

        if (!token){
            alert('Bạn chưa tạo tài khoản, vui lòng nhập thông tin để tiếp tục')
            navigate('/guest-form')

            return
        }

        dispatch(createOrderAction(products, customerDescription, newAddress, newPhoneNumber))
            .then((response) => {
                console.log(response)

                navigate(`/request?orderId=${response.order.orderId}`)

            })
            .catch((err) => {
                console.log(err)
                if (err.response.status === 401){
                    alert('Lỗi xác thực, vui lòng đăng nhập lại')
                    navigate('/login')
                }
                else
                if (err.response.status === 400) {
                    alert('Có một hoặc nhiều ô vẫn chưa được điền, vui lòng thử lại')
                } else{
                    alert('Có lỗi xảy ra vui lòng thử lại')
                }
            })
    }

    function onChangeDescription(event) {
        setCustomerDescription(event.target.value)
    }

    function onChangeAddress(event) {
        setAddress(event.target.value)
    }

    function onChangePhoneNumber(event) {
        setPhoneNumber(event.target.value)
    }

    return (
        <div style={{ display: 'flex', width: '90%', marginLeft: '5%', marginRight: '5%', marginBottom:'20px'}}>
            <div className='contactform' style={{ borderRadius:'10px', boxShadow:'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' }}>
                <Descriptions title="THÔNG TIN LIÊN HỆ" layout="vertical">
                    <Descriptions.Item label="Ghi chú" span={3}><Input onChange={onChangeDescription}/></Descriptions.Item>
                    <Descriptions.Item label="Địa chỉ giao hàng" span={3}><Input onChange={onChangeAddress} value={newAddress}/></Descriptions.Item>
                    <Descriptions.Item label="Số điện thoại" span={3}><Input onChange={onChangePhoneNumber} value={newPhoneNumber}/></Descriptions.Item>
                </Descriptions>

                <Button onClick={requestCreateOrder} type="primary" style={{ color: 'black', fontWeight: 600, margin: '5px 0px' }} >YÊU CẦU BÁO GIÁ</Button>
            </div>
            <div style={{ width: '68%', backgroundColor:'aliceblue', padding:'0px 10px 0px 10px', borderRadius:'10px', boxShadow:'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}}>
                <Typography>
                    <Title>Điều khoản sử dụng dịch vụ mua hộ</Title>
                    <Paragraph>
                    * Số tiền đặt mua sẽ được hoàn trả nếu khách hàng không nhận được hàng trong trường hợp người bán không chuyển hàng hoặc quá 8 tuần kể từ khi hàng tới kho ở nước ngoài của FastShip. Ngoại trừ có thỏa thuận khác.
                    </Paragraph>
                    <Paragraph>
                    * FastShip.com cam kết mua hàng theo đúng yêu cầu của khách hàng.
                    </Paragraph>
                    <Paragraph>
                    * Thời gian vận chuyển từ 7-15 ngày làm việc kể từ ngày chúng tôi nhận được hàng tại văn phòng ở nước ngoài. Thời gian vận chuyển hàng về có thể bị thay đổi do nhà cung cấp hoặc hải quan duyệt xét. Sau 8 tuần kể từ ngày hàng hóa tới văn phòng XanhLo.com tại các nước (không bao gồm thời gian do các điều kiện bất khả kháng như thiên tai, dịch bệnh, hỏa hoạn,...), nếu quý khách chưa nhận được hàng tại Việt Nam, sẽ hoàn lại số tiền quý khách đã đặt cọc.
                    </Paragraph>
                    <Paragraph>
                    * Trong trường hợp , sau khi FastShip.com đã đặt mua nhưng nhà cung cấp không chuyển hàng hoặc quý khách đổi ý muốn hủy đơn , Fastship.com sẽ tiến hành hoàn số tiền cọc còn lại sau khi đã trừ phí xử lý 5% và phí chuyển tiền qua ngân hàng (nếu có). Số tiền này sẽ được hoàn trả sau khi FastShip.com nhận được tiền từ nhà cung cấp.
                    </Paragraph>
                </Typography>
            </div>
        </div>
    )
}