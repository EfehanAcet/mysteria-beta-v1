const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;


module.exports = async client => {
    client.appInfo = await client.fetchApplication();
    setInterval( async () => {
      client.appInfo = await client.fetchApplication();
    }, 60000);
  
  console.log(`BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  client.user.setGame(`m!yardım - m!davet`);

};
console.log(`Sa Geldim`)
