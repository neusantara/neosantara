let handler  = async (m, { conn, usedPrefix: _p }) => {
let cap = `On Kak @${m.sender.split`@`[0]}`
conn.reply(m.chat, cap, m, { quoted : fkontak }, { mentions: await conn.parseMention(cap) } )
}
handler.customPrefix = /^(bot)$/i
handler.command = new RegExp

export default handler