const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const shell = require('shelljs');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/register-user', function(req, res) {
	const userName = req.body.userName;
	const password = req.body.password;

	res.json({note: 'the data has been recieved successfully ;-)'});
	console.log("username = " + userName);
	console.log("password = " + password);

	fs.writeFile('name', userName, function(err) {
    if (err) throw err;

    fs.writeFile('passwd', password, function(err) {
    if (err) throw err;
})
})
});

const port = 3000;
app.listen(port, function() {
	console.log(`aniruddh your server is listening on port ${port} ........`);
});