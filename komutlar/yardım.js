const db = require("quick.db");
const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = ayarlar.prefix
let embed = new Discord.RichEmbed()  
.setAuthor(`MysTeria | Yardım Menüsü`, client.user.avatarURL)
.setColor('#ffd100')

.addField(`**Kullanıcı Yardım**`,`<:hype:813061092611326003> \`${prefix}kullanıcı-yardım\``,true)
.addField(`**Uyarı Yardım**`,`<:hype:813061092611326003> \`${prefix}uyarı-yardım\``,true)

.setImage(`https://www.bayramkoyu.com/resimekleme/432020811971.png`)



 message.channel.send(embed) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["y","y"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardım'
  }; 
