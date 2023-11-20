import { paragraphTypings } from "../typings/mainPageTypings"

import TextBlock from "../components/TextBlock"
import GenericGraphComponent from "../components/Graphs/genericGraphComponent"

import "../index.css"
import PageStructure from "../components/GenericPageStructure"
import { ContentBox } from "../components/ContentBox"
import { frameGraphs } from "../components/Graphs/graphConsts"

function Home() {
  return (
    <>
      <PageStructure >
        <ContentBox>
          <TextBlock titleAriaLabel={paragraphTypings.titleAriaLabel} paragraphAriaLabel={paragraphTypings.paragraphAriaLabel} title={paragraphTypings.title} paragraph={paragraphTypings.paragraph}>
            <img aria-label="Imagem bandeiras Estados Unidos e Brasil" className="w-[8rem] my-[2vh]" src="https://raw.githubusercontent.com/ThiagoAPrado/firearm-deaths-analysis-BRxUS/gh-pages/image/brasil_eua.png" alt="Bandeira Brasil e Estados Unidos" />
          </TextBlock>
        </ContentBox>
        <GenericGraphComponent title="BR x EUA" graphs={frameGraphs.USxBR} altText="Brasil e Estados Unidos " />
        <GenericGraphComponent title="BR - Estados" graphs={frameGraphs.BR_STATES} altText="todos os estados do Brasil" />
        <GenericGraphComponent title="EUA - Estados" graphs={frameGraphs.US_STATES} altText="todos os estados dos Estados Unidos" />
        <GenericGraphComponent title="SÃO PAULO X CALIFÓRNIA" graphs={frameGraphs.USxBR_STATES} altText="São Paulo e Califórnia" />
        <ContentBox>
          <h1 className="text-[1.4rem] font-bold text-slate-800 md:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.7rem]">Conclusão</h1>
          <div className="text-start mt-[2vh]">
            <span className="text-[1.2rem] text-slate-800 md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.5rem]">
              A partir da manipulação dos dados e consequente geração dos gráficos, é possível observar que, mesmo que o Brasil não disponha de uma cultura armamentista forte como a dos EUA, ele apresenta ainda muito mais registros de óbitos por armas de fogo entre os anos de 1999 e 2019 que o outro país. Portanto, pode-se concluir inicialmente que a facilitação no acesso às armas de fogo a civis não representa o único fator responsável para essa diferença na quantidade de mortes causadas por armas de fogo entre as nações estudadas. Embora as pesquisas, estudos e análises aqui realizadas não tenham resultado em conclusões tão assertivas a respeito do tema, elas permitiram, no entanto, a elaboração de gráficos claros e precisos e a consequente disponibilização desses para visualização pública em uma aplicação web, gerando, portanto, uma útil ferramenta para os interessados em se aprofundar e continuar os estudos do tema.
            </span>
          </div>
        </ContentBox>
      </PageStructure>
    </>
  )
}

export default Home
