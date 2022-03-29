import React, { useState } from 'react';

import './css/adduser.css';


const Updateuser = ({users, setUsers}) => {
	
	//const [handleForm, setHandleForm] = useState({name: '', email: '', ,password: ''});
	
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('form submitted')
		const newUser = {name, email, password, _id: Date.Now().toLocaleString()}
		
		setUsers([...users, newUser])
		
		console.log(users)
	}
	
	return (
		<div id="updateuser">
			<h1>Update a user here</h1>
			<form className="update-user-form" onSubmit={handleSubmit} >
				<div className="form-group">
					<label htmlFor="name">name: </label>
					<input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
				</div>
				<div className="form-group">
					<label htmlFor="email">email: </label>
					<input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div className="form-group">
					<label htmlFor="pass">password: </label>
					<input type="password" name="pass" value={password} onChange={(e) => setPassword(e.target.value)} />
				</div>
				<button type="submit" className="btn-add-user">update user</button>
			</form>
		</div>
	)
}

export default Updateuser;