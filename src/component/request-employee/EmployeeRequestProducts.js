import React from 'react'
import { Input, Button, Select, Descriptions, Modal, message } from 'antd'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { employeeEditOrderDetailAction } from '../../features/employeeEditOrderDetail/employeeEditOrderDetailAction';
import { Utils } from '../../features/utils/Utils';
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

    <div className='requestproducts' style={{ display: 'flex', padding: '10px', marginRight:'2%' }}>
      <div style={{width:'28%'}}>
        <img
          src={props.orderDetail.product.imageUrl}
          style={{
            height: '150px',
            width: '100%',
            position:'relative',
            marginTop:'20px'
          }}
        />
        <Modal title="INSERT" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Descriptions layout="vertical">
            <Descriptions.Item label={propertyName} ><Input onChange={handleEditModelValueChange} value={value}/></Descriptions.Item>
          </Descriptions>
        </Modal>
      </div>
      <div style={{ padding: '0px 10px', width: '70%', lineHeight:'22px'}}>
        <h2 style={{wordWrap:'break-word'}}>Name: {props.orderDetail.product.name}</h2>
        
        <p>Type: {props.orderDetail.product.category} </p>

        <p><a onClick={() => showEditModal('productDescription', props.orderDetail.product.description)}>Mô tả:</a> {props.orderDetail.product.description}</p>
        <p><a onClick={() => showEditModal('quantity', props.orderDetail.quantity)}>Số lượng:</a> {props.orderDetail.quantity} cái</p>
        <p><a onClick={() => showEditModal('shipCost', props.orderDetail.shipCost)}>Phí ship đến kho US:</a> {props.orderDetail.shipCost}$</p>
        <p><a onClick={() => showEditModal('productCost', props.orderDetail.productCost)}>Giá:</a> {props.orderDetail.productCost}$</p>
        <p><a onClick={() => showEditModal('processCost', props.orderDetail.processCost)}>Phí xử lý:</a> {props.orderDetail.processCost}$</p>
        <p><a onClick={() => showEditModal('additionalCost', props.orderDetail.additionalCost)}>Phí phụ thu:</a> {props.orderDetail.additionalCost}$</p>
        <p><a onClick={() => showEditModal('costPerWeight', props.orderDetail.costPerWeight)}>Phí mỗi kí(kg):</a> {props.orderDetail.costPerWeight}$</p>
        <p><a onClick={() => showEditModal('productWarrantable', props.orderDetail.product.warrantable)}>bảo hành: </a> {props.orderDetail.product.warrantable ? 'có' : 'không'}</p>
        {
          props.orderDetail.product.warrantable ? 
            <p><a onClick={() => showEditModal('warrantyDescription', props.orderDetail.product.warrantyDescription)}>mô tả bảo hành: </a> {props.orderDetail.product.warrantyDescription}</p>
             : 
            <p></p>
        }

        <p><a onClick={() => showEditModal('productReturnable', props.orderDetail.product.returnable)}>đổi trả: </a> {props.orderDetail.product.returnable ? 'có' : 'không'}</p>
        {
          props.orderDetail.product.returnable ? 
            <p><a onClick={() => showEditModal('returnDescription', props.orderDetail.product.returnDescription)}>mô tả đổi trả: </a> {props.orderDetail.product.returnDescription}</p>
             : 
            <p></p>
        }

        <p><a onClick={() => showEditModal('currencyName', props.orderDetail.product.productCurrencyExchangeRecord.currencyName)}>Tiền tệ:</a> {props.orderDetail.product.productCurrencyExchangeRecord.currencyName}</p>
        <p>Tỉ giá chuyển sang VNĐ: {Utils.formatToVNDCurrency(props.orderDetail.product.productCurrencyExchangeRecord.rate)}</p>


     
          <span style={{ fontWeight: 'bold' }}>Tổng cộng: {props.orderDetail.totalCost}$</span>
      </div>
    </div>
  )
}

