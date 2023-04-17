import React from 'react'
import { Input, Button } from 'antd'
import "../myod/detailod.css"
const { TextArea } = Input;
export default function Chat(){
    return (
        <div className='chatbox' style={{marginBottom:'30px',
            width: '100%',
            borderRadius: '20px', padding: '10px 10px 20px 10px', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
        }}>
            <h4 style={{ fontSize: '16px' }}>Nội dung trao đổi về đơn hàng này</h4>
            <table>
                <tbody>

                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <TextArea style={{ marginBottom: '10px' }} />
            <Button type='primary' style={{ color: 'black' }} >Gửi tin nhắn cho CSKH</Button>
        </div>
    )
}
