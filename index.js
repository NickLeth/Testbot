const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Ldier (lvl. 0)');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('800607041801682954').send(`Velkommen til <@${guildMember.user.id}>`)
});

client.login('You token');
