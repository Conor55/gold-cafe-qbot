import { discordClient, robloxGroup } from '../../main';
import { CommandContext } from '../../structures/addons/CommandAddons';
import { Command } from '../../structures/Command';
import { checkIconUrl, getRoleListEmbed, greenColor, mainColor, quoteIconUrl } from '../../handlers/locale';
import { config } from '../../config';
import { TextChannel } from 'discord.js';

class SessionCommand extends Command {
    constructor() {
        super({
            trigger: 'endshift',
            description: 'Announces its end of a shift in both this server and the group.',
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
        const channel = await discordClient.channels.fetch('921905412863823909') as TextChannel;
        channel.send({
            embeds: [
                {
                    author: {
                        name: 'Session Announcement',
                        iconURL: quoteIconUrl,
                    },
                    description: 'Sadly the shift has ended. Couldnt attend or failed? Theres always next time! We hope to see you next shift!\nBut you can still join us on the cafe\n\n[Join Here!](https://www.roblox.com/games/7049202373/The-Gold-Cafe#!/about)',
                    color: mainColor,
                }
            ]
        });
        robloxGroup.updateShout('Sadly the shift has ended! Thank you everyone for attending!');
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
