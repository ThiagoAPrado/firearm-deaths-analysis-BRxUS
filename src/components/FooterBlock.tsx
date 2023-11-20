const FooterBlock = () => {
	return (
		<div className="flex flex-col gap-[15vh] text-center px-[5vw] py-[5vh] mt-[5vh] bg-slate-600 lg:grid grid-cols-3">
			<div className="flex flex-col items-start justify-start text-start">
				<h1 className="text-[1.5rem] font-bold text-white">Repositórios do projeto</h1>
				<ul>
					<li className="text-[1.2rem] mt-[1.5vh]"><a href="https://github.com/ThiagoAPrado/firearm-deaths-analysis-BRxUS">ThiagoAPrado</a></li>
					
					<li className="text-[1.2rem] mt-[1.5vh]"><a href="https://github.com/vicEduDev/firearm-deaths-analysis-BRxUS-image-bank">vicEduDev</a></li>
					
				</ul>
			</div>

			<div className="flex flex-col items-start justify-start text-start gap-[.5vh]">
				<h1 className="text-[1.5rem] font-bold text-white">Datasets originais</h1>
				<a className="text-[1.1rem] text-white underline" href="https://data.world/nkrishnaswami/gun-deaths-by-county">Gun deaths by County</a>
				<a className="text-[1.1rem] text-white underline" href="https://www.ipea.gov.br/atlasviolencia/filtros-series/5/bitos-por-armas-de-fogo">IPEA - Óbitos por Armas de Fogo</a>
			</div>

			<div className="flex flex-col items-start justify-start text-start">
				<h1 className="text-[1.5rem] font-bold text-white">Sobre nós</h1>
				<p className="text-[1.1rem] text-white items-start justify-start text-start">Somos alunos do atual 4º semestre do curso de Ciência da Computação da Universidade Católica de Santos. Desenvolvemos essa página para fins de execução de Trabalho Discente Efetivo e para divulgação mais elaborada de dados para futuros trabalho de outros interessados</p>
			</div>
		</div>
	)
}

export default FooterBlock