import RequestChat from "../component/request/RequestChat";
import RequestProducts from "../component/request/RequestProducts";
import "../component/request/request.css"
import { Button } from "antd";
const Request = () => {
    return (
        <div className="container" style={{display:'flex',marginTop:'20px', marginBottom:'20px'}}>
            <div style={{width:'60%', marginRight:'2%', boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px', padding:'0px 50px 30px 50px'}}>
                <h2>ORDER YOUR PRODUCTS</h2>
                <RequestProducts />
                <Button type="primary" style={{color:'black'}}>ORDER NOW</Button>
            </div>
            <div style={{width:'38%', padding:'0px 10px 10px 10px'}}>
                <h2>NỘI DUNG TRAO ĐỔI</h2>
                <RequestChat />
            </div>
        </div>
    );
};

export default Request