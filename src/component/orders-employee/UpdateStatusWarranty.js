import React from 'react'
import { Descriptions } from 'antd'
export default function UpdateStatusWarranty() {
  return (
    <Descriptions>
                <Descriptions.Item label="Status" span={3} >
                    <select style={{ border: '1px solid grey', borderRadius: '10px', padding: '5px' }} >
                        <option value={"noPayYet"}> Chưa thanh toán </option>
                        <option value={"waitingToOrderFromSeller"}> Đang đợi order hàng</option>
                        <option value={"orderingFromSeller"}> Đang mua hàng từ người bán</option>
                        <option value={"deliverFromUsToVN"}> Đang giao từ US về VN</option>
                        <option value={"inVNwarehouse"}> Đang ở kho VN</option>
                        <option value={"deliverToCustomer"}> Đang giao đến khách hàng</option>
                        <option value={"finished"}> Đã hoàn thành</option>
                        <option value={"reselling"}> Bán lại đơn</option>
                    </select>
                </Descriptions.Item>
            </Descriptions>
  )
}
