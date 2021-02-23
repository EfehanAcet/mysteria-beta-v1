const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
require('./util/eventLoader.js')(client);
const ms = require('ms');
const DBL = require('dblapi.js');






var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   l0RDconsole.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// }); //DEVİLHOUSE//

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//---------------------------------KOMUTLAR---------------------------------\\


//tel
const Constants = require("discord.js/src/util/Constants.js");
Constants.DefaultOptions.ws.properties.$browser = "Discord iOS";


// Eklendiğinde Ownera Mesaj

client.on("guildCreate", guild => {

  let murphy = guild.owner

const dcs = new Discord.RichEmbed()
.setTitle(`Merhaba!`)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.setColor("#ffd100")//dcs
.addField('Prefixim ;', ayarlar.prefix)
.addField(`Beni Eklediğin İçin`, `Teşekkürler`)
murphy.send(dcs)
});

//+-

client.on("guildCreate", guild => {
  let codeming1 = client.channels.get("813060330146103306")

 const codeming = new Discord.RichEmbed()
.setTitle("SUNUCUYA EKLENDİM")
.setColor("#11ff00")
.addField('<:hype:813061092611326003> **Sunucu ID**', `\`${guild.id}\``)
.addField('<:hype:813061092611326003> **Sunucu İsmi**', `\`${guild.name}\``)
.addField('<:hype:813061092611326003> **Üye Sayısı**', `\`${guild.members.size}\``)
.addField('<:hype:813061092611326003> **Kurucu**', `\`${guild.owner.user.tag}\``)
.addField('<:hype:813061092611326003> **Kurucu ID**', `\`${guild.owner.user.id}\``)
codeming1.send(codeming)
});

client.on("guildDelete", guild => {
  let codeming2 = client.channels.get("813060330146103306")

 const codeming3 = new Discord.RichEmbed()
.setTitle("SUNUCUDAN ATILDIM")
.setColor("#ff0000")
.addField('<:hype:813061092611326003> **Sunucu ID**', `\`${guild.id}\``)
.addField('<:hype:813061092611326003> **Sunucu İsmi**', `\`${guild.name}\``)
.addField('<:hype:813061092611326003> **Üye Sayısı**', `\`${guild.members.size}\``)
.addField('<:hype:813061092611326003> **Kurucu**', `\`${guild.owner.user.tag}\``)
.addField('<:hype:813061092611326003> **Kurucu ID**', `\`${guild.owner.user.id}\``)
codeming2.send(codeming3)
});

//sahibimi etiketleme Efehan

client.on('message', message => {
 if (message.content.toLowerCase() === '<@807904406560964608>') {
 message.delete()
 message.channel.send('<:hype:813061092611326003>** Sahibimi Etiketlemeyi Kes!** <:hype:813061092611326003>').then(message => message.delete(5000))

}
});

//sahibimi etiketleme Arda

client.on('message', message => {
 if (message.content.toLowerCase() === '<@794626848662618143>') {
 message.delete()
 message.channel.send('<:hype:813061092611326003>** Sahibimi Etiketlemeyi Kes!** <:hype:813061092611326003>').then(message => message.delete(5000))

}
});

//////////////////////////MODLOG///////////////////
client.on('messageDelete', async message   => { // mod-log
      let modlogs = db.get(`log_${message.guild.id}`)
    const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);    
if (!modlogkanal) return;
  const embed = new Discord.RichEmbed()
  .setColor("#ffd100")
  .setTitle("MESAJ SİLİNDİ")
.setDescription(`<:hype:813061092611326003> <@!${message.author.id}> adlı kullanıcı tarafından <#${message.channel.id}> kanalına gönderilen mesaj silindi!\n\nSilinen Mesaj: **${message.content}**`)
  .setFooter("MysTeria | Log Sistemi")
  modlogkanal.sendEmbed(embed);
  })

client.on('guildBanAdd', async message  => {
      let modlogs = db.get(`log_${message.guild.id}`)
    const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);    
if (!modlogkanal) return;
  const embed = new Discord.RichEmbed()
  .setColor("#ffd100")

    .setDescription(`<:hype:813061092611326003> Üye Sunucudan Yasaklandı! \n<@!${message.user.id}>, ${message.user.tag}`)
        .setThumbnail(message.user.avatarURL)
  .setFooter("MysTeria | Log Sistemi")
  modlogkanal.sendEmbed(embed);
  })
client.on('channelCreate', async channel  => {
      let modlogs = db.get(`log_${channel.guild.id}`)
    const modlogkanal = channel.guild.channels.find(kanal => kanal.id === modlogs);    
if (!modlogkanal) return;
    if (channel.type === "text") {
                let embed = new Discord.RichEmbed()
                    .setColor('#ffd100')
                .setDescription(`<:hype:813061092611326003> ${channel.name} adlı metin kanalı oluşturuldu.`)
                .setFooter(`MysTeria | Log Sistemi Kanal ID: ${channel.id}`)
                modlogkanal.send({embed});
            };
            if (channel.type === "voice") {
                let embed = new Discord.RichEmbed()
                .setColor('#ffd100')
.setTitle("SES KANALI OLUŞTURULDU")
                .setDescription(`<:hype:813061092611326003> ${channel.name} adlı ses kanalı oluşturuldu!`)
                .setFooter(`MysTeria | Log Sistemi Kanal ID: ${channel.id}`)

                modlogkanal.send({embed});
            }
        
    })
client.on('channelDelete', async channel  => {
      let modlogs = db.get(`log_${channel.guild.id}`)
    const modlogkanal = channel.guild.channels.find(kanal => kanal.id === modlogs);    
if (!modlogkanal) return;
    if (channel.type === "text") {
                let embed = new Discord.RichEmbed()
                    .setColor('#ffd100')
                .setDescription(`<:hype:813061092611326003> ${channel.name} adlı metin kanalı silindi!`)
                .setFooter(`MysTeria | Log Sistemi Kanal ID: ${channel.id}`)
                modlogkanal.send({embed});
            };
            if (channel.type === "voice") {
                let embed = new Discord.RichEmbed()
                .setColor('#ffd100')
.setTitle("SES KANALI SİLİNDİ")
                .setDescription(`<:hype:813061092611326003> ${channel.name} adlı ses kanalı silindi`)
            .setFooter(`MysTeria | Log Sistemi  Kanal ID: ${channel.id}`)
                modlogkanal.send({embed});
            }
    })
client.on("messageUpdate", async (oldMsg, newMsg) => {
  if (oldMsg.author.bot) return;
  var user = oldMsg.author;
  if (db.has(`log_${oldMsg.guild.id}`) === false) return;
  var kanal = oldMsg.guild.channels.get(db.fetch(`log_${oldMsg.guild.id}`).replace("<#", "").replace(">", ""))
  if (!kanal) return;
  const embed = new Discord.RichEmbed()
  .setColor("#ffd100")
  .addField("Kullanıcı", oldMsg.author.tag, true)
  .addField("Eski Mesaj",`  ${oldMsg.content}  `)
  .addField("Yeni Mesaj", `${newMsg.content}`)
  .setThumbnail(oldMsg.author.avatarURL)
  kanal.send(embed);  
        
    })
//////////////////////////////MODLOG///////////////////////////