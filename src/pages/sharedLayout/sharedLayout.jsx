import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/header";

const SharedLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default SharedLayout;
