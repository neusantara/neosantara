import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
'⋘ 𝑃𝑙𝑒𝑎𝑠𝑒 𝑤𝑎𝑖𝑡...  𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝑑𝑎𝑡𝑎... ⋙',
'▒▒▒▒▒▒▒▒▒▒ 0%',
'█▒▒▒▒▒▒▒▒▒ 10%',
'███▒▒▒▒▒▒▒ 30%',
'█████▒▒▒▒▒ 50%',
'███████▒▒▒ 70%',
'█████████▒ 90%',
'██████████ 100%',
'Ｓｕｃｃｅｓｓ...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let pfft = `
ubah di bawah!!!
`;
 conn.sendMessage(m.chat, {
      video: { url: "https://telegra.ph/file/a65f6339ae5c8c3338e3b.mp4"},
      gifPlayback: true,
      caption: '*––––––『 BIG THANKS TO 』––––––*\n\n*ᴀᴅɪᴡᴀᴊsʜɪɴɢ*\n*ɴᴜʀᴜᴛᴏᴍᴏ*\n*ɪsᴛɪᴋᴍᴀʟ* \n*ᴀʀɪғғʙ*\n*ɪʟᴍᴀɴ*\n*ᴀᴍɪʀᴜʟ*\n*ʀᴀsᴇʟ*\n*ғᴀᴛᴜʀ*\n*ʀᴏᴍɪɴᴀʀᴜ*\n*ᴋᴀɴɴᴀᴄʜᴀɴɴ*\n*ᴛʜᴇ.sᴀᴅ.ʙᴏʏ𝟶𝟷*\n*ᴀᴍᴇʟɪᴀsᴄʀғ*\n*ғᴏᴋᴜs ɪᴅ*\n*ᴀᴍᴍᴀʀʙɴ*\n*ʀᴇʏᴢxᴅ*\n𝙋𝙖𝙣𝙣𝙊𝙛𝙛𝙘\n\n*––––––『 THANKS TO 』––––––*\n𝙋𝙖𝙣𝙣𝙊𝙛𝙛𝙘\n𝙓𝙧𝙠𝙨𝙤𝙤\n𝙇𝙞𝙡𝙞𝙩𝙝 𝘿𝙚𝙥𝙚𝙡𝙤𝙫𝙚𝙧',
      contextInfo: {
      externalAdReply: {
      title: `© All Thanks To`,
      body: global.author,
      thumbnailUrl: 'https://telegra.ph/file/a62423e905cb31d09f1af.jpg',
      sourceUrl: `https://chat.whatsapp.com/JR5Ac5IjVFQFab3fEbMXar`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
              let vn = "./mp3/thanksto.mp3"
      
	conn.sendFile(m.chat, vn, "ehee.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
}
handler.command = /^(tqto|thanksto)$/i;

export default handler;