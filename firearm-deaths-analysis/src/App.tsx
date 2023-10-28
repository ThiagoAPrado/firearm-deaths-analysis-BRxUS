import Docs from "./pages/Docs";
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Related from "./pages/Related";


function App() {

  return (
    <>
      <BrowserRouter > {/*basename={process.env.PUBLIC_URL} to run ongithub pages*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/related" element={<Related />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
