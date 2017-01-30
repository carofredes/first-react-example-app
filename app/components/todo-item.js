import React from 'react';

const TodoItem = props => 
	<div>
		<h2>{props.task}</h2>
		<button>Edit</button>
		<button>Delete</button>
	</div>;

export default TodoItem;