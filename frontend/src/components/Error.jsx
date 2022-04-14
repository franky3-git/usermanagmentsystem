export default Error = ({message, closeError}) => {
	
	setTimeout(() => {
		closeError()
	}, 3000)
	
	return (
		<h4 className="error-message">{message}</h4>
	)
}