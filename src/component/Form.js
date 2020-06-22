import React, { Component } from 'react';
import './Form.css';

/*
* 텍스트 내용 바뀌면 state 업데이트
* 버튼이 클릭되면 새로운 todo 생성 후 todos 업데이트
* 인풋에서 Enter 누르면 버튼을 클릭한것과 동일한 작업진행하기
*/

const Form = ({value, onChange, onCreat, onKeyPress}) => {
	return(
		<div className="form">
			<input type="text" value={value}  onChange={onChange} onKeyPress={onKeyPress}/>
			<div className="create-btn" onClick={onCreat}>추가</div>
		</div>
	);
};

export default Form;