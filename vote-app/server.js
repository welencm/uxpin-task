// set up application
var express  = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// db connection
mongoose.connect('mongodb://votedb:27017/vote');

// configuration
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

var Vote = mongoose.model('Vote', {
  name : String,
  votes_one : Number,
  votes_two : Number
});

// add vote result to the database if there are none
Vote.find(function(err, votes) {
  if(votes.length == 0){
    var voting = new Vote({
      name: "Batman vs Superman",
      votes_one: 0,
      votes_two: 0
    });

    voting.save(function (err, votes) {
      if (err) return console.error(err);
    });
  }

  console.log(votes);
});

// routes
app.get('/api/votes', function(req, res) {
    Vote.find({ name: "Batman vs Superman" }, function(err, votes) {
        if (err)
            res.send(err);

        var voting = votes[0];
        res.json(voting);
    });
});

function addVote(v, res) {
  Vote.find({ name: "Batman vs Superman" }, function(err, votes) {
    if (err)
        res.send(err);

    var voting = votes[0];
    if(v == "one")
      voting.votes_one += 1;
    else
      voting.votes_two += 1;

    voting.save(function (err, votes) {
      if (err) return console.error(err);
    });

    res.json(voting);
  })
}

app.get('/api/vote/one', function(req, res) {
        addVote("one", res);
    });

app.get('/api/vote/two', function(req, res) {
        addVote("two", res);
    });

// application
app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});

// listen on port 8080
app.listen(8080);
console.log("App listening on port 8080");
