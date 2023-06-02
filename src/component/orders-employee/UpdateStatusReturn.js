import React, { useEffect, useState } from 'react'
import { Button, Descriptions, Popconfirm, Select, message } from 'antd'
import { useDispatch } from 'react-redux'
import { employeeUpdateProductIssueStatusAction } from '../../features/employeeUpdateProductIssue/employeeUpdateProductIssueStatusAction'
import { employeeGetNextProductIssueStateAction } from '../../features/employeeGetNextProductIssueState/employeeGetNextProductIssueStateAction'
import { Utils } from '../../features/utils/Utils'
import Moment from 'react-moment'
export default function UpdateStatusReturn(props) {

  const [messageApi, messaegContextHolder] = message.useMessage()

  

  const [selectOptions, setSelectOptions] = useState([])
  const [newStatus, setNewStatus] = useState(props.productIssue.status)

  const dispatch = useDispatch()

  function onStatusChange(selectedStatus) {
    setNewStatus(selectedStatus)
  }

  function fetchNextStates() {
    dispatch(employeeGetNextProductIssueStateAction(props.productIssue.id))
      .then(response => {

        let mapToSelect = []

        for (let i in response.nextState) {
          mapToSelect.push({
            value: response.nextState[i],
            label: Utils.translateProductIssueState(response.nextState[i])
          })

        }



        console.log(mapToSelect)
        setSelectOptions(mapToSelect)

        if (props.productIssue.status !== 'finish'){
          setNewStatus(mapToSelect[0].value)
        } 
        
      })
  }

  function handleSaveChanges() {
    dispatch(employeeUpdateProductIssueStatusAction(props.productIssue.id, newStatus))
      .then(resposne => {
        Utils.showSuccessNoti(messageApi, 'Cập nhật trạng thái thành công')
      })
      .catch(err => {
        Utils.showErrorNoti(messageApi, 'Lỗi khi cập nhật trạng thái')
      })
      .finally(() => {
        fetchNextStates()
      })
  }

  useEffect(() => {
    fetchNextStates()
  }, [])

  return (
    <div>
      {messaegContextHolder}
      
      Trạng thái đã cập nhật trước đó
      {
        props.productIssue.stateTracking.map(state => (<p>{Utils.translateProductIssueState(state.status)}  - <Moment date={state.changeDate} format='DD/MM/YYYY HH:mm' /></p>))
      }


      <Descriptions>
        <Descriptions.Item label="Status" span={3} >
          <Select onChange={onStatusChange} disabled={props.productIssue.status === 'finish' || props.productIssue.status === 'shippingToCustomer'} value={newStatus} style={{ width: 250, border: '1px solid grey', borderRadius: '10px', padding: '5px' }}
            options={selectOptions}
          />
        </Descriptions.Item>
      </Descriptions>

      <Popconfirm
        disabled={props.productIssue.status === 'finish' || props.productIssue.status === newStatus || props.productIssue.status === 'shippingToCustomer'}
        title="Xác nhận"
        description="Bạn có chắc chắn muốn lưu và thực hiện tác vụ này?"
        onConfirm={() => handleSaveChanges()}
      >
        <Button disabled={props.productIssue.status === 'finish' || props.productIssue.status === newStatus || props.productIssue.status === 'shippingToCustomer'} type="primary" style={{ color: 'black', fontWeight: 600, margin: '5px 0px' }}>
          {props.productIssue.status === 'finish' ? 'Đã xử lí thành công yêu cầu' : 'Lưu và thực hiện tác vụ'}
        </Button>
      </Popconfirm>
    </div>



  )
}
