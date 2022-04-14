import React, { useState } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Adduser from './Adduser';
import Updateuser from './Updateuser';
import Singleuser from './Singleuser';
import Error404 from './Error404';


//import style
import './css/App.css';

const sampleUsers = [
	{_id: 1, name: 'frank', email: 'frankndounga@gmail.com', password: 'something1'},
	{_id: 2, name: 'ulrich', email: 'ulrichkeutch@gmail.com', password: 'something2'},
	{_id: 3, name: 'raissa', email: 'raissadantse@gmail.com', password: 'something3'},
]


function App() {
	const [users, setUsers] = useState(sampleUsers);
	const [errorMessage, setErrorMessage] = useState('');
	
	const handleDeleteUser = (id) => {
		if(window.confirm('Are you sure you want to delete this user?')) {
			const newUsers = users.filter(user => user._id !== id);
			setUsers(newUsers)
		}
	}
	
	const handleUpdateUser = (id, name, email, password) => {
		const selectedUser = users.find(user => user._id == id);
		if(!selectedUser) {
			setErrorMessage(true)
			return;
		} else {
			console.log(selectedUser, name, email, password)
			const userUpdate = {...selectedUser, name, email, password}
			setUsers(users.map(user => {
				if(selectedUser._id === user._id) {
					return userUpdate;
				}
				return user;
			}))
		}	
	}

	const closeErrorMessage = () => {
		setErrorMessage(false)
	}
	
	return (
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home users={users} onDeleteUser={handleDeleteUser} />
					</Route>
					<Route path="/singleuser/:id">
						<Singleuser users={users} />
					</Route>
					<Route path="/adduser">
						<Adduser users={users} setUsers={setUsers} />
					</Route>
					<Route path="/updateuser/:id">
						<Updateuser users={users} onUpdateUser={handleUpdateUser} errorMessage={errorMessage} closeErrorMessage={closeErrorMessage} />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="*">
						<Error404 />
					</Route>
				</Switch>
			</Router>
		)
}

export default App;









