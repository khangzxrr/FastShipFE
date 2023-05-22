import { LeftOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import DeliveryAddress from "../../component/orders-shipper/DeliveryAddress"
import DeliveryStatus from "../../component/orders-shipper/DeliveryStatus"
import ProductsList from "../../component/orders-shipper/ProductsList"
import Bill from "../../component/orders-shipper/Bill"
const OrderDetailShipper = () => {
    return (
        <><div style={{
            width: '90%', margin: '5px 5% 5px 5%',
            borderRadius: '20px', padding: '10px 20px 0px 10px', border: 'none'
        }}>
            <h2><Link to={'/shipper-order'} style={{ color: 'orange', marginRight: '10px' }}><LeftOutlined /></Link>Thông tin đơn hàng</h2>

        </div>
            <DeliveryAddress />
            <DeliveryStatus/>
            <ProductsList/>
            <Bill/>
        </>

    )
}
export default OrderDetailShipper