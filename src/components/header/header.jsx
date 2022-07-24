import React from "react";
import logo from "../../assets/shared/logo.svg";
import Nav from "./nav/nav";



const Header = () => {
	
	return (
		<header className="relative flex items-center justify-between xl:pt-6 ">
			<img src={logo} alt="logo" className="px-6 py-4 xl:px-16" />
			<div className="hidden h-[.5px] bg-gray w-1/2 -mr-4 z-10 xl:block"></div>
			<Nav/>
		</header>
	);
};

export default Header;
