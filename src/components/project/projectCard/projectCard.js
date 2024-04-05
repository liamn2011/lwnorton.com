import React from "react";

// Icons
import css from "../../../images/icons/css.svg";
import gatsby from "../../../images/icons/gatsby.svg";
import github from "../../../images/icons/githubicon.svg";
import html from "../../../images/icons/html.svg";
import javascript from "../../../images/icons/javascript.svg";
import react from "../../../images/icons/react.svg";
import tailwind from "../../../images/icons/tailwind.svg";
import vercel from "../../../images/icons/vercel.svg";
import nodejs from "../../../images/icons/nodejs.svg";
import jwt from "../../../images/icons/jwt.svg";
import inkscape from "../../../images/icons/inkscape.svg";
import shopify from "../../../images/icons/shopify.svg";

import lwnorton from "../../../images/projects/lwnorton.png";
import emailSubscriberAPI from "../../../images/projects/emailSubscriberAPI.png";
import IconWithTooltip from "../iconWithToolTip/iconWithToolTip";

const ProjectCard = ({ isStart, props }) => {
	const { projectTitle, projectImage, body, icons, projectButton, projectLink, sourceCodeButton, sourceCodeLink } = props;

	const iconImages = {
		javascript,
		css,
		html,
		react,
		tailwind,
		vercel,
		gatsby,
		github,
		nodejs,
		inkscape,
		shopify,
		jwt,
	};

	const projectImages = {
		lwnorton,
		emailSubscriberAPI,
	};
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
