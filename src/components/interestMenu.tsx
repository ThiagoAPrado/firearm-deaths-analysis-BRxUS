/* eslint-disable react-hooks/rules-of-hooks */
import { useLocation, useNavigate } from "react-router"
import { MenuItemInterface } from "../interfaces/interface";

const interestMenu = ({ menus }: { menus: MenuItemInterface[] }) => {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<div className="flex justify-start ml-[5vw] gap-[0.35em] md:ml-[10vw] lg:ml-[15vw] xl:ml-[20vw]">
			{
				menus.map((e) => {
					return (
						<button className={`flex justify-center items-center px-[2.5vw] py-[1vh] text-[1rem] lg:text-[1.1rem] tracking-wider font-bold rounded-[0_0_.75rem_.75rem] shadow-bo cursor-pointer ${(location.pathname == e.path ? 'bg-red-800 hover:bg-red-800' : 'bg-slate-800 hover:bg-slate-600')} text-white `}
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