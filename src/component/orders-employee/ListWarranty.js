import React from 'react'
import {  Table} from 'antd'
export default function ListWarranty() {
  return (
    <div>
      <div style={{
        width: '90%', margin: '0px 5% 50px 5%',
        borderRadius: '20px', padding: '10px 20px', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', border: 'none'
      }}>
        <h2>Danh sách yêu cầu</h2>
        <Table style={{border:'none'}}/>
      </div>
    </div>
  )
}
