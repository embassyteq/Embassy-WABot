module.exports = {
    name: 'remove',
    run: async (sock, message, args) => {
        const from = message.key.remoteJid;
        await sock.sendMessage(from, { text: 'Same as ban.' });
    }
};