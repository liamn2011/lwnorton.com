import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { SEO } from "../components/seo";

const IndexPage = () => {
	return (
		<Layout>
			<Hero />
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <SEO />;
