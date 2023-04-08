import React from 'react'
import "../orders-employee/productCard.css"
import { Link } from 'react-router-dom'
export default function ProductList(props) {
  return (
    <>
      <div className="main">
        <ul className="cards">
          {
            props.order.orderDetails &&
            props.order.orderDetails.map((od, index) => (
              <li className="cards_item" key={index}>
                <div class="card">
                  <div class="card_image">
                    <img src={od.product.imageUrl} alt={od.product.name} />
                    <span class="card_price"><span>$</span>{od.productCost}</span>
                  </div>
                  <div class="card_content">
                    <h2 class="card_title">{od.product.name}</h2>
                    <div class="card_text">
                      <p>Link: <Link>{od.product.url}</Link></p>
                      <p>Phụ thu: ${od.additionalCost}</p>
                      <p>Phí xử lí: ${od.processCost}</p>
                      <p>Số lượng: {od.quantity}</p>
                      <p>Phí ship đến kho US: ${od.shipCost}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}
