import React from 'react'
import { Input } from 'antd'
const { Search } = Input;
const onSearch = (value) => console.log(value);
export default function FastBuySearch() {
  return (
    <>
        <Search
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    </>
  )
}
