var client = require('./client');

var tweetRandomSentence = function(tweet) {
  tweet = tweet.toString();
  client.post('statuses/update', {status: tweet}, function(error, tweet, response) {
      if(error) {
        console.log(error);
      }
      else {
        console.log(tweet);
      }
  });
};

module.exports.tweetRandomSentence = tweetRandomSentence;
