import { useNavigate, useSearchParams } from "react-router-dom";
import RequestChat from "../../component/request/RequestChat";
import RequestInfo from "../../component/request/RequestInfo";
import RequestProducts from "../../component/request/RequestProducts";
import "../../component/request/request.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByIdAction } from "../../features/getOrderById/getOrderByIdAction";
import { getOrderChatAction } from "../../features/getOrderChat/getOrderChatAction";
import { getOrderChatHubAction } from "../../features/getOrderChat/getOrderChatHubAction";
import { clearOrder } from "../../features/getOrderById/getOrderByIdSlice";

const Request = () => {

    const [connection, setConnection] = useState(null)

    const [searchParams, setSearchParams] = useSearchParams()

    const { token } = useSelector(state => state.login)
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

        dispatch(getOrderByIdAction(orderId))
        .then((response) => {
            
            if (response.order.status !== 'noPriceQuotation'){
                alert('đơn hàng không thuộc đúng trạng thái để xử lí trang này! ')
                navigate('/home')
                return
            }

            dispatch(getOrderChatAction(orderId))

            const connectionBuilder = getOrderChatHubAction(token)
            connectionBuilder.on('boardcast', () => {
                dispatch(getOrderChatAction(order.orderId))
            })
    
            connectionBuilder.start()
                .then(() => {
    
                    setConnection(connectionBuilder)
    
                    connectionBuilder.invoke('ConnectToChatRoom', {
                        orderId: order.orderId
                    })
                })
        })
        .catch((err) => {
            alert('Lỗi, xin vui lòng thử lại sau')
            navigate('/home')
            return
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
                <h2>ORDER YOUR PRODUCTS</h2>
                {
                    order.orderDetails.map((orderDetail, index) => <RequestProducts key={index} orderDetail={orderDetail} /> )
                }
                <h3 style={{textAlign:'right', marginRight:'20px'}}>TOTAL:20000</h3>
            </div>
            <div style={{width:'38%', padding:'0px 10px 10px 10px'}}>
                <h2>THÔNG TIN REQUEST</h2>
                <RequestInfo employeeName={order.employeeName} orderDate={order.orderDate} />
                <h2>NỘI DUNG TRAO ĐỔI</h2>
                <RequestChat handleOnSendMessage={handleOnSendMessage} chatMessages={chatMessages}/>
            </div>
        </div>
    );
};

export default Request