//Credits Jangan Dihapus
//Thanks To Papah-Chan
import fetch from 'node-fetch'
var handler = async(m, { conn, text, usedPrefix, command }) => {

    let str = `*📢 ʏ ᴛ - ᴏ ᴡ ɴ ᴇ ʀ*

*⚗️ ɴᴀᴍᴀ: PannBotzz*
*⚗️ ᴘʀᴏғɪʟᴇ ᴘʜᴏᴛᴏ: ᴛʀᴜᴇ*
*⚗️ ʟɪɴᴋ ʏᴛ: https://youtube.com/@PannBotzz*

_"Barang siapa yang subscribe channel gua, ya gapapa sih 🗿"_`
    let waifu = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/waifu.txt')
    let chen = await waifu.text()
    let ran = chen.split('\n')
    let yae = ran[Math.floor(Math.random() * ran.length)]
    let thumb = await(await fetch(yae)).buffer()
    await conn.reply(m.chat, str, m, global.fakeig) 
}
handler.help = ['ytowner', 'ytown']
handler.tags = ['info', 'main']
handler.command =  /^(ytowner|ytown)$/i

export default handler