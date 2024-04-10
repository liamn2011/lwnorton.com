import React, { useEffect, useState } from "react";
import Nav from "./Nav/Nav";
import Background from "./Background/Background";
import Footer from "./Footer/Footer";

const navLinks = [
	{ title: "Home", path: "/" },
	{ title: "About", path: "/about" },
	{ title: "Projects", path: "/projects" },
	{ title: "Contact", path: "/contact" },
];

const Layout = ({ children }) => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);
	return (
		<div className=' flex flex-col h-screen'>
			<Nav navLinks={navLinks} />
			<Background />
			<div className={`flex-1 flex items-center flex-col w-full  ${isLoaded ? "opacity-100 transition-opacity duration-[2000ms]" : "opacity-0"}`}>
				{children}
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
