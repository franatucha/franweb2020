const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res
    .status(200)
    .send('Heroku atroden!!!')
    .end();
});
 
// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

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