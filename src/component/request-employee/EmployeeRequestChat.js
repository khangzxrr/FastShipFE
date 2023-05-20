import React from 'react'
import { Button,Input } from 'antd'
const { TextArea } = Input;
export default function EmployeeRequestChat() {
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
      <Button type='primary' style={{ color: 'black' }}>Gửi tin nhắn cho KH</Button>
    </>
  )
}
