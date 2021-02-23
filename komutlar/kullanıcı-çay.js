 const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  const çaylar = new Discord.RichEmbed()
  
  .setColor('#ffd100')
   .setAuthor('Başarıyla Herkeze Çay Ismarlandı')
  .setImage('https://49.media.tumblr.com/54052861b55d3ef2432eb84263f547c0/tumblr_nx93foAYRo1s22rc8o1_500.gif')
  message.channel.send(çaylar)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['çay'],
    permLevel: 0
  };
  exports.help = {
    name: "herkezebendençay",
    description: "Herkeze Çay Ismarlarsınız",
    usage: "herkezebendençay"
  };