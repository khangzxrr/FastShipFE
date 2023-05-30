import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
export default function ServerReport() {
  return (
    <div className='serverreport'>
      <img
                    src="/servericon.jpg"
                    style={{ width: '100px', height: '100px', opacity: '0.5', marginTop: '10px' }}
                />
                <h2>Server Report</h2>
                <Link to="/admin-server"><Button type='primary'>CHI TIẾT</Button></Link>
    </div>
  )
}
