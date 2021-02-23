const Discord = require('discord.js');
exports.run = function(client, message, args) {
  
  message.channel.send(
  
  "**<:hype:813061092611326003> Ping Ölçülüyor..**"
  
  ).then(
  function(i){
    i.edit("** <:hype:813061092611326003> Ping Yazılıyor <a:zyroxhype:781946043243036773>**") 
    message.edit(500)
    i.edit(
    new Discord.RichEmbed()
    .setDescription(`<:hype:813061092611326003> | **MysTeria Botunun Pingi:** ` + client.ping+`ms | <:hype:813061092611326003>`)
    .setColor('#ffd100')
    )
  })
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],//Komutun farklı kullanımları
  permLevel: 0
};
exports.help = {
  name: 'ping',
  description: 'Botun gecikme süresini gösterir',
  category: 'bot',
  usage: 'ping'
}