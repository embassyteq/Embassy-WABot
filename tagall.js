module.exports = {
    name: 'tagall',
    run: async (sock, message, args) => {
        const from = message.key.remoteJid;
        await sock.sendMessage(from, { text: 'Mention everyone in the group.' });
    }
};