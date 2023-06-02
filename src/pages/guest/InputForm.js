import React, { useState } from 'react'
import {
  Form,
  Input,
  Button
} from 'antd'
import "../../component/home/home.css"
import { useDispatch } from 'react-redux'
import { registerAction } from '../../features/login/registerAction'
import { useNavigate } from 'react-router-dom'
import {EyeTwoTone, EyeInvisibleOutlined} from '@ant-design/icons'
import { fromJSON } from 'postcss'
export default function InputForm() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleChangeEmail(event) {
    setEmail(event.target.value)
  }

  function handleChangeAddress(event) {
    setAddress(event.target.value)
  }

  function handleChangePassword(event) {
    setPassword(event.target.value)
  }

  function handleChangePhoneNumber(event) {
    setPhoneNumber(event.target.value)
  }

  function handleChangeFirstName(event) {
    setFirstName(event.target.value)
  }

  function handleChangeLastName(event) {
    setLastName(event.target.value)
  }

  function handleOnRegister() {
    console.log(email)

    dispatch(registerAction(email, password, phoneNumber, address, firstName, lastName))
    .then((data) => {
      alert('Đăng kí thành công! vui lòng nhấn yêu cầu báo giá')
      navigate('/add')
    })
    .catch((err) => {

      if (err.response.data.errors) {
        for(let errorKey in err.response.data.errors){
          alert(err.response.data.errors[errorKey])
        }
      } else {
        alert(err.response.data)
      }

    })
   
  }
  return (
    <>
      <Form className='inputform'
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="EMAIL">
          <Input onChange={handleChangeEmail}/>
        </Form.Item>
        <Form.Item label="MẬT KHẨU" >
        <Input.Password
        onChange={handleChangePassword}
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
        </Form.Item>
        <Form.Item label="SĐT">
          <Input onChange={handleChangePhoneNumber}/>
        </Form.Item>
        <Form.Item label="HỌ">
          <Input onChange={handleChangeLastName}/>
        </Form.Item>
        <Form.Item label="TÊN">
          <Input onChange={handleChangeFirstName}/>
        </Form.Item>
        <Form.Item label="ĐỊA CHỈ">
          <Input onChange={handleChangeAddress}/>
        </Form.Item>
        <Button style={{ marginLeft: '150px', color: 'black' }} type='primary' onClick={handleOnRegister}>ĐĂNG KÝ TÀI KHOẢN</Button>
      </Form>
    </>
  )
}
