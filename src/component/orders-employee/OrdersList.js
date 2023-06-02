import React, { useEffect } from 'react'
import { Button, Input, Skeleton, Space, Table } from 'antd'
import { useState, useRef } from 'react';
import { SearchOutlined } from '@ant-design/icons/lib/icons';
import { Highlighter } from 'react-highlight-words';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
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
            width: '30%',
            ...getColumnSearchProps('id'),
            sorter: (a, b) => a.id.length - b.id.length,
            sortDirections: ['descend', 'ascend'],
            render: (id, { status }) => (status === 'noPriceQuotation' ? (<Link to={'/employee-request?orderId=' + id}>{id}</Link>): (<Link to={'/employee-orderdetail?orderId=' + id}>{id}</Link>))
        },
        {
            title: 'NGÀY ĐẶT',
            dataIndex: 'orderDate',
            key: 'orderDate',
            ...getColumnSearchProps('orderDate'),
        },
        {
            title: 'TRẠNG THÁI',
            dataIndex: 'status',
            key: 'status',
            ...getColumnSearchProps('status'),
        },
    ];
    return (
        <div>
            {props.loading ? (<Skeleton />) : (<Table columns={columns} dataSource={orders} />)}
            
        </div>
    )
}
