import React, { useState } from 'react'
import { Input, Button } from 'antd'
import "../myod/detailod.css"
import { useDispatch, useSelector } from 'react-redux';
import { employeeSendMessageToOrderAction } from '../../features/employeeSendMessageToOrder/employeeSendMessageToOrderAction';
const { TextArea } = Input;
export default function EmployeeChat(props) {
    const [message, setMessage] = useState("")

    const { token } = useSelector(state => state.login)

    const dispatch = useDispatch()

    function handleTextAreaOnChange(event) {
        setMessage(event.target.value)
    }

    function sendMessage(){
        dispatch(employeeSendMessageToOrderAction(props.order.orderId, message, token))
        .then(() => {
            setMessage("")
        })
        .catch(err => {
            alert(err)
        })
    }

    return (
        <div className='chatbox' style={{
            width: '100%',
            borderRadius: '20px', padding: '10px 10px 20px 10px', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
        }}>
            <h4 style={{ fontSize: '16px' }}>Nội dung trao đổi về đơn hàng này</h4>
            <table style={{width:'100%', borderCollapse:'collapse', marginBottom:'10px'}}>
                <tbody>
                    {
                        props.chatMessages.map((chatMessage) => (
                            <tr>
                                <td>{chatMessage.isFromEmployee ? "Nhân viên" : "Khách hàng"}</td>
                                <td>{chatMessage.message}</td>
                            </tr>
                        ))

                    }
                </tbody>
            </table>
            <TextArea style={{ marginBottom: '10px' }} onChange={handleTextAreaOnChange}/>
            <Button type='primary' style={{ color: 'black' }} onClick={sendMessage}>Gửi tin nhắn cho KH</Button>
        </div>
    )
}
