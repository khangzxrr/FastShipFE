import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
export default function 
() {
  return (
    <div className='account'>
        <img
                    src="/users-icon.png"
                    style={{ width: '100px', height: '100px', opacity: '0.5', marginTop: '10px' }}
                />
                <h2>Account Management</h2>
                <Link to="/admin-accounts"><Button type='primary'>CHI TIẾT</Button></Link>
    </div>
  )
}
