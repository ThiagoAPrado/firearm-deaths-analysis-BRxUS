/* eslint-disable react-hooks/rules-of-hooks */
import { useLocation, useNavigate } from "react-router"
import { MenuItemInterface } from "../interfaces/interface";
import { basePath } from "../constants";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

const interestMenu = ({ menus }: { menus: MenuItemInterface[][] }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
	const [toggleMenu, setToggleMenu] = useState<boolean>(false);

	useEffect(() => {
		const watchResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', watchResize);

		return () => {
			window.removeEventListener('resize', watchResize);
		};
	}, []);

	return (
		<>
			{windowWidth >= 768 &&
				<div className="flex justify-items-center justify-between gap-[0.35em]">
					<div className="flex justify-start ml-[5vw] gap-[0.35em] md:ml-[10vw] lg:ml-[15vw] xl:ml-[20vw]">
						{
							menus[0].map((e) => {
								return (
									<button className={`flex items-center px-[2.5vw] py-[1vh] text-[1rem] lg:text-[1.1rem] tracking-wider font-bold rounded-[0_0_.75rem_.75rem] shadow-bo cursor-pointer ${(location.pathname == (basePath + e.path) ? 'bg-red-800 hover:bg-red-800' : 'bg-slate-800 hover:bg-slate-600')} text-white `}
										key={"navigate-btn-" + e.title}
										onClick={() => { navigate(basePath + e.path) }}
									>{e.title}</button>
								)
							})
						}
					</div>
					<div className="flex mr-[5vw] gap-[0.35em] md:mr-[10vw] lg:mr-[15vw] xl:mr-[20vw] ">
						{
							menus[1].map((e) => {
								return (
									<button className={`flex justify-center items-center px-[2.5vw] py-[1vh] text-[1rem] lg:text-[1.1rem] tracking-wider font-bold rounded-[0_0_.75rem_.75rem] shadow-bo cursor-pointer ${(location.pathname == (basePath + e.path) ? 'bg-red-800 hover:bg-red-800' : 'bg-slate-800 hover:bg-slate-600')} text-white `}
										key={"navigate-btn-" + e.title}
										onClick={() => { navigate(basePath + e.path) }}
									>{e.title}</button>
								)
							})
						}
					</div>
				</div>
			}

			{windowWidth <= 767 &&
				<>
					<div className="z-10 sticky top-0 pl-[calc(5vw-6px)] bg-slate-400">
						<IoMenu size={45} onClick={() => setToggleMenu(prevToggleMenu => !prevToggleMenu)} />
					</div>

					{toggleMenu &&
						<div className="z-10 sticky top-[45px] bg-gray-300 py-[3vh]">
							{
								menus[0].map((e) => {
									return (
										<button className={`flex items-center px-[5vw] py-[1vh] tracking-wider ${(location.pathname == e.path ? 'font-extrabold text-[1.2rem]' : 'font-semibold text-[1.1rem]')}`}
											key={"navigate-btn-" + e.title}
											onClick={() => { navigate(basePath + e.path) }}
										>{e.title}</button>
									)
								})
							}
							{
								menus[1].map((e) => {
									return (
										<button className={`flex items-center px-[5vw] py-[1vh] tracking-wider ${(location.pathname == e.path ? 'font-extrabold text-[1.2rem]' : 'font-semibold text-[1.1rem]')}`}
											key={"navigate-btn-" + e.title}
											onClick={() => { navigate(basePath + e.path) }}
										>{e.title}</button>
									)
								})
							}
						</div>
					}
				</>
			}
		</>
	)
}

export default interestMenu