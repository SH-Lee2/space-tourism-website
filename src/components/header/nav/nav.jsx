import React from "react";
import { NavLink } from "react-router-dom";
import hamburgerIcon from "../../../../src/assets/shared/icon-hamburger.svg";
const Nav = () => {
	const classes =
		"cursor-pointer h-full flex items-center tracking-[2px] hover:border-b-[3px] hover:border-gray";
	const activeClass = `${classes} border-b-[3px] !border-white`;
	const chapterNumber = "hidden text-white font-bold mr-2 xl:block";
	return (
		<nav className=" z-1 h-[80px] px-6 flex justify-center items-center md:bg-lightGray lg:backdrop-blur-xl xl:minno0584-w-[840px]">
			<button className="md:hidden">
				<img src={hamburgerIcon} alt="mobile menu icon" />
			</button>
			<ul className="hidden h-full text-white space-x-12 md:flex ">
				<li>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? activeClass : classes
						}
					>
						<span className={chapterNumber}>00</span>
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
						<span className={chapterNumber}>01</span>
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
						<span className={chapterNumber}>02</span>
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
						<span className={chapterNumber}>03</span>
						TECHNOLOGY
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
