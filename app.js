const http = require('http')
const fs = require('fs')

const PORT = process.env.PORT || 5001;

const server = http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html' })
	fs.readFile('index.html', function(error, data) {
		if (error) {
			res.writeHead(404)
			res.write('Error: File Not Found')
		} else {
			res.write(data)
		}
	res.end()
	})
})

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
	console.log('Press Ctrl+C to quit.');
  });

server.listen(port, function(error) {
	if (error) {
		console.log('Something went wrong', error)
		} else {
		console.log('Server is listening to port' + port)
		}
})

