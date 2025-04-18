const fs = require('fs');
const path = require('path');

const ownerJid = '2348106670473@s.whatsapp.net';

module.exports = async (sock, message) => {
    const from = message.key.remoteJid;
    const sender = message.key.participant || message.key.remoteJid;
    const body = message.message?.conversation || message.message?.extendedTextMessage?.text;
    if (!body) return;

    if (sender !== ownerJid) return;

    const args = body.trim().split(/\s+/);
    const commandName = args.shift().toLowerCase();

    const commandPath = path.join(__dirname, '..', 'commands', `${commandName}.js`);
    if (fs.existsSync(commandPath)) {
        try {
            const command = require(commandPath);
            await command.run(sock, message, args);
        } catch (err) {
            // Silently ignore errors
        }
    }
};
