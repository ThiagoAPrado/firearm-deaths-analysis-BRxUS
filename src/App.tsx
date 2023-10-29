import Docs from "./pages/Docs";
import Home from "./pages/Home"
import References from "./pages/References";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter > {/*basename={process.env.PUBLIC_URL} to run ongithub pages*/}
        <Routes>
          <Route path="/firearm-deaths-analysis-BRxUS/" element={<Home />} />
          <Route path="/firearm-deaths-analysis-BRxUS/docs" element={<Docs />} />
          <Route path="/firearm-deaths-analysis-BRxUS/referencias" element={<References />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
