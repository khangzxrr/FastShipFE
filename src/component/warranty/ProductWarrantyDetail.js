import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
export default function ProductWarrantyDetail() {
    return (
        <div className='requestproducts' style={{ display: 'flex', padding: '10px' }}>
            <div style={{ width: '40%' }}>
                <img
                    src=''
                    style={{
                        height: '150px',
                        width: '100%',
                        marginTop: '20px',
                        marginBottom: '10px'
                        , boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
                    }}
                />
<Link to={"/warranty"}><Button className='btnBaohanh' type='primary'>YÊU CẦU BẢO HÀNH/ ĐỔI TRẢ</Button></Link>
            </div>
            <div style={{ padding: '0px 10px', width: '60%' }}>
                <div>
                    <h2>Tên sản phẩm</h2>
                    <a href=''>Link Product</a><br />
                    <p>Số lượng: </p>
                    <p>Khối lượng: </p>
                    <p>Bảo hành: </p>
                    <div className='fee'>
                        <p>Giá sản phẩm: </p>
                        <p>Phụ thu: </p>
                        <p>Phí xử lý: </p>
                        <p>Phí ship đến kho US: </p>
                        <p>Phí trọng lượng theo kg: </p>
                    </div>
                </div>
            </div>
        </div>
    )
}