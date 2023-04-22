import "../component/login/login.css"
import LoginForm from "../component/login/LoginForm";

const Login = () => {
    return (
        <div className="login">
            <div>
                <LoginForm/>
            </div>
            <div className="imgLogin">
                <img src={("login.jpg")} style={{width:"650px", height:"auto", borderRadius:"27px", margin:"60px 0px", position:"absolute"}}/>
            </div>
        </div>
    );
};

export default Login;
