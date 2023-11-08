import { frameGraphs, baseFrameUrl } from "./graphConsts";

const GenericGraphComponent = ({ graphs, title, altText }: { graphs: frameGraphs, title: string, altText:string }) => {
	
	return (
		<div className="flex flex-col justify-center items-center mx-[5vw] md:mx-[10vw] lg:mx-[15vw] xl:mx-[20vw]">
			<h4 className="text-[1.2rem] font-bold text-slate-800 mt-[5vh] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.5rem]">{title}</h4>
			<iframe
				title={`Gráfico de comparação entre ${altText}`}
				src={baseFrameUrl + graphs}
				className="w-[calc(100%+18px)] h-[60vh]"
			/>
		</div>

	)
}

export default GenericGraphComponent