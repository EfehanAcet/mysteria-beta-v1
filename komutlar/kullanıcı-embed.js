const Discord = require('discord.js')
const { RichEmbed } = require('discord.js')
exports.run = (client, message, args) => {

  let yazıİçeriği = args.slice().join(' ')
  const Mesaj = new RichEmbed()
    .setColor('#ffd100')
    .setDescription(yazıİçeriği)

message.channel.send(Mesaj)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['embed', 'embedyazı'],
  permLevel: 0
}

exports.help = {
  name: 'embed-yaz'
}