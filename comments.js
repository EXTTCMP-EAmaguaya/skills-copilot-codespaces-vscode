// Create web server
// Run: node comments.js
// Test: curl -X POST -H "Content-Type: application/json" -d '{"name":"Bob", "comment":"This is a comment"}' http://localhost:3000/comments
// Test: curl http://localhost:3000/comments

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var comments = [
  { name: 'Bob', comment: 'This is a comment' }
];

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  var comment = req.body;
  comments.push(comment);
  res.json(comment);
});

app.listen(3000);
console.log('Server listening on port 3000');