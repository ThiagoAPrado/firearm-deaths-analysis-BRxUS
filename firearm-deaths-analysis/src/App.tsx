import Home from "./Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter > {/*basename={process.env.PUBLIC_URL} to run ongithub pages*/}
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
