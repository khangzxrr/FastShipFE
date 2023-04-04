import TableRows from "./TableRows"
import React, { useState } from "react";
import { Button, Input } from "antd";
import "../addpd/addpd.css"
import { AiFillDelete } from "react-icons/ai"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function AddDeleteTableRows() {
    const requestProduct = useSelector(state => state.requestProduct)

    const navigate = useNavigate()

    console.log(requestProduct)

    function handleAddNewProduct(){
        navigate('/home')
    }

    return (
        <div>
            <table className="addtb" style={{ width: '100%', marginTop: '20px' }}>
                <tbody>
                    <tr>
                        <th style={{ width: '40%' }}>LINK HOẶC TÊN SẢN PHẨM</th>
                        <th>LOẠI</th>
                        <th>TÊN</th>
                        <th>GIÁ SẢN PHẨM</th>
                        <th>SỐ LƯỢNG</th>
                        <th>CÓ BẢO HÀNH</th>
                        <th>CÓ ĐỔI TRẢ</th>
                    </tr>

                    {
                        requestProduct.products.map((product, index) => {
                            return (
                                <tr>
                                    <td><Input defaultValue={product.productURL} /></td>
                                    <td><Input defaultValue={product.productCategory.productCategoryName} /></td>
                                    <td><Input defaultValue={product.productName} /></td>
                                    <td><Input defaultValue={product.productPrice + '$'} /></td>
                                    <td><Input defaultValue={'1'} /></td>
                                    <td><Input defaultValue={product.productWarrantable ? "Có" : "Không"} /></td>
                                    <td><Input defaultValue={product.productReturnable ? "Có" : "Không"} /></td>
                                    <td>
                                        <button style={{ fontSize: 20, border: 'none', backgroundColor: 'white' }} ><AiFillDelete /></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
            <Button type="primary" style={{ marginLeft: '250px', color: 'black', marginBottom: '100px', fontWeight: 600 }}  onClick={handleAddNewProduct}>THÊM SẢN PHẨM KHÁC</Button>
        </div>

    )

}
export default AddDeleteTableRows