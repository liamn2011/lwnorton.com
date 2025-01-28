import * as React from "react";
import Layout from "../components/Layout/Layout";
import { Seo } from "../components/seo";
import Skills from "../components/skills/skills";
import AboutTimeLine from "../components/aboutTimeLine/aboutTimeLine";

import intro from "../data/about/introduction.yaml";
import aboutMainContent from "../data/about/main.yaml";
import skillsMainContent from "../data/skills/main.yaml";

import Liam from "../images/LiamNorton.jpg";
import resume from "../data/resume/LiamNortonResume.pdf";

const AboutPage = () => {
	return (
		<Layout>
			<main className='flex-1 flex items-center flex-col w-full md:my-16 '>
				<div className='flex-1 flex items-center flex-col md:w-full max-w-4xl w-11/12'>
					<div className='container mx-auto flex justify-between items-center'>
						<div>
							<h1 className='text-white font-bold text-2xl mb-1'>ABOUT ME</h1>
							<div className='h-3 w-44 bg-gray-800 mb-1'></div>
						</div>
						{/* href={resume} */}
						<a target='_blank' rel='noreferrer'>
							{/* hover:bg-gray-700 */}
							<button className='hidden cursor-not-allowed opacity-50 rounded-md bg-gray-800 border-white border-2 px-3 py-2 mt-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800'>
								Download CV
							</button>
						</a>
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
							<Skills data={skillsMainContent} />
						</div>
					</section>
					<section className=' '>
						<h1 className='text-white font-bold text-2xl mb-10'>EXPERIENCE</h1>
						<ul className='md:timeline md:timeline-vertical '>
							<AboutTimeLine aboutMainContent={aboutMainContent} />
						</ul>
					</section>
				</div>
			</main>
		</Layout>
	);
};

export default AboutPage;

export const Head = () => <Seo />;
