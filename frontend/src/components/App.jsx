import React, { useState } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Adduser from './Adduser';
import Updateuser from './Updateuser';
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
	
	const handleDeleteUser = (id) => {
		if(window.confirm('Are you sure you want to delete this user?')) {
			const newUsers = users.filter(user => user._id !== id);
			setUsers(newUsers)
		}
	}
	
	const handleUpdateUser = (id) => {
		
	}

	return (
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home users={users} onDeleteUser={handleDeleteUser} />
					</Route>
					<Route path="/adduser">
						<Adduser users={users} setUsers={setUsers} />
					</Route>
					<Route path="/updateuser">
						<Updateuser users={users} setUsers={setUsers} />
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









