import DeliveyOrdersList from "../../component/orders-shipper/DeliveyOrdersList"

const HomeShipper = () => {
  return (
    <div style={{
      width: '90%', margin: '20px 5% 50px 5%', border: '1px solid grey',
      borderRadius: '20px', padding: '10px 20px', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',border:'none'
    }}>
      <h2>TẤT CẢ ĐƠN HÀNG</h2>
      <p>Có 9 đơn hàng cần giao</p>
      <DeliveyOrdersList/>
    </div>
  )
}
export default HomeShipper