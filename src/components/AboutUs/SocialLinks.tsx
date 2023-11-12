import { SocialsLink } from "../../interfaces/interface"

export const SocialsLinkWidget = ({socials} : {socials: SocialsLink}) => {
    return (
            <a href={socials.link}>
                <div className="flex justify-start m-2 ml-0 gap-[0.5em] cursor-pointer items-center">
                    <div className="w-5 h-5">{socials.icon}</div>
                    <p className="visited:text-slate-900 text-slate-900">{socials.name}:</p><h1 className="font-semibold">{socials.nameAt}</h1>
                </div>
            </a>
    )
}