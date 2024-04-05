import React, { useState } from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Liam from "../../../images/LiamNorton.jpg";
import Links from "./links/links";

const Nav = ({ navLinks }) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav className='bg-gray-800 px-4 py-2 w-full mb-3'>
			<div className='container mx-auto flex justify-between items-center'>
				<Link to='/' className=''>
					<img className=' w-12 rounded-full' src={Liam} alt='Liam Norton' />
				</Link>

				<div className='hidden md:flex space-x-4'>
					<Links links={navLinks} />
				</div>

				{/* Mobile Menu */}

				<button aria-label='menu' className='md:hidden'>
					<FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} size='lg' onClick={toggleMobileMenu} />
				</button>

				{isMobileMenuOpen && (
					<div className='md:hidden fixed top-0 left-0 right-0 bottom-0 bg-gray-800 text-white p-4 z-10'>
						<Links links={navLinks} />
						<button className='text-white mt-4' onClick={toggleMobileMenu}>
							Close Menu
						</button>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Nav;
