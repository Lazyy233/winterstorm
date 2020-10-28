module.exports.run = async (bot, message, args) => {
      message.reply('Sup nerd')
}

module.exports.config = {
    name: "hello",
    description: "Answers hello",
    usage: ",hello",
    accessableby: "Members",
    aliases: ['hi']
}