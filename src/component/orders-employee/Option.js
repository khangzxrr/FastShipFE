import React from 'react'
import { Button, Dropdown, Space } from 'antd'
import {CiMenuKebab} from 'react-icons/ci'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { employeeEditOrderDetailAction } from '../../features/employeeEditOrderDetail/employeeEditOrderDetailAction';
export default function Option(props) {

    const dispatch = useDispatch()

    function disableOrderDetail() {
        dispatch(employeeEditOrderDetailAction(props.orderId, props.orderDetailId, 'disable', 'true'))
    }

    const items = [
        {
            label: <a onClick={() => disableOrderDetail()}>Vô hiệu sản phẩm</a>,
            key: '3'
        }
    ];
  return (
    <Dropdown
            menu={{
                items,
            }}
            trigger={['click']}
            placement='bottomRight'
        >
            <a style={{color:'black'}} onClick={(e) => e.preventDefault()}>
                <Space>
                    <CiMenuKebab/>
                </Space>
            </a>
        </Dropdown>
  )
}
