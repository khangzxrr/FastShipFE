import {Table, Space, Modal, Input } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { managerGetCurrencyListAction } from '../../features/managerGetCurrencyList/managerGetCurrencyListAction';
import { Utils } from '../../features/utils/Utils';
import { managerUpdateCurrencyRate } from '../../features/managerUpdateCurrencyRate/managerUpdateCurrencyRateAction';
export default function Currency() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [selectedCurrencyId, setSelectedCurrencyId] = useState(-1)
  const [selectedCurrencyRate, setSelectedCurrencyRate] = useState(0.0)
  const [currencies, setCurrencies] = useState([])

  const dispatch = useDispatch()

  const showModal = (record) => {
    console.log(record.id)
    setSelectedCurrencyId(record.id)
    setSelectedCurrencyRate(record.rate)
    setIsModalOpen(true)
  };
  const handleOk = () => {
    dispatch(managerUpdateCurrencyRate(selectedCurrencyId, selectedCurrencyRate))
      .then((response) => {
        dispatch(managerGetCurrencyListAction())
          .then((response) => {
            setCurrencies(response.currencyRecords)
          })
        alert('cập nhật thành công')
      })
      .catch((err) => {
        alert('cập nhật thất bại, vui lòng thử lại sau')
      })


    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function handleRateInputOnChange(event) {
    setSelectedCurrencyRate(event.target.value)

    console.log(selectedCurrencyRate)
  }


  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Tên ngoại tệ',
      dataIndex: 'fromCurrency',
      key: 'fromCurrency',
    },
    {
      title: 'Tỷ giá',
      key: 'rate',
      dataIndex: 'rate',
      render: (rate) => <a>{Utils.formatToVNDCurrency(rate)}</a>
    },
    {
      title: '',
      key: 'action',
      dataIndex: 'id',
      render: (_, record) => (


        <Space size="middle">
          <a onClick={() => { showModal(record)}}>Chỉnh sửa</a>
        </Space>
      ),
    },
  ];

  

  useEffect(() => {
    dispatch(managerGetCurrencyListAction())
      .then((response) => {
        setCurrencies(response.currencyRecords)
      })
  }, [dispatch])
  return (
    <>
    <div className='currency'>
        <h2>TỶ GIÁ</h2>
        <h3>Đơn vị: VNĐ</h3>
        <Table columns={columns} dataSource={currencies} />
    </div>
    <Modal title="CẬP NHẬT TỶ GIÁ" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <p>Số tiền VNĐ muốn sửa: </p>
      <Input onChange={handleRateInputOnChange} value={selectedCurrencyRate}/>
      </Modal>
    </>
  )
}
