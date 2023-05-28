import React, { useEffect, useState } from 'react'
import { Input, Button } from 'antd'
import "../myod/detailod.css"
import { useDispatch, useSelector } from 'react-redux';
import "../request/request.css"
const { TextArea } = Input;

export default function Chat(props) {

    
    const [message, setMessage] = useState('')

    const { chatMessages } = useSelector(state => state.getOrderChat)


    function handleTextChange(event) {
        setMessage(event.target.value)
    }

    function handleSendMessageOnClick() {
        try {
            props.connection.invoke('SendMessage', {
                message
            })
            setMessage('')
        } catch (err) {
            
        }
    }

    return (
        <>
            <div className="messages-chat">
                {
                    chatMessages.map(chatMessage => {
                                        
                        const who = chatMessage.isFromEmployee ? 'employee' : 'customer'
                        const askOrResponse = chatMessage.isFromEmployee ? 'ask' : 'response'

                        return (
                            <div className="message">
                                <div className={askOrResponse}>
                                <p className={who}>{who}</p>
                                <p className="text">{chatMessage.message}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
            
            <TextArea style={{ marginBottom: '10px' }} onChange={handleTextChange} value={message}/>
            <Button type='primary' style={{ color: 'black' }} onClick={() => handleSendMessageOnClick()}>Gửi tin nhắn cho CSKH</Button>
        </>
    )
}
