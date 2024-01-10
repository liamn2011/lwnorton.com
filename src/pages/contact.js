import * as React from "react";
import Layout from "../components/Layout";
import EmailForm from "../components/emailForm";
import { SEO } from "../components/seo";

/*
    - Navbar (include downloadable cv)
    - Video of myself (not mvp)
    - Needs a summary
    - Needs my professional work experience like my cv
    - footer
*/

const AboutPage = () => {
	return (
		<Layout>
			<EmailForm />
		</Layout>
	);
};

export default AboutPage;

export const Head = () => <SEO />;
