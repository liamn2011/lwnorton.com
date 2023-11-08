import * as React from "react";
import Nav from "./Nav";
import Background from "./Background";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<div className=' m-0 p-0 flex flex-col h-screen'>
			<Nav />
			<Background />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
