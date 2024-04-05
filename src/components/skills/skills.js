import React, { useEffect, useRef } from "react";
import clsx from "clsx";

const Skills = ({ data }) => {
	// Use an array to store refs if the number of elements is variable
	const domRefs = useRef([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.style.width = entry.target.getAttribute("data-percentage");
					}
				});
			},
			{ threshold: 0.1 } // Configure threshold as needed
		);

		domRefs.current.forEach((domRef) => {
			if (domRef) observer.observe(domRef);
		});

		return () => observer.disconnect();
	}, [data]); // Depend on data if it's dynamic

	return (
		<div className='card bg-gray-800 text-primary-content w-4/5'>
			<div className='card-body'>
				<h2 className='card-title'>SKILLS</h2>
				{data.map((skill, index) => (
					<div key={index} className='skill-box'>
						<div className='flex justify-between w-full text-white mb-2'>
							<span>{skill.name}</span>
							<span>{skill.percentage}</span>
						</div>
						<div className='w-full border-green-300 border-2 relative rounded-2xl'>
							<div
								ref={(el) => (domRefs.current[index] = el)} // Assign each element to the ref array
								data-percentage={skill.percentage} // Use data attribute to hold value
								className={clsx("h-2 rounded-2xl bg-green-300 border-green-300", `transition-all ease-in-out duration-[4000ms]`)}
								style={{ width: "0%" }} // Initial width
							></div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
