const TOKEN = '320873238:AAFOkvuxfvNbrY_ONLFF3TaexeSkA4vuleg';
const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
const options = {
  polling: true
};

const bot = new TelegramBot(TOKEN, options);

bot.onText(/\/foo/, function sendMessage(msg) {
  bot.sendMessage(msg.chat.id, 'bar!');
});
