import { Container } from "react-bootstrap"
import Home from "./Home"

function Main({onShow}) {
  return (
    <main className="py-5 mt-5 bg-light bg-image">
        <Container>
            <Home onShow={onShow} />
        </Container>
    </main>
  )
}

export default Main