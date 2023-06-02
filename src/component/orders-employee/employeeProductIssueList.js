import React from 'react'
import {  Badge, Table} from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSelectedProductIssue } from '../../features/employeeUpdateProductIssue/employeeUpdateProductIssueSlice'
import Moment from 'react-moment'
import { Utils } from '../../features/utils/Utils'
export default function EmployeeProductIssueList(props) {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function onPageChange(pageIndex) {
    props.getProductIssuesByPage(pageIndex)
  }

  //to={{ pathname: isWarranty ? '/employee-warranty-detail' : '/employee-product-return-detail', search:'id=' + id }}

  function onClickSpecificProductIssue(productIssue) {
    console.log(productIssue)
    dispatch(setSelectedProductIssue(productIssue))
    
    navigate('/employee-product-issue-resolve')
  }

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render: (id,  productIssue) => (<a onClick={() => onClickSpecificProductIssue(productIssue)}>{id}</a>)
    },
    {
      title: 'Bảo hành hoặc đổi trả',
      dataIndex: 'isWarranty',
      key: 'isWarranty',
      render: (isWarranty) => <p>{ isWarranty ? 'Bảo hành' : 'Đổi trả'}</p>
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status) => <p>{Utils.translateProductIssueState(status)}</p>
    },
    {
      title: 'Nguyên nhân',
      dataIndex: 'returnReason',
      key: 'returnReason'
    },
    {
      title: 'Finish',
      dataIndex: 'status',
      key: 'status',
      defaultSortOrder: 'ascend',
      sorter: (a,b) => (a === 'finish') ? -1 : 1,
      render: (status) =>  <Badge color={status !== 'finish' ? 'orange' : 'green'}  text={status === 'finish' ? 'Hoàn thành' : 'Đang diễn ra'} /> 
    },
    {
      title: 'Ngày yêu cầu',
      dataIndex: 'returnDate',
      key: 'returnDate',
      render: (returnDate) => <Moment date={returnDate} format='DD/MM/YYYY HH:mm' />
    }
  ]

  return (
    <div>
      <div style={{
        width: '90%', margin: '0px 5% 50px 5%',
        borderRadius: '20px', padding: '10px 20px', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', border: 'none'
      }}>
        <h2>Danh sách yêu cầu</h2>
        <Table rowKey={"id"} columns={columns} dataSource={props.productIssues}  style={{border:'none'}} pagination={{ total:props.total, onChange: onPageChange }}/>
      </div>
    </div>
  )
}
