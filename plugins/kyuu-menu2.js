import { createHash } from 'crypto'
let handler = async (m, { text, usedPrefix }) => {
let user = global.db.data.users[m.sender]
    user.registered = true
    let sn = createHash('md5').update(m.sender).digest('hex')
    let p = `> Welcome To KyuuBotz-V3 Beta\n\n乂 Info Bot\n- Name Bot : KyuuBotz-V3 Beta> \n- Creator Bot : .owner\n- Version Bot : V3 Beta\n\n乂 Command Bot \n- .menu\n- .allmenu\n- .menulist\n- .about\n- .sc\n- .sewa\n- .owner\n\n乂 Menu List\n⫹⫺ .menulist  absen\n⫹⫺. menulist ai\n⫹⫺. menulist anime\n⫹⫺. menulist animsearch\n⫹⫺. menulist anonymous\n⫹⫺. menulist asupan\n⫹⫺. menulist audio\n⫹⫺. menulist cerpen\n⫹⫺. menulist convert\n⫹⫺. menulist d - j\n⫹⫺. menulist dana\n⫹⫺. menulist database\n⫹⫺. menulist downloader\n⫹⫺. menulist fun\n⫹⫺. menulist game\n⫹⫺. menulist general\n⫹⫺. menulist gojek\n⫹⫺. menulist group\n⫹⫺. menulist hentai\n⫹⫺. menulist host\n⫹⫺. menulist image\n⫹⫺. menulist img\n⫹⫺. menulist info\n⫹⫺. menulist internet\n⫹⫺. menulist jadian\n⫹⫺. menulist kerang\n⫹⫺. menulist listbot\n⫹⫺. menulist main\n⫹⫺. menulist maker\n⫹⫺. menulist misc\n⫹⫺. menulist music\n⫹⫺. menulist nable\n⫹⫺. menulist news\n⫹⫺. menulist nowa\n⫹⫺. menulist nsfw\n⫹⫺. menulist openai\n⫹⫺. menulist owner\n⫹⫺. menulist panel\n⫹⫺. menulist pencarian\n⫹⫺. menulist pixiv\n⫹⫺. menulist pokemon\n⫹⫺. menulist premium\n⫹⫺. menulist primbon\n⫹⫺. menulist quotes\n⫹⫺. menulist quran\n⫹⫺. menulist random\n⫹⫺. menulist rpg\n⫹⫺. menulist search\n⫹⫺. menulist sound\n⫹⫺. menulist stalk\n⫹⫺. menulist sticker\n⫹⫺. menulist tools\n⫹⫺. menulist virus\n⫹⫺. menulist xp\n乂 Thanks To\n\n- *ᴀᴅɪᴡᴀᴊsʜɪɴɢ*\n- *ɴᴜʀᴜᴛᴏᴍᴏ*\n- *ɪsᴛɪᴋᴍᴀʟ* \n- *ᴀʀɪғғʙ*\n- *ɪʟᴍᴀɴ*\n- *ᴀᴍɪʀᴜʟ*\n- *ʀᴀsᴇʟ*\n- *ғᴀᴛᴜʀ*\n- *ʀᴏᴍɪɴᴀʀᴜ*\n- *ᴋᴀɴɴᴀᴄʜᴀɴɴ*\n- *ᴛʜᴇ.sᴀᴅ.ʙᴏʏ𝟶𝟷*\n- *ᴀᴍᴇʟɪᴀsᴄʀғ*\n- *ғᴏᴋᴜs ɪᴅ*\n- *ᴀᴍᴍᴀʀʙɴ*\n- *ʀᴇʏᴢxᴅ*\n- *𝙋𝙖𝙣𝙣𝙊𝙛𝙛𝙘*\n- *𝙓𝙧𝙠𝙨𝙤𝙤*\n- *𝙇𝙞𝙡𝙞𝙩𝙝 𝘿𝙚𝙥𝙚𝙡𝙤𝙫𝙚𝙧*\n乂 Script By Pannoffc`
    const arr = [
    { text:  `*[ W ]*\n\n${p}`, timeout: 100 },
    { text:  `*[ W E ]*\n\n${p}`, timeout: 100 },
    { text:  `*[ W E L ]*\n\n${p}`, timeout: 100 },
    { text:  `*[ W E L C ]*\n\n${p}`, timeout: 100 },
    { text:  `*[ W E L C O ]*\n\n${p}`, timeout: 100 },
    { text:  `*[ W E L C O M ]*\n\n${p}`, timeout: 100 },
    { text:  `*[ W E L C O M E]*\n\n${p}`, timeout: 100 },
    { text:  `*[ W E L C O M E  T ]*\n\n${p}`, timeout: 100 },
    { text:  `*[ W E L C O M E  T O ]*\n\n${p}`, timeout: 100 },
    { text: `*[ M ]*\n\n${p}`, timeout: 100 },
        { text:  `*[ M E ]*\n\n${p}`, timeout: 100 },
        { text:  `*[ M E N ]*\n\n${p}`, timeout: 100 },
        { text:  `*[ M E N U ]*\n\n${p}`, timeout: 100 },
        { text:  `*[ M E N U  K ]*\n\n${p}`, timeout: 100 },
        { text:  `*[ M E N U   K E ]*\n\n${p}`, timeout: 100 },
        { text:  `*[ M E N U  K E D ]*\n\n${p}`, timeout: 100 },
        { text:  `*[ M E N U   K E D U ]*\n\n${p}`, timeout: 100 },
        { text:  `*[ M E N U   K E D U A ]*\n\n${p}`, timeout: 100 },
    ];

    const lll = await conn.sendMessage(m.chat, { text: 'Loading ⏳....' }, { quoted: m });

    for (let i = 0; i < arr.length; i++) {
        await new Promise(resolve => setTimeout(resolve, arr[i].timeout));
        await conn.relayMessage(m.chat, {
            protocolMessage: {
                key: lll.key,
                type: 14,
                editedMessage: {
                    conversation: arr[i].text
                }
            }
        }, {});
    }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu2)$/i

export default handler