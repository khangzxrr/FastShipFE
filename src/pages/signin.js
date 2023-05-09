import "../component/login/login.css"
import ResgisterForm from "../component/register/Signin";
const Signin = () => {
    return(
        <>
            <div className="login" style={{display:'flex', height:"600px"}}>
            <div>
                <ResgisterForm/>
            </div>
            <div>
                <img src={("signin.jpg")} style={{width:"650px", height:"450px", borderRadius:"27px", margin:"60px 0px", position:"absolute"}}/>
            </div>
        </div>
        </>
    )
}
export default Signin;
