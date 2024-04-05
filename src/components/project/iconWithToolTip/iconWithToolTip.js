import React, { useState } from "react";

const IconWithTooltip = ({ icon, iconImages }) => {
	const [showTooltip, setShowTooltip] = useState(false);
	const lowerCase = icon.toLowerCase();

	return (
		<div className='relative' onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} role='none'>
			<img className='w-10' src={iconImages[lowerCase]} alt={icon} />
			{showTooltip && <div className='absolute bg-gray-800 text-white px-2 py-1 rounded bottom-10 left-1/2 transform -translate-x-1/2'>{icon}</div>}
		</div>
	);
};

export default IconWithTooltip;
