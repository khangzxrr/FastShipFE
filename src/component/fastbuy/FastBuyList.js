import React from 'react'
import { Card, List, Button } from 'antd'
export default function FastBuyList(props) {
  
  return (
    <>
      <List
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
              <p>Price: {item.price}$</p>
              <Button type='primary' style={{color:'black', width:'100%'}}>Buy</Button>
            </Card>
          </List.Item>
        )}
      />
    </>
  )
}
