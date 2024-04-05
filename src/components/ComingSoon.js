import * as React from "react";

const Comingsoon = (message) => {
	return (
		<div className='flex-1 flex items-center justify-center flex-col '>
			<div className='bg-gray-800 p-14 rounded-xl'>
				<h1 className='text-white'>{message}</h1>
			</div>
		</div>
	);
};

export default Comingsoon;
