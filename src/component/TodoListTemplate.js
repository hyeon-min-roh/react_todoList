import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {
	return(
		<main className="todo-list-template">
			<div className="title">
				TODO LIST
			</div>
			<div classNmae="form-wrapper">
				{form}
			</div>
			<div classNmae="todos-wrapper">
				{children}
			</div>
		</main>
	);
};

export default TodoListTemplate;