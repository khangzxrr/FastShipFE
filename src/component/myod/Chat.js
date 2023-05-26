import React, { useEffect, useState } from 'react'
import { Input, Button } from 'antd'
import "../myod/detailod.css"
import { useDispatch, useSelector } from 'react-redux';

import { getOrderChatAction } from '../../features/getOrderChat/getOrderChatAction';
import { getOrderChatHubAction } from '../../features/getOrderChat/getOrderChatHubAction';

const { TextArea } = Input;
export default function Chat() {

    const [connection, setConnection] = useState(null)
    const [message, setMessage] = useState('')

    const { token } = useSelector(state => state.login)

    const dispatch = useDispatch()

    const { chatMessages } = useSelector(state => state.getOrderChat)
    const { order } = useSelector(state => state.getOrderById)


    useEffect(() => {

        dispatch(getOrderChatAction(order.orderId))

        const connectionBuilder = getOrderChatHubAction(token)

        connectionBuilder.on('boardcast', () => {
            dispatch(getOrderChatAction(order.orderId))
        })

        connectionBuilder.start()
            .then(() => {

                setConnection(connectionBuilder)

                connectionBuilder.invoke('ConnectToChatRoom', {
                    orderId: order.orderId
                })
            })
    }, [order])

    function handleTextChange(event) {
        setMessage(event.target.value)
    }

    function handleSendMessageOnClick() {
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
        // <div style={{
        //     width: '100%',
        //     borderRadius: '20px', padding: '10px 10px 20px 10px', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
        // }}>
        //     <h4 style={{ fontSize: '16px' }}>Nội dung trao đổi về đơn hàng này</h4>
        //     <table className='chatbox'>
        //         <tbody>
        //             {
        //                 chatMessages.map((chatMessage) => (
        //                     <tr key={chatMessage.id}>
        //                         <td>{chatMessage.isFromEmployee ? "Nhân viên" : "Khách hàng"}</td>
        //                         <td>{chatMessage.message}</td>
        //                     </tr>
        //                 ))

        //             }
        //         </tbody>
        //     </table>
        //     <TextArea style={{ marginBottom: '10px' }} onChange={handleTextChange} value={message}/>
        //     <Button type='primary' style={{ color: 'black' }} onClick={handleSendMessageOnClick}>Gửi tin nhắn cho CSKH</Button>
        // </div>
        <>
            <div className="messages-chat">
                <div className="message">
                    <div className=''>
                        <p className=''></p>
                        <p className="text"></p>
                    </div>
                </div>
            </div>
            <TextArea style={{ marginBottom: '10px' }} />
            <Button type='primary' style={{ color: 'black' }} >Gửi tin nhắn cho CSKH</Button>
        </>
    )
}
