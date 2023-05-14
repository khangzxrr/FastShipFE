import React, { useEffect, useState } from 'react'
import { Input, Button } from 'antd'
import "../myod/detailod.css"
import { useDispatch, useSelector } from 'react-redux';
import { employeeSendMessageToOrderAction } from '../../features/employeeSendMessageToOrder/employeeSendMessageToOrderAction';


import { employeeConnectChatAction } from '../../features/employeeGetOrderChat/employeeConnectChatAction';
import { employeeGetOrderChatAction } from '../../features/employeeGetOrderChat/employeeGetOrderChatAction';
const { TextArea } = Input;
export default function EmployeeChat(props) {
    const [message, setMessage] = useState("")
    const [connection, setConnection] = useState(null)

    const { token } = useSelector(state => state.login)

    const dispatch = useDispatch()

    useEffect(() => {
        
        const connectionBuilder = employeeConnectChatAction(token)

        connectionBuilder.on('boardcast', () => {
            dispatch(employeeGetOrderChatAction(props.order.orderId))
        })

        connectionBuilder.start()
        .then(() => {
            setConnection(connectionBuilder)
            console.log("connected")

            connectionBuilder.invoke('ConnectToChatRoom', {
                orderId: props.order.orderId
            })
        })


    }, [])

    function handleTextAreaOnChange(event) {
        setMessage(event.target.value)
    }

    function sendMessage(){
        try{
            connection.invoke('SendMessage', {
                message
            })
        }catch(err){
            alert('Có lỗi xảy ra, vui lòng tải lại trang và thử lại')
        }
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
