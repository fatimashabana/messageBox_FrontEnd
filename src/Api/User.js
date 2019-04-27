import axios from 'axios';
const BackendUrl = 'http://localhost:3000/api';


export const logIn = ({ username, password }) => {
	return axios.post(`${BackendUrl}/users/login`, {
		username,
		password
	})
		.then(res =>
			res.data
		)
}

export const getUsersList = () => {
	return axios.get(`${BackendUrl}/users`, {
		headers: {
			authorization: `Bearer ${this.localStorage.getItem('token')}`
		}
	})
		.then(res =>
			res.data
		)
}