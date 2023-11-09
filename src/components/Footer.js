import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<footer className=' px-4 py-2 mt-auto w-full bg-gray-800'>
			<div className='container mx-auto  flex justify-between md:justify-evenly items-center '>
				<p className='text-white'>
					<span>&copy;</span> Copyright 2023 Liam Norton.
				</p>
				<div>
					<a href='https://github.com/liamn2011' target='_blank' rel='noreferrer' className=''>
						<FontAwesomeIcon icon={faGithub} size='2xl' style={{ color: "#ffffff" }} />
					</a>
					<a href='https://www.linkedin.com/in/liam-norton-335139b3/' target='_blank' rel='noreferrer' className='ml-2'>
						<FontAwesomeIcon icon={faLinkedin} size='2xl' style={{ color: "#ffffff" }} />
					</a>
				</div>

				{/* Mobile Menu */}
			</div>
		</footer>
	);
};

export default Footer;
