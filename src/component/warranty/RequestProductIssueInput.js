import React, { useState } from 'react'
import {
    Descriptions,
    Button,
    Input,
    Radio, Upload
} from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import { API_BASE_URL } from '../../features/axiosProfile';
import { useDispatch } from 'react-redux';
import { requestProductIssueAction as requestProductIssueAction } from '../../features/requestProductReturn/requestProductReturnAction';
import { useNavigate } from 'react-router-dom';
const { TextArea } = Input;

export default function RequestProductIssueInput(props) {

    const [fileList, setFileList] = useState([])
    const [ratioValue, setRatioValue] = useState(0)
    const [description, setDescription] = useState('')
    const [series, setSeries] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    function onRatioValueChange(e){
        setRatioValue(e.target.value)
    }

    function onUploadChange({ file, fileList }){

        if (file.status !== 'uploading') {

            const fileNames = []
        
            fileList.forEach(file => {
                fileNames.push(file.response.fileName)
            });

            setFileList(fileNames)
        }
    }

    function handleSeriesOnChange(e) {
        setSeries(e.target.value)
    }

    function handleDescriptionOnChange(e) {
        setDescription(e.target.value)
    }

    function handleOnClickRequest() {

        console.log('handle')

        let isWarranty = false

        if (ratioValue === 1){
            isWarranty = true
        }
        else if (ratioValue === 2) {
            isWarranty = false
        } else {
            alert('Chưa chọn bảo hành hoặc đổi trả')
            return
        }

        dispatch(requestProductIssueAction(props.orderDetailId, isWarranty, series, description, fileList))
        .then((response) => {
            navigate('/product-issue-detail?id=' + response.productIssueRecord.id)
        })

    }
    return (
        <>
            <Descriptions>
                <Descriptions.Item label="Dịch vụ" span={3}>
                    <Radio.Group onChange={onRatioValueChange}>
                        <Radio value={1} disabled={!props.product.warrantable}>Bảo hành</Radio>
                        <Radio value={2} disabled={!props.product.returnable}>Đổi trả</Radio>
                    </Radio.Group>
                </Descriptions.Item>
                
                <Descriptions.Item label="Số seri những sản phẩm cần xử lí" span={3}>
                    <TextArea style={{ resize: 'none' }} onChange={handleSeriesOnChange}/>
                </Descriptions.Item>

                <Descriptions.Item label="Nội dung " span={3}>
                    <TextArea style={{ resize: 'none' }} onChange={handleDescriptionOnChange} />
                </Descriptions.Item>

                <Descriptions.Item label="Hình ảnh" span={3} valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload style={{ width: '100%' }} action={API_BASE_URL + "/medias/upload"} listType="picture-card" onChange={onUploadChange}>
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Tải lên
                            </div>
                        </div>
                    </Upload>
                </Descriptions.Item>
            </Descriptions >
            <Button type='primary' style={{ color: 'black', float:'right', fontWeight:'bold', width:'20%' }} onClick={() => handleOnClickRequest()}>Gửi</Button>
        </>
    )
}
