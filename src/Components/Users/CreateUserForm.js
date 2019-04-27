import React, { Component } from 'react';
import { logIn } from '../../Api/User'

export default class CreateUserForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",

		}
		this.handlechange = this.handlechange.bind(this);
		// this.handleLogIn = this.handleLogIn.bind(this);

	}
	handlechange(e) {
		this.setState({
			[e.target.name]: [e.target.value]
		})
	}
	handleLogIn = () => {
		const { username, password } = this.state;
		debugger;
		console.log(logIn);
		logIn({ username, password })
			.then(res => {
				localStorage.setItem("token", res.token);
			})
			.catch(err => {

			})
	}
	render() {
		return (
			<form>
				<fieldset>
					<label>user name : </label>
					<input type="text" name="username" value={this.state.username} onChange={this.handlechange} /><br />
					<label>password : </label>
					<input type="password" name="password" value={this.state.password} onChange={this.handlechange} /><br />
					<button type="button" onClick={this.handleLogIn}>Log in</button>
				</fieldset>
			</form>
		)
	}
}