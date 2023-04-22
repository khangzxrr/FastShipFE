import React, { useState } from 'react'
import { Input, Button } from 'antd'
import "../myod/detailod.css"
import { useDispatch, useSelector } from 'react-redux';
import { orderSendMessageAction } from '../../features/orderSendMessages/orderSendMessageAction';
import { getOrderChatAction } from '../../features/getOrderChat/getOrderChatAction';
const { TextArea } = Input;
export default function Chat(){

    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const { chatMessages } = useSelector(state => state.getOrderChat)
    const { order } = useSelector(state => state.getOrderById)

    function handleTextChange(event) {
        setMessage(event.target.value)
    }

    function handleSendMessageOnClick() {
        dispatch(orderSendMessageAction(order.orderId, message))
        .then(() => {
            setMessage("")
            dispatch(getOrderChatAction(order.orderId))
        })
    }

    return (
        <div style={{marginBottom:'30px',
            width: '100%',
            borderRadius: '20px', padding: '10px 10px 20px 10px', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
        }}>
            <h4 style={{ fontSize: '16px' }}>Nội dung trao đổi về đơn hàng này</h4>
            <table className='chatbox'>
                <tbody>
                    {
                        chatMessages.map((chatMessage) => (
                            <tr key={chatMessage.id}>
                                <td>{chatMessage.isFromEmployee ? "Nhân viên" : "Khách hàng"}</td>
                                <td>{chatMessage.message}</td>
                            </tr>
                        ))

                    }
                </tbody>
            </table>
            <TextArea style={{ marginBottom: '10px' }} onChange={handleTextChange} value={message}/>
            <Button type='primary' style={{ color: 'black' }} onClick={handleSendMessageOnClick}>Gửi tin nhắn cho CSKH</Button>
        </div>
    )
}
