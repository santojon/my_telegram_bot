const TelegramBot = require('node-telegram-bot-api');

var respList = ["dale tua ideia", "🤘", "que é carai", "oi porra!", "bora um café?", "que é mizera??!"]

// replace the value below with the Telegram token you receive from @BotFather
const token = '474753823:AAHwNcO0o3kLFMHDXZhf125mnnyB-PkqITE';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    console.log(msg.from)
    //bot.sendMessage(msg.chat.id,"🤘 " + msg.from['first_name'])
    if (msg.from['first_name'] == 'tonysilva'){
        bot.sendMessage(msg.chat.id, "toninho arruma uma nega")    
    }else{
        bot.sendMessage(msg.chat.id, getRandonAnswer())
    }
});

function getRandonAnswer(){
    return respList[randomInt(0, respList.length)]
}

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}