import React from 'react'
import AddDeleteTableRows from './AddDeleteTableRows';
import "../addpd/addpd.css"
export default function AddProducts1() {
  return (
    <div style={{width:'90%', margin:'10px 20px 10px 5%',
    borderRadius:'20px', padding:'10px 20px',boxShadow:' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', border:'none'}}>
        <h2>GIỎ HÀNG</h2>
        <AddDeleteTableRows/>
    </div>
  )
}
