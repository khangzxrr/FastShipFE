import TableRows from "./TableRows"
import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";
import "../addpd/addpd.css"
import { AiFillDelete } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeProduct } from "../../features/requestProduct/requestProductSlice";
import { AiOutlinePlusSquare } from "react-icons/ai";

function AddDeleteTableRows() {
    const requestProduct = useSelector(state => state.requestProduct)

    const navigate = useNavigate()
    const dispatch = useDispatch()


    useEffect(() => {
        if (requestProduct.products.length == 0) {
            navigate('/home')
            return
        }
    }, [requestProduct])


    function handleAddNewProduct() {
        navigate('/home')
    }

    function handleDeleteProduct(productIndex) {
        console.log("call handle")
        dispatch(removeProduct(productIndex))


        if (requestProduct.products.length == 0) {
            navigate("/home")
        }
    }
    

    return (
        <div>
            <table className="addtb" style={{ width: '100%', marginTop: '20px' }}>
                <tbody>
                    <tr>
                        <th style={{ width: '15%' }}>LINK SẢN PHẨM</th>
                        <th style={{ width: '15%' }}>LOẠI</th>
                        <th style={{ width: '30%' }}>TÊN</th>
                        <th style={{ width: '8%' }}>GIÁ</th>
                        <th style={{ width: '10%' }}>SỐ LƯỢNG</th>
                        <th style={{ width: '10%' }}>CÓ BẢO HÀNH</th>
                        <th style={{ width: '10%' }}>CÓ ĐỔI TRẢ</th>
                        <th><Button style={{ color: 'black', fontSize: 30, color: 'green', border: 'none', boxShadow: 'none', height: '40px' }} onClick={handleAddNewProduct}><AiOutlinePlusSquare /></Button></th>
                    </tr>

                    {
                        requestProduct.products.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td><Input readOnly defaultValue={product.productURL} /></td>
                                    <td><Input readOnly defaultValue={product.productCategory.productCategoryName} /></td>
                                    <td><Input readOnly defaultValue={product.productName} /></td>
                                    <td><Input readOnly defaultValue={product.productPrice + '$'} /></td>
                                    <td><Input readOnly type="number" defaultValue={product.quantity} /></td>
                                    <td><Input readOnly defaultValue={product.productWarrantable ? "Có" : "Không"} /></td>
                                    <td><Input readOnly defaultValue={product.productReturnable ? "Có" : "Không"} /></td>
                                    <td>
                                        <button style={{ fontSize: 20, border: 'none', backgroundColor: 'white', marginLeft: '13px' }} onClick={() => { handleDeleteProduct(index) }}><AiFillDelete /></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
            
        </div>
    )

}
export default AddDeleteTableRows