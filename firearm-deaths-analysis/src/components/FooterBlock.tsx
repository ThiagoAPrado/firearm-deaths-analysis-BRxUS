const FooterBlock = () => {
    return (
        <div className="grid grid-rows-3 text-center gap-[2vw] px-[5vw] py-[2.5vw] bg-slate-600 mt-10 md:grid-cols-3">
            <div className="flex flex-col items-start justify-start text-start">
                <h1 className="text-[1.4rem] font-bold text-white md:text-[1.3rem]">Repositorios do projeto</h1>
                <a className="text-[1.2rem] text-white underline md:text-[1.4rem] lg:text-[1rem]" href="https://github.com/ThiagoAPrado/firearm-deaths-analysis-BRxUS">https://github.com/ThiagoAPrado/firearm-deaths-analysis-BRxUS</a>
                <a className="text-[1.2rem] text-white underline md:text-[1.4rem] lg:text-[1rem]" href="https://github.com/vicEduDev/firearm-deaths-analysis-BRxUS-image-bank">https://github.com/vicEduDev/firearm-deaths-analysis-BRxUS-image-bank</a>
            </div>
            
            <div className="flex flex-col items-start justify-start text-start">
                <h1 className="text-[1.4rem] font-bold text-white md:text-[1.3rem]">Datasets Originais</h1>
                <a className="text-[1.2rem] text-white underline md:text-[1.4rem] lg:text-[1rem]" href="https://data.world/nkrishnaswami/gun-deaths-by-county">Gun deaths by County</a>
                <a className="text-[1.2rem] text-white underline md:text-[1.4rem] lg:text-[1rem]" href="https://www.ipea.gov.br/atlasviolencia/filtros-series/5/bitos-por-armas-de-fogo">IPEA - Óbitos por Armas de Fogo</a>
            </div>

            <div className="flex flex-col items-start justify-start text-start">
                <h1 className="text-[1.4rem] font-bold text-white md:text-[1.3rem]">Sobre nos</h1>
                <p className="text-[1.2rem] text-white md:text-[1.4rem] lg:text-[1rem] items-start justify-start text-start">Somos alunos do atual 4º semestre do curso de Ciência da Computação da Universidade Católica de Santos. Desenvolvemos essa página para fins de execução de Trabalho Discente Efetivo e para divulgação mais elaborada de dados para futuros trabalho de outros interessados</p>
            </div>
        </div>
    )
}

export default FooterBlock