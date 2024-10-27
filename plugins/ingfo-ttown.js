//Credits Jangan Dihapus
//Thanks To Papah-Chan
import fetch from 'node-fetch'
var handler = async(m, { conn, text, usedPrefix, command }) => {

    let str = `*📢 ᴛ ᴛ - ᴏ ᴡ ɴ ᴇ ʀ*

*⚗️ ɴᴀᴍᴀ: 𝐉𝐮𝐬𝐭𝐩𝐚𝐧𝐧*
*⚗️ ʟɪɴᴋ ᴛᴛ: https://tiktok.com/@storeepann*

_"Barang siapa yang follow akun tiktok gua, ya gapapa sih 🗿"_`
    let chen = await waifu.text()
    let ran = chen.split('\n')
    let yae = ran[Math.floor(Math.random() * ran.length)]
    let thumb = await(await fetch(yae)).buffer()
    await conn.reply(m.chat, str, m, global.fakeig) 
}
handler.help = ['ttowner', 'ttown']
handler.tags = ['info', 'main']
handler.command =  /^(ttowner|ttown)$/i

export default handler