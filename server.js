var express = require('express');
var app = express();

var mySimpleDataBase = {
	query: function(selector, cb){
		setTimeout(function(){
			var dataBaseResponse = [
				{
					id: 1,
					name: 'nik',
					age: 22
				}, {
					id: 2,
					name: 'slava',
					age: 25
				}, {
					id: 3,
					name: 'nikolay',
					age: 32
				}
			];

			cb(dataBaseResponse)
		}, 1000)
	}
}

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/getJson', function (req, res) {
  mySimpleDataBase.query('SELECT * FROM users', function(dataBaseResponse){
  	res.send(dataBaseResponse);
  })
});

app.use(express.static('client'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});