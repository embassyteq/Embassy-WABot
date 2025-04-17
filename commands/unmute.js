module.exports = {
    name: 'unmute',
    run: async (sock, message, args) => {
        const from = message.key.remoteJid;
        await sock.sendMessage(from, { text: 'Allow everyone to message.' });
    }
};