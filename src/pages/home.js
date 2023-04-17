import ContentMiddle from "../component/home/ContentMiddle"
import { ContentUpper } from "../component/home/ContentUpper"

const HomePage = () => {
    return (
        <>
            <div style={{ background: "url(/homebg11.jpg) 0 no-repeat", backgroundSize:'100%'}}>
                <div>
                    <ContentUpper />
                </div>
            </div>
            <div>
                <ContentMiddle />
            </div>
        </>
    )
}
export default HomePage