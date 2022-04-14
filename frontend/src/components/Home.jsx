import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './css/home.css';


const User = ({name, email, _id, onDeleteUser}) => {
	return (
		
		<div className="user">
			<p className="name">name: {name}</p>
			<p className="email">email: {email}</p>
			<Link to={`/updateuser/${_id}`} className="btn btn-update-user">update</Link>
			<button onClick={() => onDeleteUser(_id)} className="btn btn-delete-user">delete</button>
			<Link to={`/singleuser/${_id}`} className="btn btn-update-user">view</Link>
		</div>
	)
}

const Home = ({users, onDeleteUser}) => {
	
	
	return (
		<div id="home">
			<h1>users</h1>
			{users.map(user => <User key={user._id} onDeleteUser={onDeleteUser} {...user} />)}
		</div>
	)
}

export default Home;