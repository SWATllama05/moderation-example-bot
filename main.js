// To start this bot type "node ." in the terminal or Command Promt. This bot wont work unless you put your bot token in at the bottom.
// Make sure to read all the things in the README.md file!


// These are the constanse commands.
const Discord = require('discord.js');


const client = new Discord.Client();
 
// We need "dotenv" so the code can read whats in the .env file.
require("dotenv").config();

// You can find the prefix in the .env file and change it to whatever you want it to be.
const prefix = process.env.PREFIX;


// Here we are making an Advanced Command Handler, this will make it easier to store our commands. 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for( const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
 

// Here we are telling it to print a command when the bot is ready. We are also giving the bot a status.
client.once('ready', () =>{
    console.log('My bot is online!');
    client.user.setActivity('Discord Servers', {type: 'WACTHING'}).catch(console.error);

});


// Here we are making the first commands.
client.on('message', message => { 
    if(!message.content.startsWith(prefix)  || message.author.bot)  return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

// This is the first command, a simple test command.
    if(command == 'test'){
        message.channel.send('`This bot is online!` :green_circle:');
 
// This is out second command, you can keep on adding commands by adding an else if after every curly bracket.
    }else if (command == 'hello'){
        message.channel.send('`Hello there` :wave:');

// Now we will start to add the ban and kick command.

    } else if (command == 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if (command == 'kick'){
        client.commands.get('kick').execute(message, args);

// This is the Help command. You can type this to see some info about the bot.
    } else if(command == 'help'){
        client.commands.get('help').execute(message, args, Discord);
    }

    
})







  // Put your bot token here, it wont work without it. Make sure this is always the last line of code.
client.login('YOUR TOKEN HERE')
