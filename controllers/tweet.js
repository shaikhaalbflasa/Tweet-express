const Tweet = require('../models/tweet');

module.exports = {
  index,
  show,
  new: newTeet,
  create
};

function index(req, res) {
    Tweet.find({}, function(err, Tweet) {
    res.render('Tweet/index', { title: 'All Tweet', Tweet });
  });
}

function show(req, res) {
    Tweet.findById(req.params.id, function(err, Tweet) {
    res.render('Tweet/show', { title: 'Tweet Detail', Tweet });
  });
}

function newTweet(req, res) {
  res.render('Tweet/new', { title: 'Add Tweet' });
}

function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // remove whitespace next to commas
  req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
  // split if it's not an empty string
  if (req.body.cast) req.body.cast = req.body.cast.split(',');
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const Tweet= new Tweet(req.body);
  Tweet.save(function(err) {
    // one way to handle errors
    if (err) return res.redirect('/tweet/new');
    console.log(movie);
    // for now, redirect right back to new.ejs
    res.redirect('/tweet');
  });
}
