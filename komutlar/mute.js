const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('ms')

exports.run = async(client,message,args) => {

 var rol = await db.fetch(`muteyetkilirol_${message.guild.id}`, rol)
let rol2 = message.guild.roles.find('id', rol)
if(!message.member.roles.has(db.fetch(`muteyetkilirol_${message.guild.id}`, rol))) return message.channel.send(new Discord.RichEmbed().setColor('#ffd100')
.setDescription("Bu Komutu Kullanmak İçin mute yetkili rolde bulunmanız gerekmektedir \n henüz ayarlı değilse : `z!mute-yetkili-rol @rol`"));


  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let sebep = args[2]
  if(!tomute) return message.reply("<a:carpi:813850878229479496> | Yanlış komut!\n✔| Doğru Kullanım:  ``z!mute <@Kullanıcı> <Süre> <sebep>`` Olarak Yazmalısınız.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("<a:carpi:813850878229479496> Bu kullanıcıyı muteleyemem. \nSebepleri Şunlar Olabilir;\n  <a:carpi:813850878229479496> | Bu kullanıcının rolü benim rolümden yüksek olabilir,\n  <a:carpi:813850878229479496> | Kullanıcı ben olabilirim,\n  <a:carpi:813850878229479496> | Kullanıcı ile aynı rolde olabiliriz.")
let muterole = message.guild.roles.find(r => r.name === "Mute | Susturulmuş");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Mute | Susturulmuş",
        color: "#ffd100",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.reply("<a:carpi:813850878229479496> | Yanlış komut!\n✔| Doğru Kullanım:  ``z!mute <@Kullanıcı> <Süre> <sebep>`` Olarak Yazmalısınız.");

  await(tomute.addRole(muterole.id));
  message.reply(`**<a:tik:813060100335206421> | Başarılı**\n\n<a:tik:813060100335206421> | <@${tomute.id}> Kullanıcı başarılı şekilde mutelendi. \n<a:tik:813060100335206421> | Mute süresi;
${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<a:tik:813060100335206421> | <@${tomute.id}> Kişinin susturulma süresi doldu!\n<a:tikv1:782178277233786890> | \`Mute | Susturulmuş\` rolü alındı!`);
  }, ms(mutetime));
  //message.channel.find("va-log")

 let user = message.mentions.users.first();

 let mutelog = db.get(`mutelog_${message.guild.id}`)
const mute_log = client.channels.get(mutelog);
    mute_log.send(
new Discord.RichEmbed()
    .setColor('#ffd100')
    .setTimestamp()
    .addField('<:hype:813061092611326003> Eylem:', 'Mute atma')
    .addField('<:hype:813061092611326003> Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('<:hype:813061092611326003> Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('<:hype:813061092611326003> Sebep', sebep)
)

  }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
  };
  
  exports.help = {
    name: "mute",
  category: 'Mod',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'uyar <@kişi-etiket> <sebep>'
};