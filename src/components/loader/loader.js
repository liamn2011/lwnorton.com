import * as React from "react";
import "./loader.css";

// import logo from "../../../../static/MuttlifeClothingWording.png";

const Loader = () => {
	return (
		<div className='lds-roller'>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Loader;
