import { discordClient, robloxGroup } from '../../main';
import { CommandContext } from '../../structures/addons/CommandAddons';
import { Command } from '../../structures/Command';
import { checkIconUrl, getRoleListEmbed, greenColor, mainColor, quoteIconUrl } from '../../handlers/locale';
import { config } from '../../config';
import { TextChannel } from 'discord.js';

class SessionCommand extends Command {
    constructor() {
        super({
            trigger: 'contact',
            description: 'Contacts a SHR to help you in game',
            type: 'ChatInput',
            module: 'help',
            permissions: [
                {
                    type: 'role',
                    ids: config.permissions.users,
                    value: true,
                }
            ]
        });
    }

   async run(ctx: CommandContext) {
        const channel = await discordClient.channels.fetch('921905416034742362') as TextChannel;
        channel.send('<@&921905412134015051>')
        channel.send({
            embeds: [
                {
                    author: {
                        name: 'Help Needed!',
                        iconURL: quoteIconUrl,
                    },
                    description: 'A HR+ needs help in game! Please respond to this ASAP. Join the game with the link below\n[Join Here](https://www.roblox.com/games/7049202373/The-Gold-Cafe)',
                    color: mainColor,
                }  
           
            ]

        })
        
        return ctx.reply({
            embeds: [
                {
                    author: {
                        name: 'Success!',
                        iconURL: checkIconUrl,
                    },
                    description: 'I have alerted all the online SHRs to help you! Please wait for someone to join!',
                    color: greenColor,
                }
            ]
        });
    }
}

export default SessionCommand;
