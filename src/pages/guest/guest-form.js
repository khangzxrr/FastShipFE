import InputForm from "./InputForm"
import Map from "./Map"
const Form = () => {
    return (
        <div className='container'>
            <h2>Vui lòng giúp nhập một vài thông tin hoặc đăng nhập để chúng tôi có thể liên hệ lại với bạn</h2>
            <h1>ĐĂNG KÝ TÀI KHOẢN</h1>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '50%' }}>
                    <InputForm />
                </div>
                <div style={{width:'50%'}}>
                    <Map />
                </div>

            </div>
        </div>
    )
}
export default Form