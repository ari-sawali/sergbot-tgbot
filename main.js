const TOKEN = '320873238:AAFOkvuxfvNbrY_ONLFF3TaexeSkA4vuleg';
const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
var youtube = require('youtube-search');
var opts = {
  maxResults: 1,
  key: 'AIzaSyCrQyzTLBvFEyfGicb3vZ1U0Mfj8eoe8Rk'
}

var googleSearch = require('google');
googleSearch.resultsPerPage = 1;
const options = {
  polling: true
};

var prefixStripper = function(msgContent, prefix) {
  msg = msgContent;
  var newMsg = msg.replace(prefix, '');
  return newMsg;
};

const bot = new TelegramBot(TOKEN, options);

bot.on('message', msg => {

  if (msg.text.startsWith('/foo')) {
    bot.sendMessage(msg.chat.id, 'bar!');
  }

  else if (msg.text.startsWith('/yt')) {
    var searchTerm = prefixStripper(msg.text, '/yt ');
    youtube(searchTerm, opts, function(err, results) {
      if (err) return console.log(err);

      bot.sendMessage(msg.chat.id, results[0].link);
    })
  }

  else if (msg.text.startsWith('/help')) {
    bot.sendMessage(msg.chat.id, 'Hi sirs! I am a sergal .v. and can do the following:\nfoo - unfunny memes\nyt - search YouTube');
  }

});
