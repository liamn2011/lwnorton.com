import React, { useState, useContext, useEffect } from "react";
import clsx from "clsx";
import { InputContext } from "../emailForm";
import { emailRegex, sendEmail } from "./../../../lib/utils";

const sanitizeHtml = require("sanitize-html");

const SubmitButton = () => {
	const { inputValues, setFormDisplay, setLoading, setSuccessDisplay } = useContext(InputContext);
	const [isDisabled, setIsDisabled] = useState(true);
	const [isSubmitError, setIsSubmitError] = useState({
		status: false,
		message: "",
	});
	let { name, email, message } = inputValues;

	useEffect(() => {
		let isDisabled = name && email && message;
		setIsDisabled(!isDisabled);
	}, [name, email, message]);

	const formSubmit = async () => {
		if (!emailRegex.test(email)) {
			setIsSubmitError((prevState) => ({
				...prevState,
				status: true,
				message: "Please enter a valid email address", // Correctly use computed property names to set the property based on input name
			}));
		} else {
			setIsSubmitError(false);
			setFormDisplay(false);
			setLoading(true);
			try {
				await sendEmail(sanitizeHtml(name), sanitizeHtml(email), sanitizeHtml(message));
				setLoading(false);
				setSuccessDisplay(true);
			} catch (error) {
				setIsSubmitError((prevState) => ({
					...prevState,
					status: true,
					message: "Submission error", // Correctly use computed property names to set the property based on input name
				}));
			}
		}
	};

	return (
		<>
			<button
				onClick={formSubmit}
				disabled={isDisabled}
				type='submit'
				className={clsx(
					"rounded-md bg-gray-800 border-white border-2 px-3 py-2 mt-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
					{
						" opacity-20": isDisabled,
					}
				)}>
				Submit
			</button>
			{isSubmitError.status && <p className='text-center  text-red-600 text-base font-bold'>{isSubmitError.message}</p>}
		</>
	);
};

export default SubmitButton;
