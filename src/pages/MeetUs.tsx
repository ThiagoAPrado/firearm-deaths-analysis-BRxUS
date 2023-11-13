import { SocialCard } from "../components/AboutUs/SocialCard";
import { ContentBox } from "../components/ContentBox";
import PageStructure from "../components/GenericPageStructure";
import { socialCardsTypings } from "../typings/aboutTypings";

function MeetUs() {
  return (
    <>
      <PageStructure>
        <ContentBox>
          Somos alunos do atual 4º semestre do curso de Ciência da Computação da Universidade Católica de Santos. Desenvolvemos essa página para fins de execução de Trabalho Discente Efetivo e para divulgação mais elaborada de dados para futuros trabalho de outros interessados
        </ContentBox>
        <ContentBox>
          <div className="grid grid-cols-1 2xl:grid-cols-2">
            {socialCardsTypings.map((e) => <div  className='my-4'><SocialCard socialCard={e} key={e.name + "_socialsCard"}/></div>)}
          </div>
        </ContentBox>
      </PageStructure>
    </>
  );
}

export default MeetUs;
