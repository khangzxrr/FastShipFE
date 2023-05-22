import AddContact from "../../component/addpd/AddContact"
import AddProducts from "../../component/addpd/AddProducts"
import { Button } from "antd"
const Add = () =>{
    return(
        <div>
            <AddProducts/>
            <AddContact/>
            <Button type="primary" style={{ width: '27%', left: '5%', color: 'black', fontWeight: 600, margin: '5px 0px' }} >YÊU CẦU BÁO GIÁ</Button>
        </div>
    )
}
export default Add