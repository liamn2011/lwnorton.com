import React, { useState } from "react";
import intro from "../data/project/introduction.yaml";
import main from "../data/project/main.yaml";

// Icons
import css from "../images/icons/css.svg";
import gatsby from "../images/icons/gatsby.svg";
import github from "../images/icons/githubicon.svg";
import html from "../images/icons/html.svg";
import javascript from "../images/icons/javascript.svg";
import react from "../images/icons/react.svg";
import tailwind from "../images/icons/tailwind.svg";
import vercel from "../images/icons/vercel.svg";
import nodejs from "../images/icons/nodejs.svg";
import jwt from "../images/icons/jwt.svg";
import inkscape from "../images/icons/inkscape.svg";
import shopify from "../images/icons/shopify.svg";

// Projects
import lwnorton from "../images/projects/lwnorton.png";
import emailSubscriberAPI from "../images/projects/emailSubscriberAPI.png";

const IconWithTooltip = ({ icon, iconImages }) => {
	const [showTooltip, setShowTooltip] = useState(false);
	const lowerCase = icon.toLowerCase();
	return (
		<div className='relative' onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
			<img className='w-10' src={iconImages[lowerCase]} alt={icon} />
			{showTooltip && <div className='absolute bg-gray-800 text-white px-2 py-1 rounded bottom-10 left-1/2 transform -translate-x-1/2'>{icon}</div>}
		</div>
	);
};

const ProjectCard = ({ isStart, projectTitle, projectImage, year, body, icons, projectButton, projectLink, sourceCodeButton, sourceCodeLink }) => {
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
			<div className='hidden md:flex w-full card md:card-side bg-gray-800 shadow-xl mb-16 h-[590px]'>
				{!isStart && (
					<figure className='bg-gray-800 w-full'>
						<img className=' w-10/12 ' src={projectImages[projectImage]} alt={projectImage} />
					</figure>
				)}

				<div className='card-body bg-gray-800 text-white w-full flex justify-center'>
					<h2 className='card-title'>{projectTitle}</h2>
					<p dangerouslySetInnerHTML={{ __html: body.replace(/\n/g, "<br/>") }} />
					<div className='flex w-full justify-center gap-x-1.5 mt-7'>
						{icons.map((icon, index) => (
							<IconWithTooltip key={index} icon={icon} iconImages={iconImages} />
						))}
					</div>
					<div className='card-actions flex justify-center w-full'>
						{projectButton && (
							<a href={projectLink} target='_blank'>
								<button className='rounded-md bg-gray-800 border-white border-2  px-3 py-2 mt-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 w-40'>
									View Project
								</button>
							</a>
						)}
						{sourceCodeButton && (
							<a href={sourceCodeLink} target='_blank'>
								<button className='rounded-md bg-gray-800 border-white border-2  px-3 py-2 mt-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 w-40'>
									View Source Code
								</button>
							</a>
						)}
					</div>
				</div>

				{isStart && (
					<figure className='bg-gray-800 w-full'>
						<img className=' w-10/12 ' src={projectImages[projectImage]} alt={projectImage} />
					</figure>
				)}
			</div>

			{/* Mobile */}

			<div className=' md:hidden card md:card-side shadow-xl mb-16 bg-gray-800 pb-10'>
				<div className='card-body bg-gray-800 text-white'>
					<h2 className='card-title'>{projectTitle}</h2>
					<p dangerouslySetInnerHTML={{ __html: body.replace(/\n/g, "<br/>") }} />
					<div className='flex w-full justify-center gap-x-1.5 mt-7'>
						{icons.map((icon, index) => (
							<IconWithTooltip key={index} icon={icon} iconImages={iconImages} />
						))}
					</div>
					<div className='card-actions flex justify-center w-full'>
						{projectButton && (
							<a href={projectLink}>
								<button className='rounded-md bg-gray-800 border-white border-2  px-3 py-2 mt-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 w-40'>
									View Project
								</button>
							</a>
						)}
						{sourceCodeButton && (
							<a href={sourceCodeLink}>
								<button className='rounded-md bg-gray-800 border-white border-2  px-3 py-2 mt-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 w-40'>
									View Source Code
								</button>
							</a>
						)}
					</div>
				</div>
				<figure className='bg-gray-800 w-full'>
					<img className=' w-3/4' src={projectImages[projectImage]} alt={projectImage} />
				</figure>
			</div>
		</>
	);
};

const ProjectContent = () => {
	return (
		<main className='flex-1 flex items-center flex-col w-full md:mt-16'>
			<div className='flex-1 flex items-center flex-col md:w-full max-w-4xl w-11/12'>
				<section className='container mx-auto flex justify-between items-center'>
					<div>
						<h1 className='text-white font-bold text-2xl mb-1'>PROJECTS</h1>
						<div className='h-3 w-44 bg-gray-800 mb-1'></div>
					</div>
				</section>
				<section className='container mx-auto flex justify-between items-center mb-10'>
					<p className='text-white'>{intro.body}</p>
				</section>
				<section className='container mx-auto '>
					{main.map((node, index) => {
						const isStart = index % 2 === 0;
						return (
							<ProjectCard
								isStart={isStart}
								projectTitle={node.projectTitle}
								projectImage={node.projectImage}
								year={node.year}
								body={node.body}
								icons={node.icons}
								projectButton={node.projectButton}
								projectLink={node.projectLink}
								sourceCodeButton={node.sourceCodeButton}
								sourceCodeLink={node.sourceCodeLink}
							/>
						);
					})}
				</section>
			</div>
		</main>
	);
};

export default ProjectContent;
