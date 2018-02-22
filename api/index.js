const express = require('express');
const axios = require('axios');
const app = express();
const Twitter = require('twitter');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const client = new Twitter({
  consumer_key: '5hJs7znWreakkc0dfp6RHjs9J',
  consumer_secret: 'tj1kA7F7jDEdQSCmkByMpG4YfIZ2ULrtjEm25wWKH7ugEdOd6P',
  access_token_key: '3305945205-69DZyK7ZHMd9Hw9oAtGBwaKW3MmZ07yNLr2Xqnw',
  access_token_secret: 'xOoBV5XV7T1uHdgA1N6dvL8elPYalhnywxr1z2poGM761'
});

app.get('/timeline', (req, res) => {
  const { userName } = req.query;
  const params = {screen_name: userName};

  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      res.json(tweets);
    }
  });
});

app.listen(8080, () => console.log("Running on localhost:8080"));