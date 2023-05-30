import CustomerMenu from "../../component/warranty/CustomerMenu"
import { Table, Space } from "antd"
import { Link } from "react-router-dom";
const CustomerWarrantyList = () => {
    const columns = [
        {
          title: 'MÃ ĐƠN HÀNG',
          dataIndex: 'orderId',
          key: 'id',
          render: (text) => <span>{text}</span>,
        },
        {
          title: 'NGÀY ĐẶT HÀNG',
          dataIndex: 'orderDate',
          key: 'time',
        },
        {
          title: 'TÌNH TRẠNG',
          dataIndex: 'orderStatus',
          key: 'time',
        },
        {
          title: '',
          dataIndex: 'orderId',
          key: 'action',
          render: (orderId, { orderStatus }) => {
      
            let redirectUrl = (orderStatus === "noPriceQuotation") ? "/request" : "/detailod"
            redirectUrl += "?orderId=" + orderId
      
            return (
            <Space size="middle">
              <Link to={redirectUrl}><span>Chi tiết</span></Link>
            </Space>
            )
          }
        },
      ];
    return (
        <div>
      <CustomerMenu/>
      <div style={{
        width: '90%', margin: '0px 5% 50px 5%',
        borderRadius: '20px', padding: '10px 20px', boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', border: 'none'
      }}>
        <h2>DANH SÁCH YÊU CẦU</h2>
       <Table style={{border:'none'}} columns={columns} />
      </div>
    </div>
    )
}
export default CustomerWarrantyList
