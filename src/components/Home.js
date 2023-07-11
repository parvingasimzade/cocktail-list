import List from "./List"
import Random from "./Random"

function Home({onShow}) {
    return (
        <div>
            <Random />
            <List onShow={onShow} />
        </div>
    )
}

export default Home