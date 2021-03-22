// This is the folder for the ban command. 

module.exports = {
// First we will give it a name and description.
    name: 'ban',
    description: 'This is a ban command! Ban any user from your server!',
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = messages.guild.members.cache.get(member.id)
            memberTarget.ban();
            message.channel.send('`That user has been banned`:hammer:');

        }else{
            message.chanel.send('`Please mention a valid user.`');
        }
    }
}
