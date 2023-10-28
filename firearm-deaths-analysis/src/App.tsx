import Docs from "./pages/Docs";
import Home from "./pages/Home"
import References from "./pages/References";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter > {/*basename={process.env.PUBLIC_URL} to run ongithub pages*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/referencias" element={<References />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
