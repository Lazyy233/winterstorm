module.exports.run = async (bot, message, args) => {
    let epicRole = message.guild.roles.cache.get('769772710678364162');
    const member = message.mentions.members.first();

    member.roles.add(epicRole);
    message.channel.send('Role Added')
}

module.exports.config = {
    name: "addvip",
    description: "",
    usage: ",addvip",
    accessableby: "Members",
    aliases: []
}