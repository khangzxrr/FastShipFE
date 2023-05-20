import React, { useState } from 'react'
import { Button, Input } from 'antd'
const { TextArea } = Input;
export default function RequestChat(props) {

  const [message, setMessage] = useState('')

  function onChangeText(event) {
    setMessage(event.target.value)
  }

  function onSendMessage() {
    props.handleOnSendMessage(message)
    setMessage('')
  }


  return (
    <>
    <div className="messages-chat">
      {props.chatMessages.map((chatMessage, index) => {

        const who = chatMessage.isFromEmployee ? 'employee' : 'customer'
        const askOrResponse = chatMessage.isFromEmployee ? 'ask' : 'response'
        return (
          <div className="message">
            <div className={askOrResponse}>
              <p className={who}>{who}</p>
              <p className="text">{chatMessage.message}</p>
              {/* <p className='time'>{chatMessage.createdAt}</p> */}
            </div>
          </div>
        )
      })}
      </div>
      <TextArea style={{ marginBottom: '10px' }} onChange={onChangeText} value={message} />
      <Button type='primary' style={{ color: 'black' }} onClick={onSendMessage}>Gửi tin nhắn cho CSKH</Button>
    </>
  )
}
