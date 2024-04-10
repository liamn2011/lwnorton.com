import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// Need to Refactor

const SubmitSuccess = () => {
	return (
		<>
			<div className='flex-1 flex items-center justify-center flex-col h-full '>
				<div className='bg-gray-800 p-5 rounded-xl flex items-center flex-col'>
					<p className='text-white'>Thank you for your email</p>
					<br />
					<div className='bg-white rounded-full w-16 h-16 flex justify-center align-middle flex-col'>
						<FontAwesomeIcon icon={faCheck} size='2xl' style={{ color: "#40e63d" }} />
					</div>
				</div>
			</div>
		</>
	);
};

export default SubmitSuccess;
