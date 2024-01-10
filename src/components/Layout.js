import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Background from "./Background";
import Footer from "./Footer";

const Layout = ({ children }) => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);
	return (
		<div className=' flex flex-col h-screen'>
			<Nav />
			<Background />
			<div className={`flex-1 flex items-center flex-col w-full  ${isLoaded ? "opacity-100 transition-opacity duration-[2000ms]" : "opacity-0"}`}>
				{children}
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
