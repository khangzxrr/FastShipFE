import React from 'react'
import { Radio } from 'antd'
import { CiLocationOn } from 'react-icons/ci'
import { BsBarChartSteps, BsInfo, BiInfoCircle, BsInfoCircle } from 'react-icons/bs'
export default function ProductsList() {
    return (
        <div style={{
            width: '100%', border: 'none', marginBottom: '10px',
            padding: '5px 20px', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
        }}>
            <p style={{ fontSize: 15, fontWeight: 600 }}><BsInfoCircle />Thông tin sản phẩm</p>
            <p>
                <img
                    src="/service2.jpg"
                    style={{
                        height: "60px",
                        width: 100,
                        float: 'left',
                        marginRight: '10px'
                    }}
                />
                Name<br />Description<br />Quantity<br />Price<br />
            </p>

        </div>
    )
}
