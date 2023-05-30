import React from 'react'

export default function EmployeeProductWarranty() {
    return (
        <div className='requestproducts' style={{ display: 'flex', padding: '10px', width: '100%' }}>
            <img
                src=''
                style={{
                    height: '150px',
                    width: '40%',
                    marginTop: '20px'
                    , boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
                }}
            />
            <div style={{ padding: '0px 10px', width: '60%' }}>
                <div>
                    <h2>Name: </h2>
                    <p>Category: </p>
                    <p>Quantity:</p>
                    <p>Tỉ giá chuyển đổi tiền tệ từ  sang VNĐ :</p>
                </div>
                <div className='fee'>
                    <p>Giá sản phẩm: </p>
                    <p>Phí ship đến kho ở US: </p>
                    <p>Phí xử lý: </p>
                    <p>Phí phụ thu: </p>
                    <h4>Tổng giá:</h4>
                </div>
            </div>
        </div>
    )
}
