import React from 'react'
import "../myod/detailod.css"
import ProductList from './ProductList'
export default function ProductInfo(props) {
    return (
        <>
            <ProductList order={props.order} />
        </>
    )
}
