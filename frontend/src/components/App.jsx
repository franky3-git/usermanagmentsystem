import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Adduser from './Adduser';
import Error404 from './Error404';


//import style
import './css/App.css';

function App() {
	return (
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/adduser">
						<Adduser />
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









