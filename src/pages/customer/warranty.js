import ProductWarranty from "../../component/warranty/ProductWarranty";
import WarrantyPage from "../../component/warranty/Warranty";
const Warranty = () => {
    return (
        <div className="container" style={{display:'flex',marginTop:'20px', marginBottom:'20px'}}>
            <div style={{width:'60%', marginRight:'2%', padding:'0px 20px 30px 20px'}}>
                <h2>THÔNG TIN SẢN PHẨM</h2>
                <ProductWarranty/>
            </div>
            <div style={{width:'38%', padding:'0px 10px 10px 10px'}}>
                <h2>NỘI DUNG YÊU CẦU</h2>
                <WarrantyPage/>
            </div>
        </div>
    )
}
export default Warranty
