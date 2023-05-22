import ProductWarranty from "../../component/warranty/ProductWarranty";
import WarrantyPage from "../../component/warranty/Warranty";
const Warranty = () => {
    return (
        <>
        <h1 style={{margin:'30px 5% 30px 5%'}}>YÊU CẦU BẢO HÀNH/ĐỔI TRẢ</h1>
        <div style={{display:'flex', width:'100%', padding:'0% 5%'}}>
            <div style={{width:'30%',padding:' 10px 0px',marginBottom:'40px',borderRadius:'10px', marginRight:'5%'}}>
                <h3>Thông tin sản phẩm</h3>
                <ProductWarranty/>
            </div>
            <div style={{width:'60%', boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',padding:' 10px 30px',marginBottom:'40px', borderRadius:'10px'}}>
            <h3>Phiếu yêu cầu</h3>
            <WarrantyPage />
            </div>
            
        </div>
        </>
        


    )
}
export default Warranty
