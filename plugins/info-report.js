let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `kalo kamu mau req fitur kamu bisa pakai perintah ini kakk\n\ncontoh:\n${usedPrefix + command}
.reqfitur selamat siang owner, saya mau request fitur, yaitu fitur <fitur yg lu mau request>`
    if (text.length < 10) throw `kependekan kakak, minimal 10 karakter!`
    if (text.length > 1000) throw `mo lapor?, pakai fitur .report aja!`
    let teks = `*${command.toUpperCase()}!*\n\nDari : *@${m.sender.split`@`[0]}*\n\nPesan : ${text}\n`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_Pesan terkirim kepemilik bot, jika ${command.toLowerCase()} hanya main-main tidak akan ditanggapi._`)
}
handler.help = ['reqfitur'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(reqfitur)$/i
export default handler
