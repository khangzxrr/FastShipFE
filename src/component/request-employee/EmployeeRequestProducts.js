import React from 'react'
import { Input, Descriptions, Modal } from 'antd'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { employeeEditOrderDetailAction } from '../../features/employeeEditOrderDetail/employeeEditOrderDetailAction';
import { Utils } from '../../features/utils/Utils';
import {AiOutlineEdit} from 'react-icons/ai'
export default function EmployeeRequestProducts(props) {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const [propertyName, setPropertyName] = useState('')

  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const showEditModal = (propertyName, propertyValue) => {

    setValue(propertyValue)
    setPropertyName(propertyName)
    setIsModalOpen(true)

  };
  const handleOk = () => {

    dispatch(employeeEditOrderDetailAction(props.orderId, props.orderDetail.orderDetailId, propertyName, value))
      .then(() => {
        Utils.showSuccessNoti(props.messageApi, 'Cập nhật thành công')
      })
      .catch(err => {
        Utils.showErrorNoti(props.messageApi, 'Cập nhật thất bại, vui lòng thử lại')
      })
    setIsModalOpen(false);
  };


  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEditModelValueChange = (event) => {
    setValue(event.target.value)
  }


  return (

    <div className='requestproducts' style={{ display: 'flex', padding: '10px'}}>
      <div style={{width:'28%', marginRight:'2%'}}>
        <img
          src={Utils.displayUploadImage(props.orderDetail.product.imageUrl)}
          style={{
            height: 'auto',
            width: '100%',
            position:'relative',
            marginTop:'20px'
          }}
        />
        <Modal title="Chỉnh sửa" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Descriptions layout="vertical">
            <Descriptions.Item label={propertyName}><Input onChange={handleEditModelValueChange} value={value}/></Descriptions.Item>
          </Descriptions>
        </Modal>
      </div>
      <div style={{ padding: '0px 10px', width: '70%', lineHeight:'10px'}}>
        <h2 style={{wordWrap:'break-word', lineHeight:'30px'}}>Name: {props.orderDetail.product.name}</h2>
        <a href={props.orderDetail.product.url}>Link sản phẩm</a>
        <p>Loại: {props.orderDetail.product.category} </p>
        <p>Mô tả: {props.orderDetail.product.description} <a onClick={() => showEditModal('productDescription', props.orderDetail.product.description)}><AiOutlineEdit/></a></p>
        <p>Tiền tệ: {props.orderDetail.product.productCurrencyExchangeRecord.currencyName} <a onClick={() => showEditModal('currencyName', props.orderDetail.product.productCurrencyExchangeRecord.currencyName)}><AiOutlineEdit/></a></p>
        <p>Bảo hành: {props.orderDetail.product.warrantable ? 'Có' : 'Không'} <a onClick={() => showEditModal('productWarrantable', props.orderDetail.product.warrantable)}><AiOutlineEdit/></a></p>
        {
          props.orderDetail.product.warrantable ? 
            <p>Mô tả bảo hành: {props.orderDetail.product.warrantyDescription} <a onClick={() => showEditModal('warrantyDescription', props.orderDetail.product.warrantyDescription)}><AiOutlineEdit/></a></p>
             : 
            <p></p>
        }

        <p>Đổi trả: {props.orderDetail.product.returnable ? 'Có' : 'Không'} <a onClick={() => showEditModal('productReturnable', props.orderDetail.product.returnable)}><AiOutlineEdit/></a></p>
        {
          props.orderDetail.product.returnable ? 
            <p>Mô tả đổi trả: {props.orderDetail.product.returnDescription} <a onClick={() => showEditModal('returnDescription', props.orderDetail.product.returnDescription)}><AiOutlineEdit/></a></p>
             : 
            <p></p>
        }
        <div style={{textAlign:'right'}}>
        <p>Số lượng: {props.orderDetail.quantity} cái <a onClick={() => showEditModal('quantity', props.orderDetail.quantity)}><AiOutlineEdit/></a></p>
        <p>Phí ship đến kho US: {props.orderDetail.shipCost}$ <a onClick={() => showEditModal('shipCost', props.orderDetail.shipCost)}><AiOutlineEdit/></a></p>
        <p>Giá: {props.orderDetail.productCost}$ <a onClick={() => showEditModal('productCost', props.orderDetail.productCost)}><AiOutlineEdit/></a></p>
        <p>Phí xử lý: {props.orderDetail.processCost}$ <a onClick={() => showEditModal('processCost', props.orderDetail.processCost)}><AiOutlineEdit/></a> </p>
        <p>(*cập nhật khi tính trọng lượng) Phí phụ thu: {props.orderDetail.additionalCost}$</p>
        <p>Phí mỗi kí(kg): {props.orderDetail.costPerWeight}$ <a onClick={() => showEditModal('costPerWeight', props.orderDetail.costPerWeight)}><AiOutlineEdit/></a></p>
        <p>Tỉ giá chuyển sang VNĐ: {Utils.formatToVNDCurrency(props.orderDetail.product.productCurrencyExchangeRecord.rate)}</p>
          <p style={{ fontWeight: 'bold' }}>Tổng cộng: {props.orderDetail.totalCost}$</p>
        </div>
      </div>
    </div>
  )
}

