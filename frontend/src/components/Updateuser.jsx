import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Error from './Error';

import './css/updateuser.css';


const Updateuser = ({users, onUpdateUser, errorMessage, closeErrorMessage}) => {
	
	const {id} = useParams()
	
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('user updated')
		onUpdateUser(id, name, email, password)
		
		setName('');
		setEmail('');
		setPassword('');
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
			{errorMessage ? <Error message='there is no such user' closeError={closeErrorMessage} /> : null}
		</div>
	)
}

export default Updateuser;