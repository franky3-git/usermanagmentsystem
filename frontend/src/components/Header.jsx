import React from 'react';
import { Link} from 'react-router-dom';

import './css/header.css';

const Header = () => {
	return (
		<header>
			<div class="title">user management system</div>
			<nav>
				<Link to="/" className="link">Home</Link>
				<Link to="/adduser" className="link">add user</Link>
				<Link to="/about" className="link">about</Link>
			</nav>
		</header>
	)
}

export default Header;