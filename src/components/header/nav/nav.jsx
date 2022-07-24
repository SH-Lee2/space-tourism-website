import React from "react";
import { NavLink } from "react-router-dom";



const Nav = () => {
    const classes =
	"cursor-pointer flex pb-6 tracking-[2px] hover:border-b-[3px] hover:border-gray";
	const activeClass = `${classes} border-b-[3px] !border-white`;
    const chapterNumber = "hidden text-white font-bold mr-2 xl:block"
	return (
			<nav className="relative z-1 h-full pt-6 px-8 flex justify-center items-center md:bg-lightGray xl:backdrop-blur-xl xl:min-w-[840px]">
				<ul className="hidden text-white space-x-12 md:flex">
					<li>
						<NavLink
							to="home"
							className={({ isActive }) =>
								isActive ? activeClass : classes
							}
						>
							<span className={chapterNumber}>
								00
							</span>
							HOME
						</NavLink>
					</li>
					<li>
						<NavLink
							to="destination"
							className={({ isActive }) =>
								isActive ? activeClass : classes
							}
						>
							<span className={chapterNumber}>
								01
							</span>
							DESTINATION
						</NavLink>
					</li>
					<li>
						<NavLink
							to="crew"
							className={({ isActive }) =>
								isActive ? activeClass : classes
							}
						>
							<span className={chapterNumber}>
								02
							</span>
							CREW
						</NavLink>
					</li>
					<li>
						<NavLink
							to="technology"
							className={({ isActive }) =>
								isActive ? activeClass : classes
							}
						>
							<span className={chapterNumber}>
								03
							</span>
							TECHNOLOGY
						</NavLink>
					</li>
				</ul>
			</nav>
	);
};

export default Nav;
