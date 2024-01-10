import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					defaultTitle
					defaultDescription
					image
					siteUrl
					robots
					copyRight
					author
				}
			}
		}
	`);

	return data.site.siteMetadata;
};
