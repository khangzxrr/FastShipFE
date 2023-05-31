import { useSelector } from "react-redux";
import RequestProductIssueInfo from "../../component/warranty/RequestProductIssueInfo";
import RequestProductIssueInput from "../../component/warranty/RequestProductIssueInput";
const RequestProductIssue = () => {

    const { orderDetail } = useSelector(state => state.requestProductReturn)



    return (
        <div className="container" style={{display:'flex',marginTop:'20px', marginBottom:'20px'}}>
            <div style={{width:'60%', marginRight:'2%', padding:'0px 20px 30px 20px'}}>
                <h2>THÔNG TIN SẢN PHẨM</h2>
                <RequestProductIssueInfo product={orderDetail.product} quantity={orderDetail.quantity}/>
            </div>
            <div style={{width:'38%', padding:'0px 10px 10px 10px'}}>
                <h2>NỘI DUNG YÊU CẦU</h2>
                <RequestProductIssueInput product={orderDetail.product} orderDetailId={orderDetail.orderDetailId}/>
            </div>
        </div>
    )
}
export default RequestProductIssue
