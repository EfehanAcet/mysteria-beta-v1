const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`MysTeria | Mute Yardım Menüsü`, client.user.avatarURL)
.setColor('#ffd100')
.addField(`**Mute Log**`,`<a:zyroxhype:781946043243036773> \`${prefix}mute-log\``,true)
.addField(`**Mute Yetkili Rol**`,`<a:zyroxhype:781946043243036773> \`${prefix}mute-yetkili-rol\``,true)
.addField(`**Mute**`,`<a:zyroxhype:781946043243036773> \`${prefix}mute\``,true)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["mute--yardım","ms"], 
    permLevel: 0
  };
  exports.help = {
    name: 'mute-sistemi'
  }; 
