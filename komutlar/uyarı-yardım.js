const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`MysTeria | Uyarı Yardım Menüsü`, client.user.avatarURL)
.setColor('#ffd100')
.addField(`**Uyarı Ver**`,`<:hype:813061092611326003> \`${prefix}uyar @user\``,true)
.addField(`**Uyarı Sil**`,`<:hype:813061092611326003> \`${prefix}uyarı-sil @user\``,true)
.addField(`**Uyarılar**`,`<:hype:813061092611326003> \`${prefix}uyarılar @user\``,true)

  
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["uyarıyardım","uy","uyarı-yardım"], 
    permLevel: 0
  };
  exports.help = {
    name: 'uyarı-yardım'
  }; 
