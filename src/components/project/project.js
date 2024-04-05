import * as React from "react";
import ProjectCard from "./projectCard/projectCard";

const Project = ({ main }) => {
	return (
		<>
			{main.map((node, index) => {
				const isStart = index % 2 === 0;
				return <ProjectCard isStart={isStart} props={node} />;
			})}
		</>
	);
};

export default Project;
