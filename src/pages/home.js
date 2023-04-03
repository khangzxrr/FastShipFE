import ContentMiddle from "../component/home/ContentMiddle"
import { ContentUpper } from "../component/home/ContentUpper"

const HomePage = () => {
    return (
        <>
            <div style={{ background: "url(/bg.jpg) 0 repeat-x" }}>
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