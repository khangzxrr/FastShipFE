import React, { useState } from 'react'
import { Button, Input } from 'antd'
const { TextArea } = Input;
export default function EmployeeRequestChat(props) {
  
  const [message, setMessage] = useState('')

  function onMessageChange(event) {
    setMessage(event.target.value)
  }

  function onClickSend() {
    props.handleOnSendMessage(message)
    setMessage('')
  }

  return (
    <>
      <div className="messages-chat">
        {
          props.chatMessages.map(chatMessage => {

            const askOrResposne = (chatMessage.isFromEmployee) ? 'response' : 'ask'
            const customerOrEmployee = (chatMessage.isFromEmployee) ? 'Employee' : props.order.customerName
            return (
            <div className="message">
              <div className={askOrResposne}>
                <p className='employee'>{customerOrEmployee}</p>
                <p className="text">{chatMessage.message}</p>
                <p className='time'>{chatMessage.createAt}</p>
              </div>
            </div>
          )
          })
        }

        
      </div>
      <TextArea style={{ marginBottom: '10px' }} onChange={onMessageChange} />
      <Button type='primary' style={{ color: 'black' }} onClick={() => onClickSend()}> Gửi tin nhắn cho KH</Button>
    </>
  )
}
