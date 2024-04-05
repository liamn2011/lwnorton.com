import React, { useContext } from "react";
import { InputContext } from "../emailForm";
// Need to Refactor

const InputField = ({ label, isInputField }) => {
	const { setInputValues } = useContext(InputContext); // Destructure to get setInputValues

	const handleChange = (e) => {
		const { name, value } = e.target;

		// Update parent component state
		setInputValues((prevState) => ({
			...prevState,
			[name]: value, // Correctly use computed property names to set the property based on input name
		}));

		// Validate the field if validation function is passed
	};
	return (
		<>
			<label htmlFor={label} className='text-white'>
				{label.charAt(0).toUpperCase() + label.slice(1)}*
			</label>
			{isInputField && (
				<input
					type='text'
					id={label}
					name={label}
					className='block w-full my-2 rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
					placeholder={label.charAt(0).toUpperCase() + label.slice(1)}
					onChange={handleChange}
					required
				/>
			)}
			{!isInputField && (
				<textarea
					id={label}
					name={label}
					rows={4}
					maxLength='500'
					className='block resize-none w-full my-2 rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
					defaultValue={""}
					placeholder={label.charAt(0).toUpperCase() + label.slice(1)}
					onChange={handleChange}
					required
				/>
			)}
		</>
	);
};

export default InputField;
