/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuItemInterface } from "../interfaces/interface"
import Home from "../pages/Home"
import { titleTypings } from "../typings/mainPageTypings"
import FooterBlock from "./FooterBlock"
import TitleBlock from "./TitleBlock"
import InterestMenu from "./interestMenu"

const menus: MenuItemInterface[] = [
    {
        title: "HOME",
        element: <Home />,
        path: '/'
    },
    {
        title: "DOCS",
        element: <Home />,
        path: '/docs'
    },
    {
        title: "RELATED",
        element: <Home />,
        path: '/related'
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