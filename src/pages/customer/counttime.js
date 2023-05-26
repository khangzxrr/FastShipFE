import { Statistic} from "antd"
const { Countdown } = Statistic;
const onChange = (val) => {
    if (typeof val === 'number' && 4.95 * 1000 < val && val < 5 * 1000) {
        console.log('changed!');
    }
};
const CountTime = () => {
    return (
        <div style={{width:'100%', textAlign:'center'}}>
                <Countdown value={Date.now() + 10 * 1000} onChange={onChange}/>
                <p>Đang cập nhật ...</p>
        </div>
    )
}
export default CountTime