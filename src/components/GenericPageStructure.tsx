/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuItemInterface } from "../interfaces/interface"
import { titleTypings } from "../typings/mainPageTypings"
import FooterBlock from "./FooterBlock"
import TitleBlock from "./TitleBlock"
import InterestMenu from "./interestMenu"

const menus: MenuItemInterface[] = [
    {
        title: "HOME",
        path: '/firearm-deaths-analysis-BRxUS/'
    },
    {
        title: "DOCS",
        path: '/firearm-deaths-analysis-BRxUS/docs'
    },
    {
        title: "REFERÊNCIAS",
        path: '/firearm-deaths-analysis-BRxUS/referencias'
    }
]

const PageStructure = ({children}: { children:any }) => {
    return (
        <>
            <TitleBlock title={titleTypings.title} subTitle={titleTypings.subTitle} />
            <div>
                <a href="#main">Skip to main content</a>
            </div>
            <InterestMenu menus={menus}/>
            <div id="main">
                {children}
            </div>
            <FooterBlock />
        </>
    )
}

export default PageStructure