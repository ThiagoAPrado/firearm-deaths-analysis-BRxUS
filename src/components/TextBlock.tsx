import { ParagraphBlockInterface } from "../interfaces/interface";

const ContextTextBlock = ({ title, paragraph, children }: ParagraphBlockInterface) => {
  return (
    <div className="flex flex-col justify-center items-center gap-[1.5vh]">
      <h3 className="text-[1.4rem] font-bold text-slate-800 md:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.7rem]">{title}</h3>
      <p className="text-[1.2rem] text-slate-800 md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.5rem]">{paragraph}</p>
      {children}
    </div>
  )
}

export default ContextTextBlock
