import * as React from "react";
import hero from "../images/hero.png";

const Hero = () => {
	return (
		<div className=' flex-1 w-full flex md:flex-row flex-col items-center justify-center px-10 md:px-32 lg:px-32 xl:px-64'>
			<div className=' text-white md:w-full max-w-xl w-11/12'>
				<h1 className='text-2xl'>Hey, I'm</h1>

				<h2 className='text-6xl text-white font-bold m-0 '>LIAM NORTON,</h2>

				<p className='text-lg mt-2'>
					a tech pro engineering impactful solutions. Let's delve into the realm where technology meets efficiency, where my passion for innovation
					thrives.
				</p>
				{/* <p className='mt-2 text-lg'>
					I'm passionate about creating impactful results, so let's explore the world where technology meets efficiency, and where my love for
					innovation thrives.
				</p> */}
			</div>
			<div className='flex justify-center md:w-full max-w-xl w-11/12'>
				<img src={hero} alt='svg of Liam Norton' />
			</div>
		</div>
	);
};

export default Hero;
