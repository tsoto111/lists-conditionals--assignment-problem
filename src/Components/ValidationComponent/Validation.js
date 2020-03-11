import React from 'react';
import './Validation.css'

const validation = (props) => {
	
	let validationMessage = 'Text long enough';
	if (props.inputLength <= 5) {
		validationMessage = "Text is too short"
	}
	
	return(
		<div>
			<p>{validationMessage}</p>
		</div>
	);
}

export default validation;