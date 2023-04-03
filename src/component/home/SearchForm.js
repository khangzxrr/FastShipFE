import React from 'react'
import "../home/home.css"
import { Input, Checkbox, Button, Form, message, Space } from "antd";
import { useState } from "react";
import { Link } from 'react-router-dom';

const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};
const { TextArea } = Input;
export default function () {
    return (
        <>
            <div style={{ marginLeft: "50%", position: "absolute", zIndex: "1", paddingTop: '20px' }}>
                <p style={{ fontSize: 30, fontWeight: 700, margin: "10px 0px" }}>TÌM GÌ CŨNG CÓ</p>
                <p style={{ fontSize: 16, fontWeight: 700, margin: "10px 0px" }}>XaBa.vn được điều hành bởi Xanh Logistics</p>
                <div className='button-home' style={{ display: 'flex' }}>
                    <div className='baogia'>
                        <p>Nhận Báo Giá</p>
                    </div>
                    <div className='timkiem'>
                        <p>Tìm Kiếm</p>
                    </div>
                </div>
                <div className='form-home'>
                    <div className='baogia-form'>
                        <Input className='baogiaip' placeholder='LINK HOẶC TÊN SẢN PHẨM' />
                        <Input className='baogiaip' placeholder='SỐ LƯỢNG' />
                        <Input className='baogiaip' placeholder='MÃ GIẢM GIÁ' />
                        <Input className='baogiaip' placeholder='MÔ TẢ SẢN PHẨM' />
                        <Checkbox><span style={{ color: "#FFE715" }}>Khách hàng doanh nghiệp cần xuất VAT</span></Checkbox>
                        <br />
                        <button>Thêm vào giỏ hàng</button>
                        <button>Báo giá nhanh</button>
                    </div>
                    <div className='timkiem-form' style={{ height: "200px" }}>
                        <Link><Input style={{ width: "70%" }} placeholder='LINK HOẶC TÊN SẢN PHẨM' /></Link>
                        <button>Tìm kiếm</button>
                        <br />
                        <br />
                        <span>Laptop</span><span>Đồng hồ</span>
                    </div>

                </div>
            </div>
        </>

    )
}
