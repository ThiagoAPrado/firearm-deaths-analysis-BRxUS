import { SocialCard } from "../components/AboutUs/SocialCard";
import { ContentBox } from "../components/ContentBox";
import PageStructure from "../components/GenericPageStructure";
import { socialCardsTypings } from "../typings/aboutTypings";

function MeetUs() {
  return (
    <>
      <PageStructure>
        <ContentBox>
          <span className="text-[1.4rem]" aria-label="Título da páginha sobre nós">
            Somos alunos do atual 4º semestre do curso de Ciência da Computação da Universidade Católica de Santos. Desenvolvemos essa página para fins de execução de Trabalho Discente Efetivo e para divulgação mais elaborada de dados para futuros trabalho de outros interessados.
          </span>
        </ContentBox>
        <ContentBox>
          <div>
            {socialCardsTypings.map((e) => <div><SocialCard socialCard={e} key={e.name + "_socialsCard"} aria-label={"Card de introdução " + e.name}/><hr /></div>)}
          </div>
        </ContentBox>
      </PageStructure>
    </>
  );
}

export default MeetUs;
