import http from 'http';
const port = 3000;

const server = http.createServer((req, res) => {
	res.end(JSON.stringify({message: 'Hello World'}));
});
server.listen(port, () => {
	console.log('Server running at port ' + port)
});