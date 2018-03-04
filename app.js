const Discord = require('discord.js')
  , client  = new Discord.Client();
  var prefix = "-";
  
  client.on("message", message => {
    if(message.content == "ping"){
    message.channel.send("pong");
    }
});

client.login(process.env.BOT_TOKEN)
