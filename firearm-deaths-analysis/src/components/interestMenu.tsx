/* eslint-disable react-hooks/rules-of-hooks */
import { useLocation, useNavigate } from "react-router"
import { MenuItemInterface } from "../interfaces/interface";

const interestMenu = ({menus} : {menus: MenuItemInterface[]}) => {
    const navigate = useNavigate();
    const location = useLocation();

	return (
		<div className="flex gap-[0.3vw]">
            {
                menus.map((e) => {
                    return <h3 className={`flex justify-center items-center h-[2vw] w-[5vw] pt-[.10vw] text-[1vw] rounded-[0_0_0.6vw_.6vw] shadow-bo cursor-pointer ${(location.pathname == e.path ? 'bg-red-700' : 'bg-slate-800')} text-white`} key={"navigate-btn-" + e.title} onClick={() => {navigate(e.path)}}>{e.title}</h3>
                })
            }
        </div>

	)
}

export default interestMenu