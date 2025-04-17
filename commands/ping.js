module.exports = {
    name: 'ping',
    run: async (sock, message, args) => {
        const from = message.key.remoteJid;
        await sock.sendMessage(from, { text: 'Pong!' });
    }
};