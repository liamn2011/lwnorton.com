/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		defaultTitle: `Liam Norton | Technical Specialist | Portfolio Website`,
		siteUrl: `https://www.lwnorton.com`,
		author: "Liam Norton",
		defaultDescription: `I am a passionate Technical Specialist with expertise in solution development. Explore my portfolio to see a showcase of my projects and accomplishments. I specialise in delivering high-quality solutions to complex technical challenges. Let's connect and discuss how I can contribute to your next project.`,
		image: `/LiamNorton.jpg`,
		copyRight: `Copyright 2024 Liam Norton.`,
		robots: `index,follow`,
		icon: ``,
	},
	plugins: [
		"gatsby-plugin-styled-components",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "data",
				path: `./src/data/`, // Path to your YAML files
			},
		},
		{
			resolve: "gatsby-plugin-no-sourcemaps",
		},
		"gatsby-transformer-yaml",
	],
};
