const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
  const embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .addField(`<:hype:813061092611326003> Botu Sunucunuza Davet Edin !`, `[Tıkla](https://discord.com/api/oauth2/authorize?client_id=812773325440942120&permissions=8&scope=bot)`)
.setFooter(client.user.username, client.user.avatarURL)

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet'],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "davet",
  description: "davet",
  usage: "davet"
};
