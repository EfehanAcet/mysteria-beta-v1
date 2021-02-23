const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`MysTeria | Kullanıcı Yardım Menüsü`, client.user.avatarURL)
.setColor('#ffd100')
.addField(`**Avatar**`,`<:hype:813061092611326003> \`${prefix}avatar\``,true)
.addField(`**Davet**`,`<:hype:813061092611326003> \`${prefix}davet\``,true)
.addField(`**Destek**`,`<:hype:813061092611326003> \`${prefix}destek\``,true)
.addField(`**Çay**`,`<:hype:813061092611326003> \`${prefix}çay\``,true)
.addField(`**Profil**`,`<:hype:813061092611326003> \`${prefix}profil\``,true)
.addField(`**Ping**`,`<:hype:813061092611326003> \`${prefix}ping\``,true)
.addField(`**İstatistik**`,`<:hype:813061092611326003> \`${prefix}istatistik\``,true)
.addField(`**Embed**`,`<:hype:813061092611326003> \`${prefix}embed\``,true)

  //etImage(`https://dynamic.brandcrowd.com/asset/logo/d588330f-b11c-4482-baff-49323323a8c0/logo?v=4&text=ZyRox`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["kullanıcı","ky"], 
    permLevel: 0
  };
  exports.help = {
    name: 'kullanıcı-yardım'
  }; 
  