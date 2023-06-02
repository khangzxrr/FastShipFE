import React from 'react'
import { API_BASE_URL } from '../../features/axiosProfile'
import { Utils } from '../../features/utils/Utils'
export default function RequestProducts(props) {

    console.log(props.orderDetail)
    
    return (
        <div className='requestproducts' style={{ display: 'flex', padding: '10px' }}>
            <img
                src={Utils.displayUploadImage(props.orderDetail.product.imageUrl)}
                style={{
                    height: '150px',
                    width: '40%',
                    marginTop: '20px'
                    , boxShadow:'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
                }}
            />
            <div style={{ padding: '0px 10px', width: '60%' }}>
                <div>
                    <h2>{props.orderDetail.product.name}</h2>
                    <a href={props.orderDetail.product.url}>Link sản phẩm</a>
                    <p>Loại: {props.orderDetail.product.category}</p>
                    <p>Số lượng: {props.orderDetail.quantity}</p>
                </div>
                <div className='fee'>
                    <p>Giá sản phẩm: {props.orderDetail.product.price}$</p>
                    <p>Phí ship đến kho ở US: {props.orderDetail.shipCost}$</p>
                    <p>Phí xử lý: {props.orderDetail.processCost === 0 ? 'Đang xử lí' : props.orderDetail.processCost + ' $'}</p>
                    <p>Phí phụ thu: {props.orderDetail.additionalCost === 0 ? 'Đang xử lí' : props.orderDetail.processCost + ' $'}</p>
                    <p>Tỉ giá chuyển đổi tiền tệ từ {props.orderDetail.product.productCurrencyExchangeRecord.currencyName} sang VNĐ : {Utils.formatToVNDCurrency(props.orderDetail.product.productCurrencyExchangeRecord.rate)} </p>
                    {
                        props.orderDetail.totalCost === 0 ? <h4>Tổng giá: Chưa có giá chính xác</h4> : <h4>Tổng giá {props.orderDetail.totalCost}$</h4>
                    }
                    
                </div>
            </div>
        </div>
    )
}
