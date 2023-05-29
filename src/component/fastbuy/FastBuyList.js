import React from 'react'
import { Card, List, Button, Image } from 'antd'
export default function FastBuyList(props) {
  
  function onPageChange(pageIndex) {
    props.fetchResellProduct(pageIndex - 1)
  }

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
          column: 4,
        }}
        style={{marginTop:'20px'}}
        dataSource={props.products}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>
              <p>Category {item.category}</p>
              <p>Name {item.name}</p>
              <Image src={item.imageUrl} />
              <p>Description {item.description}</p>
              <p>Price: {item.price}$</p>
              <Button type='primary' style={{color:'black', width:'100%'}}>Buy</Button>
            </Card>
          </List.Item>
        )}
      />
    </>
  )
}
