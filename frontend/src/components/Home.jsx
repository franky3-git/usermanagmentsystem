import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './css/home.css';


const User = ({ number,name, email, _id, onDeleteUser}) => {
	return (
		
		<tr className="user">
			<td className="number">{number}</td>
			<td className="name">name: {name}</td>
			<td className="email">email: {email}</td>
			<td className="email">email: {email}</td>
			<td>
				<Link to={`/updateuser/${_id}`} className="btn btn-update-user">update</Link>
				<button onClick={() => onDeleteUser(_id)} className="btn btn-delete-user">delete</button>
				<Link to={`/singleuser/${_id}`} className="btn btn-update-user">view</Link>
			</td>
		</tr>
	)
}

const Home = ({users, onDeleteUser}) => {
	
	
	return (
		<div id="home">
			<h1>all users</h1>
			<table className="users">
				<thead>
					<tr>
						<th>number</th>
						<th>name</th>
						<th>email</th>
						<th>phone</th>
						<th>actions</th>
					</tr>
				</thead>
				<tbody>
					{users.map(user => <User key={user._id} onDeleteUser={onDeleteUser} {...user} />)}
				</tbody>
			</table>
		</div>
	)
}

export default Home;