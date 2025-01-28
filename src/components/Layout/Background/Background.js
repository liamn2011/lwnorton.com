import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faSquareJs, faNode, faCss3Alt, faHtml5, faReact, faPython, faAws } from "@fortawesome/free-brands-svg-icons";

import "./Background.css";

const Background = () => {
	return (
		<>
			<div className='icons'>
				<FontAwesomeIcon icon={faSquareJs} />
				<FontAwesomeIcon icon={faNode} />
				<FontAwesomeIcon icon={faCss3Alt} />
				<FontAwesomeIcon icon={faHtml5} />
				<FontAwesomeIcon icon={faCode} />
				<FontAwesomeIcon icon={faReact} />
				<FontAwesomeIcon icon={faDatabase} />
				<FontAwesomeIcon icon={faPython} />
				<FontAwesomeIcon icon={faGithub} />
				<FontAwesomeIcon icon={faAws} />
			</div>
		</>
	);
};

export default Background;
