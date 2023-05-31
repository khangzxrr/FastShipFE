import React from 'react'

export default function ProductReturnDetail(props) {
  return (
    <div className='requestproducts' style={{ display: 'flex', padding: '10px' }}>
      <div style={{ width: '40%' }}>
        <img
          src={props.product.imageUrl}
          style={{
            height: '150px',
            width: '100%',
            marginTop: '20px',
            marginBottom: '10px'
            , boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
          }}
        />
      </div>
      <div style={{ padding: '0px 10px', width: '60%' }}>
        <div>
          <h2>Tên sản phẩm: {props.product.name}</h2>
          <a href={props.product.url}>Link Product</a><br />
          <p>Bảo hành: {props.product.warrantable ? 'Có' : 'Không'}</p>
          {props.product.warrantable && (<p>{props.product.warrantyDescription}</p>)}
          <p>Đổi trả: {props.product.returnable ? 'Có' : 'Không'}</p>
          {props.product.returnable && (<p>{props.product.returnDescription}</p>)}
        </div>
      </div>
    </div>
  )
}
