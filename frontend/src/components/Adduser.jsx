import React, { useState } from 'react';

import './css/adduser.css';


const Adduser = ({users, setUsers}) => {
	
	const [user, setUser] = useState({name: '', email: '', password: ''});
	
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('user added');
		const newUser = {...user, _id: Date.now().toLocaleString()}
		
		setUsers([...users, newUser])
		setUser({name: '', email: '', password: ''})
	}
	
	const handleForm = (e) => {
		const newUser = {...user, [e.target.name]: e.target.value}
		setUser(newUser)
	}
	
	return (
		<div id="adduser">
			<h1>Add a user here</h1>
			<form className="add-user-form" onSubmit={handleSubmit} >
				<div className="form-group">
					<label htmlFor="name">name: </label>
					<input type="text" name="name" value={user.name} onChange={handleForm} />
				</div>
				<div className="form-group">
					<label htmlFor="email">email: </label>
					<input type="email" name="email" value={user.email} onChange={handleForm} />
				</div>
				<div className="form-group">
					<label htmlFor="password">password: </label>
					<input type="password" name="password" value={user.password} onChange={handleForm} />
				</div>
				<button type="submit" className="btn-add-user">add user</button>
			</form>
		</div>
	)
}

export default Adduser;