import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export const SEO = ({ title, description, pathname, children }) => {
	const { defaultTitle, defaultDescription, image, siteUrl, robots, copyRight, author } = useSiteMetadata();

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image}`,
		url: `${siteUrl}${pathname || ``}`,
		robots: robots,
		copyRight: copyRight,
		author: author,
	};

	return (
		<>
			<title>{seo.title}</title>
			<meta name='description' content={seo.description} />
			<meta name='image' content={seo.image} />
			<link rel='icon' href={image} />
			<meta name='robots' content={seo.robots} />
			<meta name='copyright' content={seo.copyRight} />
			<meta name='author' content={seo.author} />
			{children}
		</>
	);
};
