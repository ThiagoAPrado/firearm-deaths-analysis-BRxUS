/* eslint-disable react-hooks/rules-of-hooks */
import { useLocation, useNavigate } from "react-router"
import { MenuItemInterface } from "../interfaces/interface";

const interestMenu = ({ menus }: { menus: MenuItemInterface[] }) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="flex ml-[0.3vw] gap-[0.3vw]">
            {
                menus.map((e) => {
                    return (
                        <button className={`flex justify-center items-center h-[2vw] px-[0.9vw] text-[1vw] tracking-wider font-bold rounded-[0_0_0.4vw_.4vw] shadow-bo cursor-pointer ${(location.pathname == e.path ? 'bg-orange-500 hover:bg-orange-500' : 'bg-slate-800 hover:bg-slate-600')} text-white `}
                            key={"navigate-btn-" + e.title}
                            onClick={() => { navigate(e.path) }}
                        >{e.title}</button>
                    )
                })
            }
        </div>

    )
}

export default interestMenu