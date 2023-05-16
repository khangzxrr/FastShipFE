import FastBuyList from "../component/fastbuy/FastBuyList"
import FastBuyMenu from "../component/fastbuy/FastBuyMenu"
import FastBuySearch from "../component/fastbuy/FastBuySearch"
const FastBuy = () => {
    return (
        <div className="container" style={{display:'flex', marginTop:'30px'}}>
            <div style={{width:'18%', marginRight:'2%'}}>
                <FastBuyMenu/>
            </div>
            <div style={{width:'80%'}}>
                <FastBuySearch/>
                <FastBuyList/>
            </div>
        </div>
    )
}
export default FastBuy