const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {

 if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
    }
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, I do not have enough permission to use this command`)
    }
     let target = message.mentions.members.first();
    
    if(!target) {
      return message.channel.send(`**${message.author.username}**, Please mention the person who you want to ban`)
    }
     if(target.id === message.author.id) {
     return message.channel.send(`**${message.author.username}**, You can not ban yourself`)
    }
     if(!args[1]) {
    return message.channel.send(`**${message.author.username}**, Please Give Reason to ban`)
  }
     let embed = new discord.MessageEmbed()
    .setTitle("Action: ban")
    .setDescription(`ban ${target} (${target.id})`)
    .setColor("#ff2050")
    .setFooter(`Banned by ${message.author.username}`);
    
 message.delete()   
 message.channel.send(embed)
    
    target.ban(args[1]);
    
    
}

module.exports.config = {
    name: "ban",
    description: "Bans a user",
    usage: ",ban",
    accessableby: "Admins",
    aliases: ['b']
}
