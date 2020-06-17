import React, { Component } from 'react';
import './Form.css';

const Form = ({value, onChange, onCreat, onKeyPress}) => {
	return(
		<div className="form">
			<input type="text" value={value} onChange={onChange} onKeyPress={onKeypress}/>
			<div className="create-btn" onClick={onCreat}>추가</div>
		</div>
	);
};

export default Form;