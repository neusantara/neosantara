import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
 ]

let { key } = await conn.sendMessage(m.chat, {text: 'Please Wait⏳️'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let pfft = `
pengalihan isu
`;
 conn.sendMessage(m.chat, {
      video: { url: "https://telegra.ph/file/5b55d501a53b569629c4c.mp4"},
      gifPlayback: true,
      caption: 'Ready SewaBot KyuuBotz-V3!!\nKeuntungan\n1. Bisa Download Musik/Video\n2. Bisa Main Game\n3. Bisa Download Apk\n4. Bisa Main Rpg\n5. Dll\n\n---[ List Harga ]---\n乂 1 Hari :\n• Price : RP 2.000/2k\n乂 7 Hari :\n• Price : RP 9.000/9k\n乂 14 Hari :\n• Price : RP 16.000/16k\n乂 24 Hari : \n• Price : RP 26.000/26k\n乂 30 Hari :\n• Price : RP 33.000/33k\n乂 Permanen :\n• Price : RP 38.000/38k *Close*\nMinat Pm Owner',
      contextInfo: {
      externalAdReply: {
      title: `© Sewa Bot KyuuBotz-V3`,
      body: global.author,
      thumbnailUrl: 'https://telegra.ph/file/a8a5ae0dfacd3f6a94f26.jpg',
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.command = /^(sewabot|botsewa|sewa)$/i;

export default handler;