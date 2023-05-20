import React from 'react'
import { Menu } from 'antd'
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('DANH MỤC', 'grp', null, [getItem('Healthy', 'healthy'), getItem('Skincare', 'skkincare')], 'group'),
];
export default function FastBuyMenu() {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
    </>
  )
}
