import React, { useState } from "react";
import Loader from "./loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const axios = require("axios");

const EmailForm = () => {
	const [errors, setErrors] = useState({
		name: false,
		email: false,
		message: false,
	});
	const [submitError, setSubmitError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [successDisplay, setSuccessDisplay] = useState(false);
	const [formDisplay, setFormDisplay] = useState(true);
	const [canSubmit, setCanSubmit] = useState(false);

	const validateField = (e) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const enteredValue = e.target.value;
		const fieldName = e.target.name;

		setSubmitError(false);

		if (fieldName === "email") {
			const isValidEmail = enteredValue.trim() !== "" && emailRegex.test(enteredValue);
			setErrors({ ...errors, [fieldName]: !isValidEmail });
		} else {
			const isValidField = enteredValue.trim() !== "";
			setErrors({ ...errors, [fieldName]: !isValidField });
		}

		if (!errors.name && !errors.email && !errors.message) {
			setCanSubmit(true);
		}
	};

	const sendEmail = async (name, email, message) => {
		try {
			const response = await axios.post("https://formsubmit.co/ajax/3604cbecb7c1e2851ef1ee073691361e", {
				name: name,
				email: email,
				message: message,
			});
			return { responseBody: response.data, status: response.status };
		} catch (error) {
			return { responseBody: error, status: error.response.status };
		}
	};

	const submit = async () => {
		setErrors({ ...errors, submit: false });
		if (!errors.email === true && !errors.name === true && !errors.message === true) {
			const name = document.getElementById("name").value;
			const email = document.getElementById("email").value;
			const message = document.getElementById("message").value;
			if (canSubmit && name !== "" && email !== "" && message !== "") {
				setFormDisplay(false);
				setLoading(true);

				try {
					await sendEmail(name, email, message);
					setLoading(false);
					setSuccessDisplay(true);
				} catch (error) {
					setLoading(false);
					setFormDisplay(true);
					setSubmitError(true);
				}
			} else {
				setSubmitError(true);
			}
		}
	};

	return (
		<>
			{formDisplay && (
				<div className='flex-1 flex items-center justify-center flex-col'>
					<div className='md:w-2/5'>
						<h1 className='text-white font-bold text-2xl mb-1'>CONTACT ME</h1>
						<div className=' h-4 w-20 bg-gray-800 mb-1'></div>
						<p className='text-white mb-4'>
							If you wish to reach out to inquire more about me, share an exciting opportunity, or explore potential collaboration, kindly use the
							contact form below. I look forward to hearing from you.
						</p>
					</div>

					<div className='bg-gray-800 p-4 rounded-xl md:w-2/5 w-4/5'>
						<label htmlFor='name' className='text-white'>
							Name*
						</label>
						<input
							type='text'
							id='name'
							name='name'
							className='block w-full my-2 rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							placeholder='Name'
							onBlur={validateField}
							required
						/>
						{errors.name && <p className='text-center mt-2 text-red-600 text-base font-bold'>Please enter your name</p>}
						<label htmlFor='email' className='text-white'>
							Email address*
						</label>
						<input
							type='text'
							id='email'
							name='email'
							className='block w-full my-2 rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							placeholder='Email'
							onBlur={validateField}
							required
						/>
						{errors.email && <p className='text-center mt-2 text-red-600 text-base font-bold'>Email is invalid, please enter a valid email</p>}
						<label htmlFor='message' className='text-white'>
							Message*
						</label>
						<textarea
							id='message'
							name='message'
							rows={3}
							className='block w-full my-2 rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							defaultValue={""}
							placeholder='Message'
							onBlur={validateField}
							onChange={validateField}
							required
						/>
						{errors.message && <p className='text-center mt-2 text-red-600 text-base font-bold'>Please enter a message</p>}
						{submitError && !errors.name && !errors.email && !errors.message && (
							<p className='text-center mt-2 text-red-600 text-base font-bold'>Please complete the form</p>
						)}
						<button
							onClick={submit}
							type='submit'
							className='rounded-md bg-indigo-600 px-3 py-2 mt-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
							Submit
						</button>
					</div>
				</div>
			)}
			{loading && (
				<div className='flex-1 flex items-center justify-center flex-col'>
					<Loader />
				</div>
			)}
			{successDisplay && (
				<div className='flex-1 flex items-center justify-center flex-col '>
					<div className='bg-gray-800 p-5 rounded-xl flex items-center flex-col'>
						<p className='text-white'>Thank you for your email!</p>
						<br />
						<div className='bg-white rounded-full w-16 h-16 flex justify-center align-middle flex-col'>
							<FontAwesomeIcon icon={faCheck} size='2xl' style={{ color: "#40e63d" }} />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default EmailForm;
