const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`MysTeria | Destek`, client.user.avatarURL)
.setColor('#ffd100')
.addField(`**Destek Sunucum**`,`<:hype:813061092611326003> \`https://discord.gg/...\``,true)
//.addField(`**E - Posta **`,`<a:zyroxhype:781946043243036773> \`zyroxbot@yandex.com\``,true)
.addField(`**Sahibim**`,`<:hype:813061092611326003> \`! Expulso#0160\``,true)
.addField(`**Sahibim**`,`<:hype:813061092611326003> \`VladVK#0001\``,true)

  //etImage(`https://dynamic.brandcrowd.com/asset/logo/d588330f-b11c-4482-baff-49323323a8c0/logo?v=4&text=ZyRox`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["destek","destek"], 
    permLevel: 0
  };
  exports.help = {
    name: 'destek'
  }; 
  