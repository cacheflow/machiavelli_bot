var fs = require('fs');
var nlp = require('./node_modules/nlp_compromise');
var client = require('./client');
var tweet = require('./tweet');

Array.prototype.shuffle = function(array_elements) {
  var i = array_elements.length, randomNum, randomNumIndex;
  while(--i > 0) {
    randomNum = Math.floor(Math.random() * (i + 1));
     randomNumIndex = array_elements[randomNum];
     array_elements[randomNum] = array_elements[i];
     array_elements[i] = randomNumIndex;
  }
  return array_elements;
};

var readTextFile = fs.readFileSync('./Prince.txt', 'utf-8',
  function(error, data){
    if(error) {
      throw error;
    }
    else {
       return data;
    }
});


var convertTextToSentences = function(data) {
  var sentences = nlp.sentences(data);
  var randomSentences = Array.prototype.shuffle(sentences);
  for(var i = 0; i < randomSentences.length; ++i) {
    if(randomSentences[i].length <= 140) {
      return tweet.tweetRandomSentence(randomSentences[i]);
    }
  }
};

console.log(convertTextToSentences(readTextFile));
