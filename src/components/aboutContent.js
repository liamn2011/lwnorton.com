import React from "react";
import intro from "../data/about/introduction.yaml";
import main from "../data/about/main.yaml";

import Liam from "../images/LiamNorton.jpg";

import ajbell from "../images/AJBellLogo.png";
import resume from "../data/LiamNortonResume.pdf";
import Skills from "./Skills";

const TimelineBox = ({ position, company, duration, summary, isStart }) => {
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
			{position === "test" ? (
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
			{position === "test" ? (
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

const AboutContent = () => {
	return (
		<main className='flex-1 flex items-center flex-col w-full my-16 '>
			<div className='flex-1 flex items-center flex-col md:w-full max-w-4xl w-11/12'>
				<div className='container mx-auto flex justify-between items-center'>
					<div>
						<h1 className='text-white font-bold text-2xl mb-1'>ABOUT ME</h1>
						<div className='h-3 w-44 bg-gray-800 mb-1'></div>
					</div>
					<button className='rounded-md bg-gray-800 px-3 py-2 mt-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800'>
						<a href={resume} target='_blank' rel='noreferrer'>
							Download CV
						</a>
					</button>
				</div>
				<section className=' mb-14'>
					<div className='flex justify-center items-center space-x-3.5 mt-3 md:flex-row flex-col'>
						<img className=' w-40 float-left rounded-full' src={Liam} alt='Liam Norton' />
						<p className='text-white'>{intro.body}</p>
					</div>
				</section>
				<section className=' w-full mb-14'>
					<h1 className='text-white font-bold text-2xl mb-10 '>PROFESSIONAL SKILLS</h1>
					<div className='w-full flex justify-center '>
						<Skills />
					</div>
				</section>
				<section className=' '>
					<h1 className='text-white font-bold text-2xl mb-10'>EXPERIENCE</h1>

					<ul className='md:timeline md:timeline-vertical '>
						{main.map((node, index) => {
							const isStart = index % 2 === 0;
							return (
								<li key={index}>
									<hr className='hidden md:bg-gray-800 md:block' />
									{isStart && (
										<TimelineBox position={node.position} company={node.company} duration={node.duration} summary={node.summary} isStart={true} />
									)}
									<div className='hidden timeline-middle md:block'>
										<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='bg-gray-800' className='w-5 h-5 text-primary'>
											<path
												fillRule='evenodd'
												d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
												clipRule='evenodd'
											/>
										</svg>
									</div>
									{!isStart && (
										<TimelineBox position={node.position} company={node.company} duration={node.duration} summary={node.summary} isStart={false} />
									)}
									<hr className='hidden bg-gray-800 md:block' />
								</li>
							);
						})}
					</ul>
				</section>
			</div>
		</main>
	);
};

export default AboutContent;
