import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
' 𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝑑𝑎𝑡𝑎...',
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
      video: { url: "https://telegra.ph/file/9ac8918bc081b12262fa5.mp4"},
      gifPlayback: true,
      caption: 'KyuuBotz-V3 Adalah Bot WhatsApp yang dibuatkan oleh PannOffc, saya diciptakan Script untuk saya hidup, Kegunaan Bot ini adalah untuk Main Rpg, Main Games, Ada Fitur Ai, Download Music + Video, Download Tiktok, Youtube, Ig No Wm, Download Apk, Dll, Nah, Saya Sekarang Open *SewaBot* Harga nya bisa ketik .sewa, Owner saya telah membuat bot ini mulai dari 2023 sampai sekarang, Udah dulu yah, soalnya bingung🗿😭',
      contextInfo: {
      externalAdReply: {
      title: `© KyuuBotz-V3 About`,
      body: global.author,
      thumbnailUrl: 'https://telegra.ph/file/97cc66919b3fa27f2fdbd.jpg',
      sourceUrl: `https://chat.whatsapp.com/EgDgZS8tCDC86RHnazVQ00`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
              let vn = "./mp3/menu.mp3"
      
	conn.sendFile(m.chat, vn, "menu.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
}
handler.command = /^(about)$/i;

export default handler;