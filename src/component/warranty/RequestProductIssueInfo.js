import React from 'react'
import { Utils } from '../../features/utils/Utils'

export default function RequestProductIssueInfo(props) {
    return (
        <div className='requestproducts' style={{ display: 'flex', padding: '10px', width: '100%' }}>
            <img
                src={Utils.displayUploadImage(props.product.imageUrl)}
                style={{
                    height: '150px',
                    width: '40%',
                    marginTop: '20px'
                    , boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
                }}
            />
            <div style={{ padding: '0px 10px', width: '60%' }}>
                <div>
                    <h2>{props.product.name}</h2>
                    <a href={props.product.url}>Link Product</a><br />
                    <p>Số lượng đã mua: {props.quantity}</p>
                    <p>Bảo hành: {props.product.warrantable ? 'Có' : 'Không'}</p>
                    {props.product.warrantable &&
                        (<span>Mô tả bảo hành: {props.product.warrantableDescription}</span>)}
                    <p>Đổi trả: {props.product.returnable ? 'Có' : 'Không'}</p>
                    {props.product.returnable &&
                        (<p>Mô tả đổi trả: Chấp nhận {props.product.returnDuration} ngày đổi trả</p>)}
                </div>
            </div>
        </div>
    )
}
