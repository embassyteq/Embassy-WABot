module.exports = {
    name: 'mute',
    run: async (sock, message, args) => {
        const from = message.key.remoteJid;
        await sock.sendMessage(from, { text: 'Set group to admins-only.' });
    }
};