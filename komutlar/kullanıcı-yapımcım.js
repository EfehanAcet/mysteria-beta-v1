const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`MysTeria | Yapımcılar`, client.user.avatarURL)
.setColor('##ffd100')
.addField("Yapımcılar", `<:kraltac:813060095772327976> <@807904406560964608> **|** **! Eхpυlѕo#0160**`)
.addField("Yapımcılar", `<:kraltac:813060095772327976> <@794626848662618143> **|** **VladVK#0160**`)


  //etImage(`https://dynamic.brandcrowd.com/asset/logo/d588330f-b11c-4482-baff-49323323a8c0/logo?v=4&text=ZyRox`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yapımcı","yapımcılar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'beni-yapanlar'
  }; 
  