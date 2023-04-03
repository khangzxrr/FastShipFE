import { Button, Input } from "antd";
import {AiFillDelete} from "react-icons/ai"
function TableRows({rowsData, deleteTableRows, handleChange}) {
    return(
        
        rowsData.map((data, index)=>{
            const {link, color,price, quantity}= data;
            return(

                <tr key={index}>
                <td>
               <Input value={link} onChange={(evnt)=>(handleChange(index, evnt))} name="link" className="form-control"/>
                </td>
                <td><Input value={color}  onChange={(evnt)=>(handleChange(index, evnt))} name="color" className="form-control"/> </td>
                <td><Input value={price}  onChange={(evnt)=>(handleChange(index, evnt))} name="price" className="form-control" /> </td>
                <td>
               <Input value={quantity} onChange={(evnt)=>(handleChange(index, evnt))} name="quantity" className="form-control"/>
                </td>
                <td>
                <button onClick={()=>(deleteTableRows(index))} style={{fontSize:20, border:'none', backgroundColor:'white'}} >
                        <AiFillDelete/>
                    </button></td>
                
            </tr>

            )
        })
   
    )
    
}

export default TableRows;