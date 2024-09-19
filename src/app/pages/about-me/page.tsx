import HeaderComponent from "../../components/header/header"
import TextContent from "./textContent"
import ScrollingBar from "./scrollingBar"
import ImageSection from "./imageSection"

export default function Page() {
    return (
        <div>
            <HeaderComponent/>
            <div className="flex flex-row">
                <TextContent/>
                <ScrollingBar/>
            </div>
            <ImageSection/>
        </div>
    )
}