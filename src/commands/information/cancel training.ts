import { discordClient, robloxGroup } from '../../main';
import { CommandContext } from '../../structures/addons/CommandAddons';
import { Command } from '../../structures/Command';
import { checkIconUrl, getRoleListEmbed, greenColor, mainColor, quoteIconUrl } from '../../handlers/locale';
import { config } from '../../config';
import { TextChannel } from 'discord.js';

class SessionCommand extends Command {
    constructor() {
        super({
            trigger: 'canceltraining',
            description: 'Announces that the training was cancelled in both this server and the group.',
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
        channel.send({
            embeds: [
                {
                    author: {
                        name: 'Session Announcement',
                        iconURL: quoteIconUrl,
                    },
                    description: 'Sadly the training was cancelled. Dont worry there will be more trainings hosted soon! You can still join us at the cafe!\n\n[Join Here](https://www.roblox.com/games/7049202373/The-Gold-Cafe)',
                    color: mainColor,
                }
            ]
        });
        robloxGroup.updateShout('Sadly the training has been cancelled by the host. Dont worry! There will be some more trainings hosted in the future! You can still join the cafe!');
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
