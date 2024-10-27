import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*Waduhh, Owner *PannOffc* Datang, Ayo Tepuk Tangan.\n@${m.sender.split('@')[0]}`
await conn.reply(m.chat, info, m, { contextInfo: { mentionedJid: [m.sender],forwardingScore: 256,
      showAdAttribution: true, externalAdReply: { title: author, body: bottime, sourceUrl: syt, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
}
handler.customPrefix = /^(halo)$/i
handler.command = new RegExp
handler.owner= true

export default handler