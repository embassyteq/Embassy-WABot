module.exports = {
    name: 'demote',
    run: async (sock, message, args) => {
        const from = message.key.remoteJid;
        await sock.sendMessage(from, { text: 'Demote mentioned user.' });
    }
};