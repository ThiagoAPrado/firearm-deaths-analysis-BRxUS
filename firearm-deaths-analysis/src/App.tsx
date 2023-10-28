import TextBlock from "./components/TextBlock"
import TitleBlock from "./components/TitleBlock"
import { mainPageTypings } from "./typings/mainPageTypings"

import "./index.css"

function App() {

  return (
    <>
      <TitleBlock />
      <div className="shadow-lg mx-[20vw] my-[2.75vh] bg-slate-100 ">
        {
          mainPageTypings.map(e => {
            return (
              <TextBlock title={e.title} textObj={e.textObj} />
            )
          })
        }
      </div>
    </>
  )
}

export default App
