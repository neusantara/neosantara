import fetch from 'node-fetch'
let handler = async (m) => {
let teks = `
Cara Paling Ezz Bekuin Dana
1.Lu Keluar Akun Dana Lu Dulu
2.Trs Masuk Pake Nomor Dana Target 
3.Trs spam pw nya asal" aja, ga sampe 10 Menit

Dan Beku Tapi Cuma 1 Jam 
Gpp lah 
`
	
  conn.reply(m.chat, teks, m, {
    contextInfo: {
        externalAdReply : {
            showAdAttribution: true,
            mediaType: 1,
            title: 'TUTOR MUDAH BEKU PAYMENT',
            thumbnail: await (await fetch(elainajpg.getRandom())).buffer(),
            renderLargerThumbnail: true,
            mediaUrl: hwaifu.getRandom(),
            sourceId: 'Biar Fotonya Ga Satu',
            sourceUrl: link.gc
        }
    }})
}
handler.help = ['textbeku']
handler.tags = ['gojek']
handler.command = /^(caramudah)$/i
handler.premium = true

export default handler