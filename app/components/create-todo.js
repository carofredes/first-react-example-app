import React from 'react';

export default class CreateTodo extends React.Component {
	render() {
		return (
			<form>
				<input type="text" placeholder="Write your todo" />
				<button>Create</button>
			</form>
		);
	}
}
