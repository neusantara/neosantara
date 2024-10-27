import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
'Welcome To Simulator',
'Loading Data..',
'Memulai Hidup Simulator',
'Game Segera Dimulai',
'---- [ 30% ]',
'------ [ 50% ]',
'-------- [ 100%] ',
'Loading Succes..',
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let pfft = `
ubah di bawah!!!
`;
 conn.sendMessage(m.chat, {
      video: { url: "https://telegra.ph/file/82888311dcd50fa45c759.mp4"},
      gifPlayback: true,
      caption: 'Anda Telah Sampai, Selamat Memulai Kehidupan Baru',
      contextInfo: {
      externalAdReply: {
      title: `© Simulator Games`,
      body: global.author,
      thumbnailUrl: 'https://telegra.ph/file/25d47ec13c98bf1fafa75.jpg',
      sourceUrl: `https://chat.whatsapp.com/JR5Ac5IjVFQFab3fEbMXar`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
              let vn = "./mp3/menu.mp3"
      
	conn.sendFile(m.chat, vn, "menu.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
}
handler.command = /^(starts)$/i;
handler.register = true

export default handler;