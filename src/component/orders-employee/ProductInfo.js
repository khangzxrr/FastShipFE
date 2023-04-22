import React from 'react'
import "../myod/detailod.css"
import ProductList from './ProductList'
export default function ProductInfo(props) {
    return (
        <>
            <h2>Product Info</h2>
            <ProductList order={props.order} />
        </>
    )
}
