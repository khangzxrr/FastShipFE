import React from 'react'
import { Button, Input } from 'antd'
const {TextArea} = Input;
export default function ChatWarranty() {
    return (
        <>
            <div className="messages-chat">
                <div className="message">
                    <div className=''>
                        <p className=''></p>
                        <p className="text"></p>
                    </div>
                </div>
            </div>
            <TextArea style={{ marginBottom: '10px', resize:'none' }}/>
            <Button type='primary' style={{ color: 'black' }}>Gửi tin nhắn cho CSKH</Button>
        </>
    )
}
