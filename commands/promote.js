module.exports = {
    name: 'promote',
    run: async (sock, message, args) => {
        const from = message.key.remoteJid;
        await sock.sendMessage(from, { text: 'Promote mentioned user.' });
    }
};