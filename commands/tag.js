module.exports = {
    name: 'tag',
    run: async (sock, message, args) => {
        const from = message.key.remoteJid;
        await sock.sendMessage(from, { text: 'Alias of tagall.' });
    }
};