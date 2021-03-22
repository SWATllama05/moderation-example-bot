// This is the folder for the kick command. 

module.exports = {
    // First we will give it a name and description.
        name: 'kick',
        description: 'This is a kick command! Kick any user from your server!',
        execute(message, args){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = messages.guild.members.cache.get(member.id)
                memberTarget.kick();
                message.channel.send('`That user has been kicked`:hammer:');
    
            }else{
                message.chanel.send('`Please mention a valid user.`');
            }
        }
    }