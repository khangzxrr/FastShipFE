import React from 'react'
import { Button, Input } from 'antd'
const { TextArea } = Input;
export default function RequestChat() {
  return (
    <>
      <div className="messages-chat">
        <div className="message">
          <div className="ask">
            <p className='employee'>Employee</p>
            <p className="text">Lorem ipsum dolor sit amet</p>
            <p className='time'>12:14am</p>
          </div>
        </div>
        <div className="message">
          <div className="response">
            <p className='customer'>Customer</p>
            <p className="text">Lorem ipsum dolor sit amet</p>
            <p className='time'>12:14am</p>
          </div>
        </div>
        <div className="message">
          <div className="ask">
            <p className='employee'>Employee</p>
            <p className="text">Lorem ipsum dolor sit amet</p>
            <p className='time'>12:14am</p>
          </div>
        </div>
        <div className="message">
          <div className="response">
            <p className='customer'>Customer</p>
            <p className="text">Lorem ipsum dolor sit amet</p>
            <p className='time'>12:14am</p>
          </div>
        </div>
      </div>
      <TextArea style={{ marginBottom: '10px' }} />
      <Button type='primary' style={{ color: 'black' }}>Gửi tin nhắn cho CSKH</Button>
    </>
  )
}
