import React from 'react'
export default function RequestProducts() {
    return (
        <div className='requestproducts' style={{ display: 'flex', padding: '10px' }}>
            <img
                src="/service2.jpg"
                style={{
                    height: '150px',
                    width: '40%',
                    marginTop: '20px'
                }}
            />
            <div style={{ padding: '0px 10px', width: '60%' }}>
                <div>
                    <h2>Name:</h2>
                    <p>Type:</p>
                    <p>Quantity:</p>
                    <p>Note:</p>

                </div>
                <div className='fee'>
                    <p>Giá sản phẩm:1000</p>
                    <p>Phí xử lý:100</p>
                    <p>Phí phụ thu:100</p>
                    <h4>Total:1200</h4>
                </div>
            </div>
        </div>
    )
}
