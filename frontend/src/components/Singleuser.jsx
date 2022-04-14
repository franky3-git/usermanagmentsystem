import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Error from './Error';


const Singleuser = ({users, errorMessage, closeErrorMessage}) => {
	
	const {id} = useParams()
	console.log(id)
	
	return (
		<div id="updateuser">
			<h1>Single user</h1>
			
			{errorMessage ? <Error message='there is no such user' closeError={closeErrorMessage} /> : null}
		</div>
	)
}

export default Singleuser;