import TextBlock from "./components/TextBlock"
import TitleBlock from "./components/TitleBlock"
import { paragraphTypings, titleTypings } from "./typings/mainPageTypings"

import "./index.css"

function App() {

  return (
    <>
      {
        titleTypings.map(e => {
          return (
            <TitleBlock title={e.title} subTitle={e.subTitle} />
          )
        })
      }
      <div className="shadow-lg rounded-xl px-[2.5vw] py-[3vh] mx-[5vw] text-center my-[2.75vh] bg-[white] md:mx-[10vw] lg:mx-[15vw] xl:mx-[20vw]">
        {
          paragraphTypings.map(e => {
            return (
              <TextBlock title={e.title} paragraph={e.paragraph} />
            )
          })
        }
      </div>
    </>
  )
}

export default App
