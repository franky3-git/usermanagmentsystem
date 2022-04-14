import React, { useState } from 'react';
import { Link} from 'react-router-dom';

import './css/header.css';

const Header = () => {
	const [selectedLink, setSelectedLink] = useState('home') 
	
	return (
		<header>
			<div className="title">user management system</div>
			<nav>
				<Link to="/" className={`link ${selectedLink === 'home' ? 'active' : ''}`} onClick={() => setSelectedLink('home')}>Home</Link>
				<Link to="/adduser" className={`link ${selectedLink === 'add' ? 'active' : ''}`} onClick={() => setSelectedLink('add')}>add user</Link>
				<Link to="/about" className={`link ${selectedLink === 'about' ? 'active' : ''}`}  onClick={() => setSelectedLink('about')}>about</Link>
			</nav>
		</header>
	)
}

export default Header;