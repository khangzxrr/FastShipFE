import React from 'react'
import UserInfo from './UserInfo';

export default function OrderDetail(props) {
  return (
    <>  
      <div style={{
        width: '100%', border: '1px solid grey',
        borderRadius: '20px', marginBottom: '30px', padding: '20px 20px', border: 'none', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
      }}>
        <UserInfo order={props.order} />
      </div>
    </>

  )
}
