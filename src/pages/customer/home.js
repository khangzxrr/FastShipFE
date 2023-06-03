import { useNavigate } from "react-router-dom"
import ContentMiddle from "../../component/home/ContentMiddle"
import { ContentUpper } from "../../component/home/ContentUpper"
import { useSelector } from "react-redux"
import { useEffect } from "react"

const HomePage = () => {

    const navigate = useNavigate()
    const { roleName } = useSelector(state => state.login)

    useEffect(() => {
        if (roleName === "MANAGER"){
            navigate("/manager-home")
        } else
        if (roleName === "EMPLOYEE"){
            navigate("/employee-order")
        }
        if (roleName === "ADMIN"){
            navigate('/admin-home')
        }
    }, [roleName]);

    return (
        <>  
            <div style={{ background: "url(/homebg11.jpg) 0 no-repeat", backgroundSize:'100%', height:'700px'}}>
                <div>
                    <ContentUpper />
                </div>
            </div>
            <div>
                <ContentMiddle />
            </div>
        </>
    )
}
export default HomePage