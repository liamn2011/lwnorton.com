import React, { useState, createContext } from "react";
import Loader from "../loader/loader";
import InputField from "./inputField/inputField";
import SubmitButton from "./sumbitButton/submitButton";
import SubmitSuccess from "./submitSuccess/submitSuccess";

export const InputContext = createContext(null);

const EmailForm = () => {
	const [loading, setLoading] = useState(false);
	const [successDisplay, setSuccessDisplay] = useState(false);
	const [formDisplay, setFormDisplay] = useState(true);
	const [inputValues, setInputValues] = useState({
		email: "",
		name: "",
		message: "",
	});

	const inputContextValue = {
		setInputValues,
		inputValues,
		setLoading,
		setFormDisplay,
		setSuccessDisplay,
	};

	return (
		<InputContext.Provider value={inputContextValue}>
			<div className='h-[400px] w-full flex justify-center'>
				{formDisplay && (
					<div className='bg-gray-800 p-4 rounded-xl md:w-full max-w-xl h-full  w-11/12 '>
						<InputField label='name' isInputField={true} />
						<InputField label='email' isInputField={true} />
						<InputField label='message' isInputField={false} />
						<SubmitButton />
					</div>
				)}
				{loading && (
					<div className='h-full flex justify-center align-middle items-center'>
						<Loader />
					</div>
				)}
				{successDisplay && <SubmitSuccess />}
			</div>
		</InputContext.Provider>
	);
};

export default EmailForm;
