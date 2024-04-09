import React from "react";
import { Link } from "gatsby";

const Links = ({ links }) => {
	return (
		<>
			{links.map((link, index) => (
				<Link key={index} to={link.path} className='text-white md:mb-0 mb-2 block'>
					{link.title}
				</Link>
			))}
		</>
	);
};

export default Links;
