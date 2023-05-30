import { Statistic} from "antd"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const { Countdown } = Statistic;

const CountTime = () => {

    const { order } = useSelector(state => state.getOrderById)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function onFinish() {
        navigate('/detailod?orderId=' + order.orderId)    
    }

    return (
        <div style={{width:'100%', textAlign:'center'}}>
                <Countdown value={Date.now() + 10 * 1000} onFinish={onFinish}/>
                <p>Vui lòng chờ giây lát, chúng tôi đang cập nhật thanh toán của bạn</p>
        </div>
    )
}
export default CountTime