import * as React from "react";
import Layout from "../components/Layout/Layout";
import EmailForm from "../components/emailForm/emailForm";
import { Seo } from "../components/seo";

const ContactPage = () => {
	return (
		<Layout>
			<>
				<div className='flex-1 flex items-center justify-center flex-col '>
					<div className='md:w-full max-w-xl w-11/12'>
						<h1 className='text-white font-bold text-2xl mb-1'>CONTACT ME</h1>
						<div className=' h-3 w-44 bg-gray-800 mb-1'></div>
						<p className='text-white mb-4'>
							If you wish to reach out to inquire more about me, share an exciting opportunity, or explore potential collaboration, kindly use the
							contact form below. I look forward to hearing from you.
						</p>
					</div>
					<EmailForm />
				</div>
			</>
		</Layout>
	);
};

export default ContactPage;

export const Head = () => <Seo />;
