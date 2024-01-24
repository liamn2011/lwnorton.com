import * as React from "react";
import Layout from "../components/Layout";
import EmailForm from "../components/emailForm";
import { SEO } from "../components/seo";

const AboutPage = () => {
	return (
		<Layout>
			<EmailForm />
		</Layout>
	);
};

export default AboutPage;

export const Head = () => <SEO />;
