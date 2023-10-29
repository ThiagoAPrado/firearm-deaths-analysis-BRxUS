import { TitleBlockInterface } from "../interfaces/interface";

const TitleBlock = ({ title, subTitle }: TitleBlockInterface) => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-[1.5vh] px-[5vw] py-[3.5vh] bg-slate-800">
      <h1 className="text-[1.4rem] font-bold text-white md:text-[2rem]">{title}</h1>
      <h2 className="text-[1.2rem] text-white md:text-[1.4rem] lg:text-[1.6rem]">{subTitle}</h2>
    </div>
  )
}

export default TitleBlock