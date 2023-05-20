import React from 'react'
import { Button,Input } from 'antd'
const { TextArea } = Input;
export default function RequestChat() {
  return (
    <>
      <table className='chatbox'>
        <tr>
          <td style={{width:'30%'}}>Customer
          </td>
          <td>...
          </td>
        </tr>
      </table>
      <TextArea style={{ marginBottom: '10px' }}/>
      <Button type='primary' style={{ color: 'black' }}>Gửi tin nhắn cho CSKH</Button>
    </>
  )
}
