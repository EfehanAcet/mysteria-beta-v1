// Eklendiğinde Ownera Mesaj

client.on("guildCreate", guild => {

  let murphy = guild.owner

const dcs = new Discord.RichEmbed()
.setTitle(`Merhaba!`)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.setColor("#ff0000")//dcs
.addField('Prefixim ;', ayarlar.prefix)
.addField(`Beni Eklediğin İçin`, `Teşekkürler`)
murphy.send(dcs)
});

//+-

client.on("guildCreate", guild => {
  let codeming1 = client.channels.get("782176031759007744")

 const codeming = new Discord.RichEmbed()
.setTitle("SUNUCUYA EKLENDİM")
.setColor("#11ff00")
.addField('<a:zyroxhype:781946043243036773> **Sunucu ID**', `\`${guild.id}\``)
.addField('<a:zyroxhype:781946043243036773> **Sunucu İsmi**', `\`${guild.name}\``)
.addField('<a:zyroxhype:781946043243036773> **Üye Sayısı**', `\`${guild.members.size}\``)
.addField('<a:zyroxhype:781946043243036773> **Kurucu**', `\`${guild.owner.user.tag}\``)
.addField('<a:zyroxhype:781946043243036773> **Kurucu ID**', `\`${guild.owner.user.id}\``)
codeming1.send(codeming)
});

client.on("guildDelete", guild => {
  let codeming2 = client.channels.get("782176031759007744")

 const codeming3 = new Discord.RichEmbed()
.setTitle("SUNUCUDAN ATILDIM")
.setColor("#ff0000")
.addField('<a:zyroxhype:781946043243036773> **Sunucu ID**', `\`${guild.id}\``)
.addField('<a:zyroxhype:781946043243036773> **Sunucu İsmi**', `\`${guild.name}\``)
.addField('<a:zyroxhype:781946043243036773> **Üye Sayısı**', `\`${guild.members.size}\``)
.addField('<a:zyroxhype:781946043243036773> **Kurucu**', `\`${guild.owner.user.tag}\``)
.addField('<a:zyroxhype:781946043243036773> **Kurucu ID**', `\`${guild.owner.user.id}\``)
codeming2.send(codeming3)
});

//sahibimi etiketleme v3

client.on('message', message => {
 if (message.content.toLowerCase() === '<@361515225712820225>') {
 message.delete()
 message.channel.send('<a:zyroxhype:781946043243036773>** Sahibimi Etiketlemeyi Kes!** <a:zyroxhype:781946043243036773>').then(message => message.delete(5000))

}
});