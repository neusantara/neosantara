import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
 ]

let { key } = await conn.sendMessage(m.chat, {text: 'Loading ⏳️'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let pfft = `
pengalihan isu
`;
 conn.sendMessage(m.chat, {
      video: { url: "https://telegra.ph/file/6fe7c8a658701bd137c5d.mp4"},
      gifPlayback: true,
      caption: 'Script Ini Dijual Dengan Harga 10k\nFitured :\n乂 Textwa Menu\n乂 Jadibot Pairing *Coming Soon\n乂 Jb Menu\n乂 Tutor Menu\n乂 Beku Payment Menu\n乂 1000+ Fitur\n乂 Jadi Admin\n乂 PushKontak Menu\n乂 Store Menu\n乂 Free Update 1 Script\n乂 Dan Lain-Lain\n\nMau Script V3 Versi Ga Beta?? Nanti Admin Send Pas Bulan Maret!!, Knp? Soalnya Mau Perbaiki Fitur Yang Error!!\n\nLink Script : https://www.mediafire.com/file/ppltbvtogerk5s4/KyuuBotz-V3_Fitur_1000%252B_By_JustPann.zip/file',
      contextInfo: {
      externalAdReply: {
      title: `© Info Script KyuuBotz-V3`,
      body: global.author,
      thumbnailUrl: 'https://telegra.ph/file/a8a5ae0dfacd3f6a94f26.jpg',
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.command = /^(sc|script)$/i;

export default handler;