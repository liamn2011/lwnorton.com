import * as React from "react";
import hero from "../images/hero.png";

const Hero = () => {
	return (
		<div className=' flex-1  w-full md:flex items-center px-10 md:px-32 lg:px-32 xl:px-64'>
			<div className='w-full text-white'>
				<h1 className='text-lg'>Hey, my name is</h1>
				<h2 className='text-7xl'>Liam Norton</h2>
				<p className='text-xl mt-2'>A skilled professional using technology to engineer solutions.</p>
				<p className='mt-2'>
					I'm passionate about creating impactful results, so let's explore the world where technology meets efficiency, and where my love for
					innovation thrives.
				</p>
			</div>
			<div className='w-full flex justify-center'>
				<img src={hero} alt='svg of Liam Norton' />
			</div>
		</div>
	);
};

export default Hero;
