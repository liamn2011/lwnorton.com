import React from "react";
import ajbell from "../../../images/AJBellLogo.png";

const TimeLineBox = ({ node, isStart }) => {
	const { position, company, duration, summary } = node;

	var staticContent = (
		<div>
			<h3 className='font-bold text-sm text-white mb-1'>Oct 2014 to Feb 2016</h3>
			<h2 className='text-lg text-white font-bold mb-1'>Collective Investment Dealer</h2>
			<div className={`${isStart ? "justify-end" : "justify-start"} flex w-full mb-2`}>
				<img className='w-28' src={ajbell} alt='Logo' />
			</div>
			<div className='w-full bg-white h-1 my-2'></div>
			<h3 className='font-bold text-sm text-white mb-1'>Oct 2013 to Sep 2014</h3>
			<h2 className='text-lg text-white font-bold mb-1'>Dealing Services Agent</h2>
			<div className={`${isStart ? "justify-end" : "justify-start"} flex w-full mb-2`}>
				<img className='w-28' src={ajbell} alt='Logo' />
			</div>
		</div>
	);
	return (
		<>
			{/* Desktop */}
			{position === "end" ? (
				<div
					className={`${isStart ? "text-right" : "text-left"} timeline-${
						isStart ? "start" : "end"
					} hidden md:block timeline-box bg-gray-800 w-full border-gray-800`}>
					{staticContent}
				</div>
			) : (
				<div
					className={`${isStart ? "text-right" : "text-left"} timeline-${
						isStart ? "start" : "end"
					} hidden md:block timeline-box bg-gray-800 w-full border-gray-800`}>
					<h3 className='font-bold text-sm text-white mb-1'>{duration}</h3>
					<h2 className='text-lg text-white font-bold mb-1'>{position}</h2>
					<div className={`${isStart ? "justify-end" : "justify-start"} flex  w-full mb-2`}>
						<img
							alt='CompanyLogo'
							className={`${company === "local" ? "w-44 mb-1" : "w-28"}`}
							src={`${company !== "mpp" && company !== "ajbell" ? company : ajbell}`}
						/>
					</div>
					<p className='text-white text-base	'>{summary}</p>
				</div>
			)}

			{/* Mobile */}
			{position === "end" ? (
				<div className={`md:hidden block timeline-box bg-gray-800 border-gray-800 w-full mb-5`}>{staticContent}</div>
			) : (
				<div className={`md:hidden block timeline-box bg-gray-800 w-full mb-5 border-gray-800`}>
					<h3 className='font-bold text-sm text-white'>{duration}</h3>
					<h2 className='text-lg text-white font-bold'>{position}</h2>
					<div className={`justify-start flex  w-full`}>
						<img
							alt='CompanyLogo'
							className={`${company === "local" ? "w-44 mb-1" : "w-28"}`}
							src={`${company !== "mpp" && company !== "ajbell" ? company : ajbell}`}
						/>
					</div>
					<p className='text-white'>{summary}</p>
				</div>
			)}
		</>
	);
};

export default TimeLineBox;
