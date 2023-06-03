import InputForm from "./InputForm"
import Map from "./Map"
const GuestRegisterForm = () => {
    return (
        <div className='container'>
            <h2>Vui lòng giúp chúng tôi nhập một vài thông tin hoặc đăng nhập để chúng tôi có thể liên hệ lại với bạn</h2>
            <h1>ĐĂNG KÝ TÀI KHOẢN</h1>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '50%', marginRight:'2%' }}>
                    <InputForm />
                </div>
                <div style={{width:'48%'}}>
                    <Map />
                </div>

            </div>
        </div>
    )
}
export default GuestRegisterForm