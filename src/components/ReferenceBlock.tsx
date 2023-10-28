import { ReferenceBlockInterface } from "../interfaces/interface"

const ReferenceBlock = ({references} : {references: ReferenceBlockInterface[]}) => {
    return (
        <div className="flex flex-col justify-start items-start gap-[1.5vh] text-start">
            <h1 className="text-[1.4rem] font-bold text-slate-800 md:text-[1.8rem] lg:text-[1.9rem] xl:text-[2rem]"> Referencias bibliograficas: </h1>
            {references.map(block => {
                return (
                    <>
                        <h2 className="text-[1.4rem] font-bold text-slate-800 md:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.7rem]">{block.blockTitle}:</h2>
                        {
                            block.references.map((e) => <div key={"reference-div-" + e.nameTitle}>
                                <h3>{e.nameTitle}. Disponivel em:<br/></h3>
                                <a className="text-gray-900 underline visited:text-purple-500" href={e.link}>&lt;{e.link}&gt;</a>. Acesso em: {e.access}
                                <hr className="mt-[1vw] w-[50vw]" />
                            </ div>)
                        }
                    </>
                )
            })
            }
        </div>
    )
}

export default ReferenceBlock