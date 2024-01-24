import * as React from "react";
import Layout from "../components/Layout";
import AboutContent from "../components/aboutContent";
import { SEO } from "../components/seo";

const AboutPage = () => {
	return (
		<Layout>
			<AboutContent />
		</Layout>
	);
};

export default AboutPage;

export const Head = () => <SEO />;
