import { Table } from 'antd'
import React from 'react'
import { Utils } from '../../features/utils/Utils';

export default function ShipperOrder(props) {
    const columns = [
        {
          title: 'Order ID',
          dataIndex: 'orderId',
          key: 'orderId',
        },
        {
          title: 'Ngày',
          dataIndex: 'orderDate',
          key: 'orderDate',
        },
        {
          title: 'Trạng thái',
          dataIndex: 'orderStatus',
          key: 'orderStatus',
        },
        {
          title: 'Tên người dùng',
          dataIndex: 'customerName',
          key: 'customerName',
        },
        {
          title: 'Mô tả của người dùng',
          dataIndex: 'customerDescription',
          key: 'customerDescription',
        },
        {
          title: 'Địa chỉ giao hàng',
          dataIndex: 'deliveryAddress',
          key: 'deliveryAddress',
        },
        {
          title: 'Địa chỉ giao hàng',
          dataIndex: 'deliveryAddress',
          key: 'deliveryAddress',
        },
        {
          title: 'SĐT Liên lạc',
          dataIndex: 'contactPhoneNumber',
          key: 'contactPhoneNumber',
        },
        {
          title: 'Tổng tiền',
          dataIndex: 'price',
          key: 'price',
          render: (price) => <a>{Utils.formatToVNDCurrency(price)}</a>,
        },
        {
          title: 'Còn lại',
          dataIndex: 'remainCost',
          key: 'remainCost',
          render: (price) => <a>{Utils.formatToVNDCurrency(price)}</a>,
        },
      ];

    return (
        <>
            <h2>DANH SÁCH ĐƠN HÀNG ĐÃ NHẬN</h2>
            <Table columns={columns} rowKey={'orderId'} dataSource={props.orders}/>
        </>
    )
}
