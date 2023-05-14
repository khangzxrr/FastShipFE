import React from 'react'

export default function ShipperOrder() {
    return (
        <>
            <h2>DANH SÁCH ĐƠN HÀNG ĐÃ NHẬN</h2>
            <table className='shippertable'>
                <tr>
                    <th>OrderId</th>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Ernst Handel</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                    <td>Roland Mendel</td>
                </tr>
            </table>
        </>
    )
}
