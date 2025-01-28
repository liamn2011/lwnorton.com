import React from "react";
import { iconImages, projectImages } from "../../../constants/images";
import IconWithTooltip from "../iconWithToolTip/iconWithToolTip";

const ProjectCard = ({ isStart, props }) => {
	const { projectTitle, projectImage, body, icons, projectButton, projectLink, sourceCodeButton, sourceCodeLink } = props;

	return (
		<>
			<div className='md:flex md:w-full card md:card-side bg-gray-800 shadow-xl mb-16 md:h-[590px] pb-10 md:pb-0'>
				{!isStart && (
					<figure className='hidden md:flex md:bg-gray-800 md:w-full'>
						<img className='hidden md:block md:w-10/12 ' src={projectImages[projectImage]} alt={projectImage} />
					</figure>
				)}

				<div className='card-body bg-gray-800 text-white md:w-full md:flex md:justify-center'>
					<h2 className='card-title'>{projectTitle}</h2>
					<p dangerouslySetInnerHTML={{ __html: body.replace(/\n/g, "<br/>") }} />
					<div className='flex w-full justify-center gap-x-1.5 mt-7'>
						{icons.map((icon, index) => (
							<IconWithTooltip key={index} icon={icon} iconImages={iconImages} />
						))}
					</div>
					<div className='card-actions flex justify-center w-full'>
						{projectButton && (
							<a href={projectLink} target='_blank' rel='noreferrer'>
								<button className='rounded-md bg-gray-800 border-white border-2  px-3 py-2 mt-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 w-40'>
									View Project
								</button>
							</a>
						)}
						{sourceCodeButton && (
							<a href={sourceCodeLink} target='_blank' rel='noreferrer'>
								<button className='rounded-md bg-gray-800 border-white border-2  px-3 py-2 mt-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 w-40'>
									View Source Code
								</button>
							</a>
						)}
					</div>
				</div>

				{isStart && (
					<figure className='hidden md:flex md:bg-gray-800 md:w-full'>
						<img className='hidden md:block md:w-10/12' src={projectImages[projectImage]} alt={projectImage} />
					</figure>
				)}

				{/* This figure will always render on mobile */}
				<figure className={`md:hidden block `}>
					<img className='md:hidden w-3/4 mx-auto' src={projectImages[projectImage]} alt={projectImage} />
				</figure>
			</div>
		</>
	);
};

export default ProjectCard;
