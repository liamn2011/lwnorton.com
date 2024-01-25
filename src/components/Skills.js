import React, { useEffect, useState } from "react";

const Skills = () => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<div className='card bg-gray-800 text-primary-content w-4/5'>
			<div className='card-body'>
				<h2 className='card-title'>SKILLS</h2>
				<div className='skill-box'>
					<div className='flex justify-between w-full text-white mb-2'>
						<span>Solution Design</span>
						<span>95%</span>
					</div>
					<div className='w-full border-green-300 border-2 relative rounded-2xl'>
						<div className={`${isLoaded ? "w-[95%] transition-all duration-[4000ms]" : "w-0"} h-2 rounded-2xl bg-green-300 border-green-300`}></div>
					</div>
				</div>
				<div className='skill-box'>
					<div className='flex justify-between w-full text-white mb-2'>
						<span>Business Process/ System Analysis</span>
						<span>93%</span>
					</div>
					<div className='w-full border-green-300 border-2 relative rounded-2xl'>
						<div className={`${isLoaded ? "w-[93%] transition-all duration-[4000ms]" : "w-0"} h-2 rounded-2xl bg-green-300 border-green-300`}></div>
					</div>
				</div>
				<div className='skill-box'>
					<div className='flex justify-between w-full text-white mb-2'>
						<span>Functional / Non-Functional Requirements</span>
						<span>93%</span>
					</div>
					<div className='w-full border-green-300 border-2 relative rounded-2xl'>
						<div className={`${isLoaded ? "w-[93%] transition-all duration-[4000ms]" : "w-0"} h-2 rounded-2xl bg-green-300 border-green-300`}></div>
					</div>
				</div>
				<div className='skill-box'>
					<div className='flex justify-between w-full text-white mb-2'>
						<span>Web Development</span>
						<span>90%</span>
					</div>
					<div className='w-full border-green-300 border-2 relative rounded-2xl'>
						<div className={`${isLoaded ? "w-[90%] transition-all duration-[4000ms]" : "w-0"} h-2 rounded-2xl bg-green-300 border-green-300`}></div>
					</div>
				</div>
				<div className='skill-box'>
					<div className='flex justify-between w-full text-white mb-2'>
						<span>Database</span>
						<span>90%</span>
					</div>
					<div className='w-full border-green-300 border-2 relative rounded-2xl'>
						<div className={`${isLoaded ? "w-[90%] transition-all duration-[4000ms]" : "w-0"} h-2 rounded-2xl bg-green-300 border-green-300`}></div>
					</div>
				</div>

				<div className='skill-box'>
					<div className='flex justify-between w-full text-white mb-2'>
						<span>Technical Leadership</span>
						<span>86%</span>
					</div>
					<div className='w-full border-green-300 border-2 relative rounded-2xl'>
						<div className={`${isLoaded ? "w-[86%] transition-all duration-[4000ms]" : "w-0"} h-2 rounded-2xl bg-green-300 border-green-300`}></div>
					</div>
				</div>
				<div className='skill-box'>
					<div className='flex justify-between w-full text-white mb-2'>
						<span>Architectural Oversight</span>
						<span>83%</span>
					</div>
					<div className='w-full border-green-300 border-2 relative rounded-2xl'>
						<div className={`${isLoaded ? "w-[83%] transition-all duration-[4000ms]" : "w-0"} h-2 rounded-2xl bg-green-300 border-green-300`}></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
