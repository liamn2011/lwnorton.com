import * as React from "react";
import Layout from "../components/Layout/Layout";
import hero from "../images/hero.png";
import { Seo } from "../components/seo";

const IndexPage = () => {
	return (
		<Layout>
			<div className=' flex-1 w-full flex md:flex-row flex-col items-center justify-center px-10 md:px-32 lg:px-32 xl:px-64'>
				<div className=' text-white md:w-full max-w-xl w-11/12'>
					<h1 className='text-2xl'>Hey, I'm</h1>

					<h2 className='text-6xl text-white font-bold m-0 '>Liam Norton,</h2>

					<p className='text-lg mt-2'>
						a Software Engineer building impactful solutions. Let's delve into the realm where technology meets efficiency, where my passion for
						innovation thrives.
					</p>
				</div>
				<div className='flex justify-center md:w-full max-w-xl w-11/12'>
					<img src={hero} alt='svg of Liam Norton' />
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <Seo />;
