import * as React from "react";
import Layout from "../components/Layout/Layout";
import { Seo } from "../components/seo";

import intro from "../data/project/introduction.yaml";
import projectMainContent from "../data/project/main.yaml";

import Project from "../components/project/project";

const ProjectsPage = () => {
	return (
		<Layout>
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
						<Project main={projectMainContent} />
					</section>
				</div>
			</main>
		</Layout>
	);
};

export default ProjectsPage;

export const Head = () => <Seo />;
