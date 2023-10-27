import ContextTextBlock from "./components/ContextTextBlock"
import { mainPageTypings } from "./typings/mainPageTypings"

function App() {

  return (
    <>
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
