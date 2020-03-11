import React from 'react';
import './ValidationComponent.css'

const validationComponent = (props) => {
	console.log('ValidationComponent: ' + props.textLenght);
	return(
		<div className='validation'><h1>Testing</h1></div>
	);
}

export default validationComponent;