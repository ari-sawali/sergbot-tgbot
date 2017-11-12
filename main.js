const TOKEN = '320873238:AAFOkvuxfvNbrY_ONLFF3TaexeSkA4vuleg';
const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
const usefulFunctions = require('./useful.js');
const merp = require('./merp.js');
const furs = require('./furs.js');
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

var dice = function(sides) {
	var value = Math.random();
  var dieSides = Number(sides);
  console.log('dieSides: ' + dieSides);
  if (dieSides == NaN) {
    return 'NaN, dummy';
  }
	value = (value * (dieSides + 1));
	value = Math.floor(value);
	while(value == 0) {
		value = Math.random();
		value = (value * 7);
		value = Math.floor(value);
	};
  value = String(value);
  if (value == 'NaN') {
    return 'NaN, dummy';
  }
  else {
	  return value;
  }
}

var deathclock = function() {
	var value = Math.random();
	value = (value * 100);
	value = Math.floor(value);
	return value;
}

const bot = new TelegramBot(TOKEN, options);

bot.on('message', msg => {

  if (msg.text.startsWith('/')) {
    console.log('New message: ' + msg.text);
  }

  if (msg.text.startsWith('/bigsmoke')) {
    setTimeout(function(){bot.sendMessage(msg.chat.id, 'I\'ll have two number 9s,')}, 0);
    setTimeout(function(){bot.sendMessage(msg.chat.id, 'a number 9 large,')}, 1860);
    setTimeout(function(){bot.sendMessage(msg.chat.id, 'a number 6 with extra dip,')}, 3000);
    setTimeout(function(){bot.sendMessage(msg.chat.id, 'a number 7,')}, 4650);
    setTimeout(function(){bot.sendMessage(msg.chat.id, 'two number 45s, one with cheese,')}, 6000);
    setTimeout(function(){bot.sendMessage(msg.chat.id, 'and a large soda.')}, 8100);
  }

  else if (msg.text.startsWith('/cop')) {
  	 bot.sendMessage(msg.chat.id, 'Damn, I really want to watch');
  	 setTimeout(function(){bot.sendMessage(msg.chat.id, 'all');}, 750);
  	 setTimeout(function(){bot.sendMessage(msg.chat.id, 'six');}, 1500);
  	 setTimeout(function(){bot.sendMessage(msg.chat.id, 'police academy movies');}, 2250);
  }

  else if (msg.text.startsWith('/death')) {
    value = deathclock();
    if (value <= 10) {
      bot.sendMessage(msg.chat.id, 'Aww hell yeah, you only have ' + value + ' more years to go buddy. It\'s almost over!');
    }
    else if (value > 10 && value <= 20) {
      bot.sendMessage(msg.chat.id, 'Congratulations, only ' + value + ' more years to go of this disgusting nightmare for you.');
    }
    else if (value > 20 && value <= 30) {
      bot.sendMessage(msg.chat.id, 'Not too bad, ' + value + ' left.');
    }
    else if (value > 30) {
      bot.sendMessage(msg.chat.id, 'Sorry friend, you still have ' + value + ' years to suffer through.');
    };
  }

  else if (msg.text.startsWith('/foo')) {
    bot.sendMessage(msg.chat.id, 'bar!');
  }

  else if (msg.text.startsWith('/google')) {
    var searchTerm = prefixStripper(msg.text, '/google ');
    googleSearch(searchTerm, function(err, res){
      if (err) console.error(err)

      for (var x = 0; x < res.links.length; x++) {
        var link = res.links[x];
        bot.sendMessage(msg.chat.id, link.href);
      }
    })
  }

  else if (msg.text.startsWith('/merp')) {
    bot.sendPhoto(msg.chat.id, merp());
  }

  else if(msg.text.startsWith('/roxanne')) {
    bot.sendSticker(msg.chat.id, furs.roxanne());
  }

  else if(msg.text.startsWith('/yikole')) {
    bot.sendSticker(msg.chat.id, furs.yikole());
  }

  else if(msg.text.startsWith('/sudloo')) {
    bot.sendSticker(msg.chat.id, furs.sudloo());
  }

  else if (msg.text.startsWith('/owo')) {
    bot.sendMessage(msg.chat.id, 'what\'s this????');
  }

  else if (msg.text.startsWith('/ping')) {
    bot.sendMessage(msg.chat.id, 'pong!');
  }

  else if (msg.text.startsWith('/roll d')) {
    var sides = prefixStripper(msg.text, '/roll d');
    bot.sendMessage(msg.chat.id, 'You rolled a ' + dice(sides));
  }

  else if (msg.text.startsWith('/roll')) {
    bot.sendMessage(msg.chat.id, 'You rolled a ' + dice(6));
  }

  else if (msg.text.startsWith('/sergals')) {
    bot.sendMessage(msg.chat.id, 'are the cutest things ever');
  }

  else if (msg.text.startsWith('/yt')) {
    var searchTerm = prefixStripper(msg.text, '/yt ');
    youtube(searchTerm, opts, function(err, results) {
      if (err) return console.log(err);

      bot.sendMessage(msg.chat.id, results[0].link);
    })
  }

  else if (msg.text.startsWith('/help')) {
    bot.sendMessage(msg.chat.id, 'Hi sirs! I am a sergal .v. and can do the following:\nbigsmoke, cop, foo, owo, ping, sergals - unfunny memes\ndeath - find out when you will die :)\ngoogle - search Googie (e.g. /google illegal memes)\nmerp - furry memes owo\nroll - roll a dice. Default is 6, use d# to specify another die (e.g. d20)\nyt - search YouTube (e.g. /yt How to Handle an Aggressive Cheeseburger)');
  }

});

console.log('merp .v.');

/*Telegram Command List:
bigsmoke - unfunny meme
cop - unfunny meme
foo - unfunny meme
owo - unfunny furry meme
ping - unfunny meme
sergals - unfunny furry meme
death - find out when you will die :)
google - search Googie (e.g. /google illegal memes)
merp - furry memes owo
roll - roll a dice. Default is 6, use d# to specify another die (e.g. d20)
yt - search YouTube (e.g. /yt How to Handle an Aggressive Cheeseburger)
*/
