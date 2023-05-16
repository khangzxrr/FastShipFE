import React from 'react'
import { MdArrowBackIosNew, MdArrowDropDown } from 'react-icons/md'
import { Button, Space, Dropdown } from 'antd'
import { Link } from 'react-router-dom';
const handleMenuClick = (e) => {};
export default function () {
    const items = [
        {
            label: (
                <Link to='/manager-home'>Trang chủ</Link>
            ),
            key: '1',
        },
    ];
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };
    return (
        <div style={{ marginTop: '30px', padding: "10px 20px", boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', border: 'none', borderRadius:'20px' }}>
            <MdArrowBackIosNew style={{ fontSize: 10, marginTop: '6px', color: '#023E73' }} />
            <Space wrap>
                <Dropdown menu={menuProps}>
                    <Button style={{ width: '100px', backgroundColor: '#D8DEFF', color: '#2447FF', fontWeight: 600, borderRadius: '20px', border: 'none', marginLeft: '20px' }} >
                        <Space>
                            Menu<MdArrowDropDown />
                        </Space>
                    </Button>
                </Dropdown>
                <Link to='/manager-currency'><Button style={{color:'black'}} type='text'>Cập nhật tỷ giá</Button></Link>

                <Link to='/shippermanagement'><Button style={{color:'black'}} type='text'>Shipper Management</Button></Link>

                <Link to='/customermanagement'><Button style={{color:'black'}} type='text'>Customer Management</Button></Link>
            </Space>
        </div>
    )
}
