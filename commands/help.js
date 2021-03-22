// Here is the folder for the help command.
module.exports = {
// We will give it a name and description.
    name: 'help',
    description: 'This is a help command! Use this command to see info about this bot!',
    execute(message, args, Discord){
// Now we are making an embed to make the message look better.
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#de1b1b')
        .setTitle('Bot Info')
        .setDescription('This is a help command for this bot. Here is all the info about this bot!')
        .addFields(
            {name: 'Ban Command', value: 'This is a ban command, ban any user from your server'},
            {name: 'Kick Command', value: 'Kick a user from your server! '},
            {name: 'Hello!', value: 'A simple hello command to say hi to the bot! '}
        )
        .setFooter('Have a great time using this bot!');
// This is the end of the embed, now we have to send it.
        message.channel.send(newEmbed)
    }
}