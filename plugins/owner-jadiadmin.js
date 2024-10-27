let handler = async (m, { conn, text, participants }) => {
if (!text) throw `Masukan Nomer!!, Contoh : [.jadiadmin 628310351996]👍`
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'promote')
m.reply(`Donee!!`)
}
handler.help = ['jadiadmin']
handler.tags = ["owner"]
handler.command = /^(jadiadmin)$/i
handler.botAdmin = true
handler.owner = true
handler.group = true
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))