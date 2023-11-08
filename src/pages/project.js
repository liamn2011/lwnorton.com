import * as React from "react";
import Layout from "../components/Layout";
import Comingsoon from "../components/ComingSoon";
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
			<Comingsoon />
		</Layout>
	);
};

export default AboutPage;

export const Head = () => <title>Home Page</title>;
