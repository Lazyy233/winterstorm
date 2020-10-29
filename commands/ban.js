module.exports = {
    run: async(client, message, args) => {

if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Invalid Permissions")
let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
if (!User) return message.channel.send("Invalid User")
if (User.hasPermission("BAN_MEMBERS")) return message.reply("Missing Permissions")
let banReason = args.join(" ").slice(22);
if (!banReason) {
  banReason = "None"
}
    }
}
User.ban({reason: banReason})

module.exports.config = {
    name: "ban",
    description: "Bans a Users",
    usage: ",ban",
    accessableby: "Admins",
    aliases: ['b']
}
