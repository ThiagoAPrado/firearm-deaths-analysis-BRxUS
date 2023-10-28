/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuItemInterface } from "../interfaces/interface"
import { titleTypings } from "../typings/mainPageTypings"
import FooterBlock from "./FooterBlock"
import TitleBlock from "./TitleBlock"
import InterestMenu from "./interestMenu"

const menus: MenuItemInterface[] = [
    {
        title: "HOME",
        path: '/'
    },
    {
        title: "DOCS",
        path: '/docs'
    },
    {
        title: "REFERENCIAS",
        path: '/referencias'
    }
]

const PageStructure = ({children}: { children:any }) => {
    return (
        <>
            <TitleBlock title={titleTypings.title} subTitle={titleTypings.subTitle} />
            <InterestMenu menus={menus}/>
            <div className="-mt-10">
                {children}
            </div>
            <FooterBlock />
        </>
    )
}

export default PageStructure