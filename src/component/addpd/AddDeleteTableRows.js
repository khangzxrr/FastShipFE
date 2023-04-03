import TableRows from "./TableRows"
import React, { useState } from "react";
import { Button, Input } from "antd";
import "../addpd/addpd.css"
import {AiFillDelete} from "react-icons/ai"
function AddDeleteTableRows() {


    const [rowsData, setRowsData] = useState([]);

    const addTableRows = () => {

        const rowsInput = {
            link: '',
            color: '',
            price: '',
            quantity: '',
        }
        setRowsData([...rowsData, rowsInput])

    }
    const deleteTableRows = (index) => {
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
    }

    const handleChange = (index, evnt) => {

        const { name, value } = evnt.target;
        const rowsInput = [...rowsData];
        rowsInput[index][name] = value;
        setRowsData(rowsInput);



    }
    return (
        <div>
            <table className="addtb" style={{ width: '100%', marginTop:'20px' }}>
                <tr> 
                    <th style={{width:'40%'}}>LINK HOẶC TÊN SẢN PHẨM</th>
                    <th>MÀU SẮC</th>
                    <th>GIÁ SẢN PHẨM</th>
                    <th>SỐ LƯỢNG</th>
                </tr>
                <tr>
                    <td><Input defaultValue={'https://minhtuanmobile.com/iphone-14-pro-max/'}/></td>
                    <td><Input defaultValue={'đen'}/></td>
                    <td><Input defaultValue={'1.200'}/></td>
                    <td><Input defaultValue={'1'}/></td>
                    <td><button style={{fontSize:20, border:'none', backgroundColor:'white'}} >
                        <AiFillDelete/>
                    </button></td>
                </tr>
                <tr>
                    <td><Input defaultValue={'https://minhtuanmobile.com/iphone-14-pro-max/'} /></td>
                    <td><Input defaultValue={'đen'}/></td>
                    <td><Input defaultValue={'1.200'}/></td>
                    <td><Input defaultValue={'1'}/></td>
                    <td><button style={{fontSize:20, border:'none', backgroundColor:'white'}} >
                        <AiFillDelete/>
                    </button></td>
                </tr>
                <tbody>
                    <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                </tbody>
            </table>
            <Button type="primary" style={{ marginLeft: '250px', color: 'black' , marginBottom:'100px', fontWeight:600}} onClick={addTableRows} >THÊM SẢN PHẨM KHÁC</Button>
        </div>

    )

}
export default AddDeleteTableRows