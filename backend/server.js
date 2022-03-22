const http = require('http');
const port = 5000;
const debug = require('debug')('test')
const app = require('./app');

app.set('port', port)
const server = http.createServer(app);

server.listen(port, () => {
	console.log('Server is running on port ' + port);
})



