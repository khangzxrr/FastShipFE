import { useNavigate, useSearchParams } from "react-router-dom"
import ChatWarranty from "../../component/warranty/ChatWarranty"
import ProductWarrantyDetail from "../../component/warranty/ProductWarrantyDetail"
import StepWarranty from "../../component/warranty/StepWarranty"
import { Descriptions } from "antd"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getProductReturnByIdAction } from "../../features/getProductReturnById/getProductReturnByIdAction"
import StepReturn from "../../component/warranty/StepReturn"
const WarrantyDetail = () => {

    const [search, setSearch] = useSearchParams()

    const [productReturn, setProductReturn] = useState({
        productRecord: {}
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const id = search.get('id')

        if (id === null) {
            navigate('/product-return-list')
        }

        dispatch(getProductReturnByIdAction(id))
            .then(response => {
                console.log(response)
                setProductReturn(response.productReturnRecord)

                console.log(productReturn.productRecord)
            })
    }, [])

    return (
        <>
            <div className='container' style={{ marginTop: '50px' }}>
                {
                    productReturn.isWarranty ? (<StepWarranty status={productReturn.statusCode} />) : (<StepReturn status={productReturn.statusCode} />)
                }
                
            </div>
            <div className="container" style={{ display: 'flex', marginTop: '20px', marginBottom: '20px' }}>
                <div style={{ width: '60%', marginRight: '2%', padding: '0px 20px 30px 20px' }}>
                    <h2>CHI TIẾT ĐƠN HÀNG ĐANG ĐƯỢC ĐỔI TRẢ</h2>
                    <ProductWarrantyDetail product={productReturn.productRecord}/>
                </div>
                <div style={{ width: '38%', padding: '0px 10px 10px 10px' }}>
                    <h2>THÔNG TIN ĐỔI TRẢ</h2>
                    <Descriptions>
                        <Descriptions.Item label="Status" span={3}>{productReturn.status}</Descriptions.Item>
                        <Descriptions.Item label="returnDate" span={3}>{productReturn.returnDate}</Descriptions.Item>
                        <Descriptions.Item label="returnReason" span={3}>{productReturn.returnReason}</Descriptions.Item>
                        <Descriptions.Item label="Thuộc loại" span={3}>{productReturn.isWarranty ? 'Bảo hành' : 'Đổi trả'}</Descriptions.Item>
                    </Descriptions>
                </div>
            </div>
        </>
    )
}
export default WarrantyDetail
