import React from 'react';

import data from './data'
import TodoItem from './todo-item';

export default class TodoList extends React.Component {
	//this is a life cycle funcion, is a React's function, it's going to run before the component actually mounts on to the page
	componentWillMount() {
		this.setState({
			todos: data,
		});
	}

	render() {
		return (
			<div>
				{this.state.todos.map(info =>
					<TodoItem key={info.id} {...info} />
				)}
			</div>	
		);
	}
}
