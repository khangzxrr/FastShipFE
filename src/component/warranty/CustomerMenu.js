import React from 'react'
import { Link } from 'react-router-dom';
import { MdArrowBackIosNew, MdArrowDropDown } from 'react-icons/md'
import { Button, Space, Table, Tag, Dropdown, Skeleton } from 'antd'
export default function CustomerMenu() {
    const handleMenuClick = (e) => {

    };
    const items = [
        {
            label: (
                <Link to='/home'>Trang chủ</Link>
            ),
            key: '1',
        },
        {
            label: (
                <Link to='/order'>Đơn hàng của tôi</Link>
            ),
            key: '2',

        },
        {
            label: (
                <Link to='/add'>Tạo đơn hàng</Link>
            ),
            key: '3',
        },
        {
            label: (
                <Link to='/warrantylist'>Danh sách yêu cầu</Link>
            ),
            key: '4',
        },
    ];
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };
    return (
        <div className='addpd' style={{ padding: "10px 20px", display: 'flex', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', border: 'none' }}>
            <MdArrowBackIosNew style={{ fontSize: 20, marginTop: '6px', color: '#023E73' }} />
            <Space wrap>
                <Dropdown menu={menuProps}>
                    <Button style={{ width: '100px', backgroundColor: '#D8DEFF', color: '#2447FF', fontWeight: 600, borderRadius: '20px', border: 'none', marginLeft: '20px' }} >
                        <Space>
                            Menu<MdArrowDropDown />
                        </Space>
                    </Button>
                </Dropdown>
            </Space>
        </div>
    )
}
