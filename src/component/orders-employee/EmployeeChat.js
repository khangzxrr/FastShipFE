import React, { useEffect, useState } from 'react'
import { Input, Button } from 'antd'
import "../myod/detailod.css"
import { useDispatch, useSelector} from 'react-redux';


import { employeeConnectChatAction } from '../../features/employeeGetOrderChat/employeeConnectChatAction';
const { TextArea } = Input;
export default function EmployeeChat(props) {
    const [message, setMessage] = useState("")
    const [connection, setConnection] = useState(null)

    const { chatMessages } = useSelector(state => state.employeeGetOrderChat)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(employeeConnectChatAction(props.order.orderId)).then(connection => {
            setConnection(connection)
        })
    }, [])

    function handleTextAreaOnChange(event) {
        setMessage(event.target.value)
    }

    function sendMessage() {
        try {
            connection.invoke('SendMessage', {
                message
            })
            setMessage('')
        } catch (err) {
            alert('Có lỗi xảy ra, vui lòng tải lại trang và thử lại')
        }
    }

    return (
        <>
        {
        chatMessages.map(chatMessage => {

            const askOrResposne = (chatMessage.isFromEmployee) ? 'response' : 'ask'
            const customerOrEmployee = (chatMessage.isFromEmployee) ? 'Employee' : props.order.customerName
            return (
                <div className="message-chat">
                    <div className={askOrResposne}>
                        <p className='employee'>{customerOrEmployee}</p>
                        <p className="text">{chatMessage.message}</p>
                        <p className='time'>{chatMessage.createAt}</p>
                    </div>
                </div>
            )
        })
        }
            <TextArea style={{ marginBottom: '10px' }} onChange={handleTextAreaOnChange} value={message}/>
            <Button type='primary' style={{ color: 'black' }} onClick={() => sendMessage()}>Gửi tin nhắn cho CSKH</Button>
        </>

    )
}
