const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

// For system to know if bot is online it has to console log "Bot has started", don't change this if you don't want errors
client.on('ready', () => {
    console.log('Bot has started')
})

client.on("messageCreate", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});


client.login("YOUR TOKEN HERE");
