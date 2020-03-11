import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
	return (
		<div className='char-component'>
			{props.char}
		</div>
	);
}

export default charComponent;