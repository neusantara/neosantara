import JavaScriptObfuscator from 'javascript-obfuscator'

let handler = async (m, { conn, text }) => {
if (!text) throw `[!] masukan code yang mau di enc`
let res = JavaScriptObfuscator.obfuscate(text)
conn.reply(m.chat, res.getObfuscatedCode(), m)
}
handler.help = ['enc']
handler.tags = ['tools']
handler.command = /^enc$/i
handler.premium = true
export default handler