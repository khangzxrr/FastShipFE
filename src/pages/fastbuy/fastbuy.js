import { useDispatch } from "react-redux"
import FastBuyList from "../../component/fastbuy/FastBuyList"
import FastBuyMenu from "../../component/fastbuy/FastBuyMenu"
import FastBuySearch from "../../component/fastbuy/FastBuySearch"
import { useEffect } from "react"
import { getResellProductAction } from "../../features/getResellProduct/getResellProductAction"
import { useState } from "react"
const FastBuy = () => {

    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)

    const dispatch = useDispatch()

    function fetchResellProduct(pageIndex) {
        dispatch(getResellProductAction(0))
        .then(response => {
            setTotal(response.totalCount)
            setProducts(response.records)
        })
    }

    useEffect(() => {
        fetchResellProduct(0)
    }, [])

    return (
        <div className="container" style={{display:'flex', marginTop:'30px'}}>
            <div style={{width:'18%', marginRight:'2%'}}>
                <FastBuyMenu/>
            </div>
            <div style={{width:'80%'}}>
                <FastBuySearch/>
                <FastBuyList products={products} total={total} fetchResellProduct={fetchResellProduct}/>
            </div>
        </div>
    )
}
export default FastBuy