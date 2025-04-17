module.exports = {
    name: 'ban',
    run: async (sock, message, args) => {
        const from = message.key.remoteJid;
        await sock.sendMessage(from, { text: 'Remove tagged user from group.' });
    }
};