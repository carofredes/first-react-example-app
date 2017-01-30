import React from 'react';

import TodoList from './todo-list';
import CreateTodo from './create-todo';

export default class App extends React.Component {
	addTodo = (e) => {
		e.preventDefault()
	}

	render() {
		return (
			<div>
				<h1>My toDos app</h1>
				<CreateTodo />
				<TodoList />
			</div>	
		);
	}
}
