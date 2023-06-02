import React from 'react'
import {  Badge, Table} from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSelectedProductIssue } from '../../features/employeeUpdateProductIssue/employeeUpdateProductIssueSlice'
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
      title: 'Status',
      dataIndex: 'status',
      key: 'status'
    },
    {
      title: 'Reason',
      dataIndex: 'returnReason',
      key: 'returnReason'
    },
    {
      title: 'Finish',
      dataIndex: 'finishStatus',
      key: 'finishStatus',
      render: (finishStatus, {status }) =>  <Badge color={status !== 'finish' ? 'orange' : 'green'}  text={status === 'finish' ? 'finish' : 'on going'} /> 
    },
    {
      title: 'Ngày yêu cầu',
      dataIndex: 'returnDate',
      key: 'returnDate'
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
