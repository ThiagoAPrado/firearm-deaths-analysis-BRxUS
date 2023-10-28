import { paragraphTypings } from "../typings/mainPageTypings"
import { frameGraphs } from "../graphs/graphConsts"

import TextBlock from "../components/TextBlock"
import GenericGraphComponent from "../graphs/genericGraphComponent"

import "../index.css"
import PageStructure from "../components/GenericPageStructure"

function Home() {

  return (
    <>
      <PageStructure >
        <div className="shadow-lg px-[2.5vw] py-[3vh] mx-[5vw] text-center mt-[2.5vh] bg-[white] md:mx-[10vw] lg:mx-[15vw] xl:mx-[20vw]">
          {
            paragraphTypings.map(e => {
              return (
                <TextBlock title={e.title} paragraph={e.paragraph} />
              )
            })
          }

        </div>
        <GenericGraphComponent title="BR x EUA" graphs={frameGraphs.USxBR}/>
        <GenericGraphComponent title="BR - Estados" graphs={frameGraphs.BR_STATES}/>
        <GenericGraphComponent title="EUA - Estados" graphs={frameGraphs.US_STATES}/>
        <GenericGraphComponent title="SÃO PAULO X CALIFÓRNIA" graphs={frameGraphs.USxBR_STATES}/>
      </PageStructure>
    </>
  )
}

export default Home
