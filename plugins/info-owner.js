let handler = async (m, { conn, text, usedPrefix, command }) => {
await conn.sendMessage(m.chat);
conn.sendMessage(m.chat, {text: '*Owner : wa.me/6283196320578*'},{quoted: m, ephemeralExpiration: global.ephemeral})
}

handler.customPrefix = /^(owner)$/i
handler.command = new RegExp
export default handler