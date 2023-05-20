import React from 'react'
import { Button, Input } from 'antd'
const { TextArea } = Input;
export default function EmployeeRequestChat() {
  return (
    <>
      <div className="messages-chat">
        <div className="message">
          <div className="ask">
            <p className='employee'>Customer</p>
            <p className="text">Lorem ipsum dolor sit amet</p>
            <p className='time'>12:14am</p>
          </div>
        </div>
        <div className="message">
          <div className="response">
            <p className='customer'>Employee</p>
            <p className="text">Lorem ipsum dolor sit amet</p>
            <p className='time'>12:14am</p>
          </div>
        </div>
        <div className="message">
          <div className="ask">
            <p className='employee'>Customer</p>
            <p className="text">Lorem ipsum dolor sit amet</p>
            <p className='time'>12:14am</p>
          </div>
        </div>
        <div className="message">
          <div className="response">
            <p className='customer'>Employee</p>
            <p className="text">Lorem ipsum dolor sit amet</p>
            <p className='time'>12:14am</p>
          </div>
        </div>        <div className="message">
          <div className="ask">
            <p className='employee'>Customer</p>
            <p className="text">Lorem ipsum dolor sit amet</p>
            <p className='time'>12:14am</p>
          </div>
        </div>
        <div className="message">
          <div className="response">
            <p className='customer'>Employee</p>
            <p className="text">Lorem ipsum dolor sit amet</p>
            <p className='time'>12:14am</p>
          </div>
        </div>
      </div>
      <TextArea style={{ marginBottom: '10px' }} />
      <Button type='primary' style={{ color: 'black' }}>Gửi tin nhắn cho KH</Button>
    </>
  )
}
