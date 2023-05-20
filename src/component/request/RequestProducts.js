import React from 'react'
export default function RequestProducts() {
    return (
        <div className='requestproducts' style={{ display: 'flex', padding: '10px'}}>
            <img
                src="/service2.jpg"
                style={{
                    height: '150px',
                    width: '40%',
                    marginTop:'20px'
                }}
            />
            <div style={{ padding: '0px 10px', width:'60%'}}>
                <h2>Name:</h2>
                <p>Type:</p>
                <p>Quantity:</p>
                <p>Note:</p>
                <p>Fee:</p>
                <h2>Price: $1000</h2>
            </div>
        </div>
    )
}
