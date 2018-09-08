var express = require('express')
var app = express()
var mysql = require('mysql');




var con = mysql.createConnection({
  host: "db",
  user: "sid",
  database: "degreeclearencedatabase",
  password: "123456"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});





app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

console.log('Some changes');
