import ChatWarranty from "../../component/warranty/ChatWarranty"
import ProductWarrantyDetail from "../../component/warranty/ProductWarrantyDetail"
import StepWarranty from "../../component/warranty/StepWarranty"
import { Descriptions } from "antd"
const WarrantyDetail = () => {
    return (
        <>
            <div className='container' style={{ marginTop: '50px' }}>
                <StepWarranty />
            </div>
            <div className="container" style={{ display: 'flex', marginTop: '20px', marginBottom: '20px' }}>
                <div style={{ width: '60%', marginRight: '2%', padding: '0px 20px 30px 20px' }}>
                    <h2>CHI TIẾT ĐƠN HÀNG</h2>
                    <ProductWarrantyDetail />
                </div>
                <div style={{ width: '38%', padding: '0px 10px 10px 10px' }}>
                    <h2>THÔNG TIN KHÁCH HÀNG</h2>
                    <Descriptions>
                        <Descriptions.Item label="Tên KH" span={3}></Descriptions.Item>
                        <Descriptions.Item label="SĐT" span={3}></Descriptions.Item>
                    </Descriptions>
                    <h2>THÔNG TIN ĐƠN HÀNG</h2>
                    <Descriptions>
                        <Descriptions.Item span={3} label="Ngày tạo đơn"></Descriptions.Item>
                        <Descriptions.Item span={3} label="Dịch vụ"></Descriptions.Item>
                        <Descriptions.Item span={3} label="Địa chỉ"></Descriptions.Item>
                        <Descriptions.Item span={3} label="SĐT"></Descriptions.Item>
                        <Descriptions.Item span={3} label="Thời gian vận chuyển"></Descriptions.Item>
                    </Descriptions>
                    <h2>NỘI DUNG TRAO ĐỔI</h2>
                    <ChatWarranty/>
                </div>
            </div>
        </>
    )
}
export default WarrantyDetail
