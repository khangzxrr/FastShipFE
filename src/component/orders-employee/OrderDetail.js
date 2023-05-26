import React from 'react'
import UserInfo from './UserInfo';

export default function OrderDetail(props) {
  return (
    <>  
        <UserInfo order={props.order} />
    </>

  )
}
