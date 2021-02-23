const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');
require('moment-duration-format');
exports.run = async(cclient, message, args) => {

let cembed = new Discord.RichEmbed()
.setAuthor(cclient.user.username, cclient.user.avatarURL)
.setThumbnail(message.author.avatarURL)
.setTimestamp()
.addField("Bot Verileri", `<:hype:813061092611326003> Toplam Sunucu **|** **${cclient.guilds.size}** \n<:hype:813061092611326003> Toplam Kullanıcı **|** **${cclient.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n<:hype:813061092611326003> Toplam kanal **|** **${cclient.channels.size}**`)
.addField("Yapımcılar", `<:kraltac:813060095772327976> <@807904406560964608> **|** **! Eхpυlѕo#0160**`)
.addField("Yapımcılar", `<:kraltac:813060095772327976> <@794626848662618143> **|** **VladVK#0160**`)


.addField("Gecikmeler", `Bot Pingi **|** **${cclient.ping}** \nMesaj Gecikmesi **|** **${new Date().getTime() - message.createdTimestamp}**`)
.setColor("#ffd100")
message.channel.send(cembed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['istatistik','i'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'botbilgi',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };
