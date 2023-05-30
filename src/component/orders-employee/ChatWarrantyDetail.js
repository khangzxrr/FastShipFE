import React from 'react'
import { Button, Input } from 'antd'
const {TextArea} = Input;
export default function () {
    return (
        <>
            <div className="messages-chat">

                <div className="message">
                    <div className='ask'>
                        <p className=''></p>
                        <p className='text'></p>
                        <p className='time'></p>
                    </div>
                </div>
            </div>
            <TextArea style={{ marginBottom: '10px', resize: 'none' }} />
            <Button type='primary' style={{ color: 'black' }}>Gửi tin nhắn cho CSKH</Button>
        </>
    )
}
