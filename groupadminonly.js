module.exports = {
    name: 'groupadminonly',
    run: async (sock, message, args) => {
        const from = message.key.remoteJid;
        await sock.sendMessage(from, { text: 'Admins-only mode.' });
    }
};