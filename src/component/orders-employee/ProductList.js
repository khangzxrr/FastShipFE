import React from 'react'
import "../orders-employee/productCard.css"
import { Link } from 'react-router-dom'
export default function ProductList(props) {
  return (
    <>
      <div  className='products'>
        <ul style={{ listStyleType: 'none' }}>
          {
            props.order.orderDetails &&
            props.order.orderDetails.map((od, index) => (
              <li key={index}>
                <div className='product' style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
                  <p ><img src={od.product.imageUrl} alt={od.product.name} style={{ float: 'left' }} />
                    <span style={{ fontSize: 20, fontWeight: 500 }}>{od.product.name}</span><br /><a href={od.product.url}>Link Product</a>
                    <br />Phụ thu: ${od.additionalCost}<br />Phí xử lí: ${od.processCost}<br />Số lượng: {od.quantity}
                    <br />Phí ship đến kho US: ${od.shipCost}<br />Phí trọng lượng 1kg: ${od.product.costPerWeight}<br />
                    Bảo hành: {od.product.warrantable ? 'có' : 'không'}<br />
                    {od.product.warrantable &&
                      (<span>Mô tả bảo hành: {od.product.warrantableDescription}</span>)}
                    <span>Đổi trả: {od.product.returnable ? 'có' : 'không'}</span><br />
                    {od.product.returnable &&
                      (<span>Mô tả đổi trả: Chấp nhận {od.product.returnDuration} ngày đổi trả</span>)}
                  </p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}
