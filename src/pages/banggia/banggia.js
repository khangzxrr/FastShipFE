import { Skeleton, Table } from "antd"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getPriceTableAction } from "../../features/getPriceTable/getPriceTableAction"
const BangGia = () => {

    const [loading, setLoading] = useState(false)
    const [priceTableData, setPriceTableData] = useState([])

    const dispatch = useDispatch()

    const columns = [
        {
            title: 'Phụ thu',
            dataIndex: 'addtionalCostDescription',
            key: 'addtionalCostDescription',
          },
          {
            title: 'Phí xử lí',
            dataIndex: 'processCostDescription',
            key: 'processCostDescription',
          }
    ]

    useEffect(() => {
        setLoading(true)
        dispatch(getPriceTableAction())
        .then(resp => {
            setPriceTableData(priceTableData)
        })
        .catch(() => {

        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    return (
        <div className="container">
            <h2>Bảng giá cước dịch vụ</h2>
            {
                loading ? <Skeleton /> : <Table columns={columns} dataSource={priceTableData} />
            }
        </div>
    )
}
export default BangGia