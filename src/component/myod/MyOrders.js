import React from 'react'
import createRoot from 'react-dom'
import { MdArrowBackIosNew, MdArrowDropDown } from 'react-icons/md'
import { Button, Space, Table, Tag, Dropdown } from 'antd'
import { Link } from 'react-router-dom';
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

];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const columns = [
  {
    title: 'MÃ ĐƠN HÀNG',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'NGÀY ĐẶT HÀNG',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'TÌNH TRẠNG ĐƠN HÀNG',
    key: 'status',
    dataIndex: 'status',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'fail') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: '',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Chi tiết</a>
      </Space>
    ),
  },
];
const data = [
  {
    id: (<Link to='/detailod'>141297</Link>),
    time: '14-12-2020',
    tags: ['done'],
  },
  {
    id: '123456',
    time: '14-12-2020',
    tags: ['fail'],
  },
  {
    id: '123456',
    time: '14-12-2020',
    tags: ['done'],
  },
];
export default function MyOrders() {
  return (
    <div>
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
      <div style={{
        width: '90%', margin: '0px 5% 50px 5%', border: '1px solid grey',
        borderRadius: '20px', padding: '10px 20px', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', border: 'none'
      }}>
        <h2>ĐƠN HÀNG CỦA TÔI</h2>
        <p>Bạn hiện đang có <Link to={'/detailod'}>2</Link> đơn hàng</p>
        <Table columns={columns} dataSource={data}/>
      </div>
    </div>
  )
}
