module.exports.run = async (bot, message, args) => {
    let epicRole = message.guild.roles.cache.get('769772710678364162');
    const member = message.mentions.members.first();
    
    message.delete()
    member.roles.remove(epicRole);
    message.channel.send('Role Removed')
}

module.exports.config = {
    name: "removevip",
    description: "",
    usage: ",removevip",
    accessableby: "Members",
    aliases: []
}
