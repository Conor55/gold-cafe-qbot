import { discordClient, robloxGroup } from '../../main';
import { CommandContext } from '../../structures/addons/CommandAddons';
import { Command } from '../../structures/Command';
import { checkIconUrl, getRoleListEmbed, greenColor, mainColor, quoteIconUrl } from '../../handlers/locale';
import { config } from '../../config';
import { TextChannel } from 'discord.js';

class SessionCommand extends Command {
    constructor() {
        super({
            trigger: 'training',
            description: 'Announces a training in both this server and the group.',
            type: 'ChatInput',
            module: 'sessions',
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
        const channel = await discordClient.channels.fetch('921905412863823908') as TextChannel;
        channel.send('<@&921905411853017145>')
        channel.send({
            embeds: [
                {
                    author: {
                        name: 'Session Announcement',
                        iconURL: quoteIconUrl,
                    },
                    description: 'Hey, a training is being hosted! So come on down to the training center for a chance of a promotion!\n\n[Join Here!](https://www.roblox.com/games/6570552882/Training-Centre)',
                    color: mainColor,
                }  
           
            ]

        });
        robloxGroup.updateShout('Hey there! A training is hosted! If your staff come on down to the training center before it gets slocked!');
        return ctx.reply({
            embeds: [
                {
                    author: {
                        name: 'Success!',
                        iconURL: checkIconUrl,
                    },
                    description: 'This has been posted as a group shout and a message in the session announcements channel.',
                    color: greenColor,
                }
            ]
        });
    }
}

export default SessionCommand;
