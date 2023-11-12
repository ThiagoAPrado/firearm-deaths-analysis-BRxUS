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
        <div className="shadow-lg px-[2.5vw] py-[3vh] mx-[5vw] text-center mt-[2.75vh] bg-[white] md:mx-[10vw] lg:mx-[15vw] xl:mx-[20vw]">
          <TextBlock title={paragraphTypings.title} paragraph={paragraphTypings.paragraph}>
            <img className="w-[8rem] my-[2vh]" src="public\image\brasil_eua.png" alt="Bandeira Brasil e Estados Unidos" />
          </ TextBlock>
        </div>
        <GenericGraphComponent title="BR x EUA" graphs={frameGraphs.USxBR} altText="Brasil e Estados Unidos "/>
        <GenericGraphComponent title="BR - Estados" graphs={frameGraphs.BR_STATES} altText="todos os estados do Brasil" />
        <GenericGraphComponent title="EUA - Estados" graphs={frameGraphs.US_STATES} altText="todos os estados dos Estados Unidos"/>
        <GenericGraphComponent title="SÃO PAULO X CALIFÓRNIA" graphs={frameGraphs.USxBR_STATES} altText="São Paulo e Califórnia"/>
      </PageStructure>
    </>
  )
}

export default Home
