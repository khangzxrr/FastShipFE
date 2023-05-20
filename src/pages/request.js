import RequestChat from "../component/request/RequestChat";
import RequestInfo from "../component/request/RequestInfo";
import RequestProducts from "../component/request/RequestProducts";
import "../component/request/request.css"
import { Button } from "antd";
const Request = () => {
    return (
        <div className="container" style={{display:'flex',marginTop:'20px', marginBottom:'20px'}}>
            <div style={{width:'60%', marginRight:'2%', padding:'0px 20px 30px 20px'}}>
                <h2>ORDER YOUR PRODUCTS</h2>
                <RequestProducts />
                <RequestProducts/>
                <h3 style={{textAlign:'right', marginRight:'20px'}}>TOTAL:20000</h3>
                <Button type="primary" style={{color:'black'}}>ORDER NOW</Button>
                <Button type="primary" style={{color:'black', backgroundColor:'red', marginLeft:'10px'}}>CANCEL</Button>
            </div>
            <div style={{width:'38%', padding:'0px 10px 10px 10px'}}>
                <h2>THÔNG TIN REQUEST</h2>
                <RequestInfo/>
                <h2>NỘI DUNG TRAO ĐỔI</h2>
                <RequestChat />
            </div>
        </div>
    );
};

export default Request