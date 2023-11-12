import { paragraphTypings } from "../typings/mainPageTypings"

import TextBlock from "../components/TextBlock"
import GenericGraphComponent from "../components/graphs/genericGraphComponent"

import "../index.css"
import PageStructure from "../components/GenericPageStructure"
import { ContentBox } from "../components/ContentBox"
import { frameGraphs } from "../components/graphs/graphConsts"
function Home() {

  return (
    <>
      <PageStructure >
        <ContentBox>
          <TextBlock title={paragraphTypings.title} paragraph={paragraphTypings.paragraph}>
            <img className="w-[8rem] my-[2vh]" src="public\image\brasil_eua.png" alt="Bandeira Brasil e Estados Unidos" />
          </ TextBlock>
        </ContentBox>
        <GenericGraphComponent title="BR x EUA" graphs={frameGraphs.USxBR} altText="Brasil e Estados Unidos "/>
        <GenericGraphComponent title="BR - Estados" graphs={frameGraphs.BR_STATES} altText="todos os estados do Brasil" />
        <GenericGraphComponent title="EUA - Estados" graphs={frameGraphs.US_STATES} altText="todos os estados dos Estados Unidos"/>
        <GenericGraphComponent title="SÃO PAULO X CALIFÓRNIA" graphs={frameGraphs.USxBR_STATES} altText="São Paulo e Califórnia"/>
      </PageStructure>
    </>
  )
}

export default Home
