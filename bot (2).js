const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543285678356561942")
setInterval(function() {
channel.send(`nt community spam xd 2019`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
