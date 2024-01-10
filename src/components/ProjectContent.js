import React from "react";
import intro from "../data/project/introduction.yaml";

const ProjectContent = () => {
	return (
		<main className='flex-1 flex items-center flex-col w-full md:my-20'>
			<div className='flex-1 flex items-center flex-col md:w-full max-w-4xl w-11/12'>
				<div className='container mx-auto flex justify-between items-center'>
					<div>
						<h1 className='text-white font-bold text-2xl mb-1'>PROJECTS</h1>
						<div className='h-3 w-44 bg-gray-800 mb-1'></div>
					</div>
				</div>
				<section className='mb-5 w-full'>
					<p className='text-white'>{intro.body}</p>
				</section>
				<div className='card lg:card-side bg-base-100 shadow-xl'>
					<div className='card-body'>
						<h2 className='card-title'>New album is released!</h2>
						<p>Click the button to listen on Spotiwhy app.</p>
						<div className='card-actions justify-end'>
							<button className='btn btn-primary'>Listen</button>
						</div>
					</div>
					<figure>
						<img src='https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg' alt='Album' />
					</figure>
				</div>
			</div>
		</main>
	);
};

export default ProjectContent;
