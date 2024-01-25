import * as React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/seo";
import ProjectContent from "./../components/ProjectContent";

const AboutPage = () => {
	return (
		<Layout>
			<ProjectContent />
		</Layout>
	);
};

export default AboutPage;

export const Head = () => <SEO />;
