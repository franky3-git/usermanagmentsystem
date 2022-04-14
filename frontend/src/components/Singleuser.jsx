import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Error from './Error';


const Singleuser = ({users}) => {
	
	const {id} = useParams()
	console.log(id)
	
	return (
		<div id="updateuser">
			<h1>Single user</h1>
			
		
		</div>
	)
}

export default Singleuser;