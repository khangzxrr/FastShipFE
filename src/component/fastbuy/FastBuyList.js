import React from 'react'
import { Card, List, Button, Image, Modal } from 'antd'
export default function FastBuyList(props) {
  
  function onPageChange(pageIndex) {
    props.fetchResellProduct(pageIndex - 1)
  }
  const info = () => {
    Modal.info({
      title: 'Vui lòng liên hệ qua hotline hoặc đến trực tiếp cửa hàng để mua hàng.',
      onOk() {},
    });
  };
  return (
    <>
      <List
        pagination={{
          defaultPageSize: 10,
          onChange: onPageChange,
          total: props.total
        }}
        grid={{
          gutter: 16,
          column: 3,
        }}
        style={{marginTop:'20px'}}
        dataSource={props.products}
        renderItem={(item) => (
          <List.Item>
            <Card style={{lineHeight:'18px'}}>
              <Image src={item.imageUrl} />
              <p style={{fontWeight:'bold'}}>{item.name}</p>
              <p>Loại: {item.category}</p>
              <p>Ghi chú: {item.description}</p>
              <h2 style={{color:'red'}}>{item.price}$</h2>
              <Button onClick={info} type='primary' style={{color:'black', width:'100%', fontWeight:'bold'}}>Chi tiết sản phẩm</Button>
            </Card>
          </List.Item>
        )}
      />
    </>
  )
}
