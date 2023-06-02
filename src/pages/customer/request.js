import { useNavigate, useSearchParams } from "react-router-dom";
import RequestChat from "../../component/request/RequestChat";
import RequestInfo from "../../component/request/RequestInfo";
import RequestProducts from "../../component/request/RequestProducts";
import "../../component/request/request.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByIdAction } from "../../features/getOrderById/getOrderByIdAction";
import { getOrderChatHubAction } from "../../features/getOrderChat/getOrderChatHubAction";
import { Skeleton } from "antd";
import { Utils } from "../../features/utils/Utils";

const Request = () => {
    const [loading, setLoading] = useState(false)

    const [connection, setConnection] = useState(null)

    const [searchParams, setSearchParams] = useSearchParams()

    const { order } = useSelector(state => state.getOrderById)
    const { chatMessages } = useSelector(state => state.getOrderChat)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const orderId = searchParams.get('orderId')

        if (orderId === null) {
            navigate('/home')
            return
        }

        console.log(orderId)

        setLoading(true)

        dispatch(getOrderByIdAction(orderId))
        .then((response) => {
            
            if (response.order.status !== 'noPriceQuotation'){
                navigate('/detailod?orderId=' + orderId)
                return
            }

            dispatch(getOrderChatHubAction(orderId))   
                .then(connectionBuilder => {
                    setConnection(connectionBuilder)
                })
            
        })
        .catch((err) => {
            alert('Lỗi, xin vui lòng thử lại sau')
            navigate('/home')
            return
        })
        .finally(() => {
            setLoading(false)
        })

        


    }, [searchParams, dispatch])

    function handleOnSendMessage(message) {
        try{
            connection.invoke('SendMessage', {
                message
            })
        }catch(err){
            alert('Có lỗi xảy ra khi gửi tin nhắn, vui lòng thử lại')
        }
    }
    

    return (
        <div className="container" style={{display:'flex',marginTop:'20px', marginBottom:'20px'}}>
            <div style={{width:'60%', marginRight:'2%', padding:'0px 20px 30px 20px'}}>
                <h2>THÔNG TIN SẢN PHẨM</h2>
                {
                    loading ? (<Skeleton />) : order.orderDetails.map((orderDetail, index) => <RequestProducts key={index} orderDetail={orderDetail} /> )
                }

                <h3 style={{textAlign:'right', marginRight:'20px'}}>Tổng giá tạm tính: { order.price === 0 ? 'Chưa có giá chính xác' : Utils.formatToVNDCurrency(order.price) }</h3>

            </div>
            <div style={{width:'38%', padding:'0px 10px 10px 10px'}}>
                <h2>THÔNG TIN ĐƠN HÀNG</h2>
                { loading ? (<Skeleton />) : (<RequestInfo employeeName={order.employeeName} orderDate={order.orderDate} />)}
                <h2>NỘI DUNG TRAO ĐỔI</h2>
                { loading ? (<Skeleton />) : (<RequestChat handleOnSendMessage={handleOnSendMessage} chatMessages={chatMessages}/>)}
                
            </div>
        </div>
    );
};

export default Request