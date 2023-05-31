import React from 'react'
import { Button, Descriptions, Popconfirm, Select } from 'antd'
import { useDispatch } from 'react-redux'
import { employeeUpdateProductIssueStatusAction } from '../../features/employeeUpdateProductIssue/employeeUpdateProductIssueStatusAction'
import { employeeUpdateProductIssueFinishStatusAction } from '../../features/employeeUpdateProductIssue/employeeUpdateProductIssueFinishStatusAction'
export default function UpdateStatusReturn(props) {

  const dispatch = useDispatch()

  function onStatusChange(newStatus) {
    dispatch(employeeUpdateProductIssueStatusAction(props.productIssue.id, newStatus))
  }

  function handleRefundAndClose() {
    dispatch(employeeUpdateProductIssueFinishStatusAction(props.productIssue.id))
  }

  return (
    <div>
<Descriptions>
                <Descriptions.Item label="Status" span={3} >
                    <Select onChange={onStatusChange} disabled={props.productIssue.finishStatus === 'processed'} value={props.productIssue.status} style={{ width: 250, border: '1px solid grey', borderRadius: '10px', padding: '5px' }} 
                      options={[
                        { value: 'request', label: 'Đang yêu cầu' },
                        { value: 'acceptReturnEmployeeFault', label: 'Đã chấp nhận, lỗi do nhân viên' },
                        { value: 'acceptReturnCustomerFault', label: 'Đã chấp nhận, lỗi do người dùng' },
                        { value: 'acceptReturnSellerFault', label: 'Đã chấp nhận, lỗi do bên bán' },
                      ]}
                    />
                </Descriptions.Item>
            </Descriptions>

            <Popconfirm    
                        disabled={props.productIssue.finishStatus === 'processed'}
                        title="Xác nhận đóng"
                        description="Bạn có chắc chắn muốn hoàn tiền và đóng yêu cầu này?"
                        onConfirm={() => handleRefundAndClose()}
                    >
            <Button disabled={props.productIssue.finishStatus === 'processed'} type="primary" style={{  color: 'black', fontWeight: 600, margin: '5px 0px' }}>
              {props.productIssue.finishStatus === 'processed' ? 'Đã hoàn tiền và đóng yêu cầu thành công' : 'Hoàn tiền cho người dùng và đóng yêu cầu'}
            </Button>
            </Popconfirm>
    </div>
    

    
  )
}
