import Docs from "./pages/Docs";
import Home from "./pages/Home"
import References from "./pages/References";
import Contact from "./pages/Contact";
import MeetUs from "./pages/MeetUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css"
import { basePath } from "./constants";

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path={basePath} element={<Home />} />
          <Route path={basePath + 'docs'} element={<Docs />} />
          <Route path={basePath + 'referencias'} element={<References />} />
          <Route path={basePath + 'contato'} element={<Contact />} />
          <Route path={basePath + 'sobre'} element={<MeetUs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
