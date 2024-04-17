import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dos" element={<h1>Hola Mundo 2</h1>} />
            </Routes>
        </>
    )
}

export default App