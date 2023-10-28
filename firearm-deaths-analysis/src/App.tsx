import ContextTextBlock from "./components/ContextTextBlock"
import TitleBlock from "./components/TitleBlock"
import { mainPageTypings } from "./typings/mainPageTypings"

import "./index.css"

function App() {

  return (
    <>
      <TitleBlock />
      <div className="m-20 p-20 bg-slate-200">
        {
          mainPageTypings.map(e => {
            return (
              <ContextTextBlock title={e.title} textObj={e.textObj} />
            )
          })
        }
      </div>
    </>
  )
}

export default App
