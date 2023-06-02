import React, { useEffect } from 'react'
import { Button, Input, Skeleton, Space, Table } from 'antd'
import { useState, useRef } from 'react';
import { SearchOutlined } from '@ant-design/icons/lib/icons';
import { Highlighter } from 'react-highlight-words';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';
import { Utils } from '../../features/utils/Utils';

export default function (props) {
    
    

    const { orders } = useSelector(state => state.employeeGetAllOrders)

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const columns = [
        {
            title: 'MÃ ĐƠN HÀNG',
            dataIndex: 'orderId',
            key: 'orderId',
            width: '15%',
            ...getColumnSearchProps('id'),
            render: (id, { status }) => (status === 'noPriceQuotation' ? (<Link to={'/employee-request?orderId=' + id}>{id}</Link>): (<Link to={'/employee-orderdetail?orderId=' + id}>{id}</Link>))
        },
        {
            title: 'NGÀY ĐẶT',
            dataIndex: 'orderDate',
            key: 'orderDate',
            ...getColumnSearchProps('orderDate'),
            sorter: (a,b) => a.orderDate - b.orderDate,
            defaultSortOrder: 'descend',
            render: (orderDate) => <Moment date={orderDate} format='DD/MM/YYYY HH:mm'/>
        },
        {
            title: 'TRẠNG THÁI',
            dataIndex: 'status',
            key: 'status',
            ...getColumnSearchProps('status'),
            render: (status) => <p>{Utils.translateOrderStatus(status)}</p>
        },
    ];
    return (
        <div>
            {props.loading ? (<Skeleton />) : (<Table columns={columns} dataSource={orders} />)}
            
        </div>
    )
}
