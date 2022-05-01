import { BotConfig } from './structures/types'; 

export const config: BotConfig = {
    groupId: 9697831,
    slashCommands: true,
    legacyCommands: {
        enabled: false,
        prefixes: ['q!'],
    },
    permissions: {
        all: ['921905411853017142'],
        ranking: [''],
        users: [''],
        shout: [''],
        join: [''],
        signal: [''],
        admin: [''],
    },
    logChannels: {
        actions: '934745724988571658',
        shout: '934745724988571658',
    },
    database: {
        enabled: true,
        type: 'mongodb',
    },
    api: true,
    maximumRank: 255,
    verificationChecks: true,
    firedRank: 1,
    suspendedRank: 3,
    recordManualActions: true,
    memberCount: {
        enabled: false,
        channelId: '963359399458525184',
        milestone: 300,
        onlyMilestones: false,
    },
    xpSystem: {
        enabled: true,
        autoRankup: true,
        roles: [
          {
                rank: 5,
                xp: 60,
            },
              {
                rank: 6,
                xp: 150,
            },
              {
                rank: 7,
                xp: 250,
            },
            {
                rank: 8,
                xp: 320,
            },
      
        ],
    },
    antiAbuse: {
        enabled: true,
        clearDuration: 1 * 60,
        threshold: 5,
        demotionRank: 1,
        bypassRoleId: '',
    },
    activity: {
        enabled: true,
        type: 'PLAYING',
        value: 'The Gold Cafe Ranking | /help',
    },
    status: 'online',
    deleteWallURLs: true,
}

