import React from 'react'
import { Card, List, Button } from 'antd'
export default function FastBuyList() {
  const data = [
    {
      title: <img
        src="/service2.jpg"
        alt="logo fastship"
        style={{
          height: "150px",
          width: '100%',
        }}
      />,
    },
    {
      title: <img
        src="/service2.jpg"
        alt="logo fastship"
        style={{
          height: "150px",
          width: '100%',
        }}
      />,
    },
    {
      title: <img
        src="/service2.jpg"
        alt="logo fastship"
        style={{
          height: "150px",
          width: '100%',
        }}
      />,
    },
    {
      title: <img
        src="/service2.jpg"
        alt="logo fastship"
        style={{
          height: "150px",
          width: '100%',
        }}
      />,
    },
  ];
  return (
    <>
      <List
        grid={{
          gutter: 16,
          column: 4,
        }}
        style={{marginTop:'20px'}}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>
              <p>Name</p>
              <p>Size, Color:</p>
              <p>Price:</p>
              <Button type='primary' style={{color:'black', width:'100%'}}>Buy</Button>
            </Card>
          </List.Item>
        )}
      />
    </>
  )
}
