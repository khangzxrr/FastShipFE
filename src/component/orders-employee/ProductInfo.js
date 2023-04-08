import React from 'react'
import "../myod/detailod.css"
import ProductList from './ProductList'
export default function ProductInfo(props) {
    return (
        <div style={{ fontWeight: 600}}>
            <h2>Product Info</h2>
            <div style={{width:'100%', float:'left'}}>
                <ProductList order={props.order}/>
            </div>
        </div>
    )
}
