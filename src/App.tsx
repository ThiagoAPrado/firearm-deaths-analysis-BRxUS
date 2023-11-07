import Docs from "./pages/Docs";
import Home from "./pages/Home"
import References from "./pages/References";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const basePath = '' //'/firearm-deaths-analysis-BRxUS/';

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path={basePath} element={<Home />} />
          <Route path={basePath + 'docs'} element={<Docs />} />
          <Route path={basePath + 'referencias'} element={<References />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
