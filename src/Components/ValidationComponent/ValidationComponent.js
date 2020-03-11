import React from 'react';
import './ValidationComponent.css'

const validationComponent = (props) => {
	const textLength = props.textLenght;
	const validation = () => {
		return textLength <= 5 ? "Text is too short" : "Text long enough";
	}

	return(
		<div className='content-card validation'>
			<p>{validation()}</p>
		</div>
	);
}

export default validationComponent;