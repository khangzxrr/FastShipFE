import { useNavigate, useSearchParams } from "react-router-dom"
import ProductWarrantyDetail from "../../component/warranty/ProductWarrantyDetail"
import { Descriptions } from "antd"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getProductReturnByIdAction } from "../../features/getProductReturnById/getProductReturnByIdAction"
import { Utils } from "../../features/utils/Utils"

const ProductIssueDetail = () => {

    const [search, setSearch] = useSearchParams()

    const [productIssue, setProductIssue] = useState({
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
                setProductIssue(response.productIssueRecord)
            })
    }, [])

    return (
        <>
            <div className='container' style={{ marginTop: '50px' }}>
                
                
            </div>
            <div className="container" style={{ display: 'flex', marginTop: '20px', marginBottom: '20px' }}>
                <div style={{ width: '60%', marginRight: '2%', padding: '0px 20px 30px 20px' }}>
                    <h2>CHI TIẾT ĐƠN HÀNG ĐANG ĐƯỢC ĐỔI TRẢ</h2>
                    <ProductWarrantyDetail product={productIssue.productRecord}/>
                </div>
                <div style={{ width: '38%', padding: '0px 10px 10px 10px' }}>
                    <h2>THÔNG TIN</h2>
                    <Descriptions>
                        <Descriptions.Item label="Status" span={3}>{productIssue.status}</Descriptions.Item>
                        <Descriptions.Item label="returnDate" span={3}>{productIssue.returnDate}</Descriptions.Item>
                        <Descriptions.Item label="returnReason" span={3}>{productIssue.returnReason}</Descriptions.Item>
                        <Descriptions.Item label="Thuộc loại" span={3}>{productIssue.isWarranty ? 'Bảo hành' : 'Đổi trả'}</Descriptions.Item>
                    </Descriptions>
                </div>
                <div  style={{ width: '38%', padding: '0px 10px 10px 10px' }}>
                    <h2>Cập nhật trạng thái</h2>
                    {
                        productIssue.stateTracking && productIssue.stateTracking.map(state => (<p>{Utils.translateProductIssueState(state.status)} vào lúc {state.changeDate}</p>))
                    }
                </div>
            </div>
        </>
    )
}
export default ProductIssueDetail
