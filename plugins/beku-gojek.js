import fetch from 'node-fetch'
let handler = async (m) => {
let teks = `
Hi, Saya melaporkan akun (08xxxx) Telah menipu saya dengan nominal kerugian sebesar (Rp 2.000.000) Awal mula akun tersebut  telah menghubungi saya lewat aplikasi WhatsApp dan Menawarkan sebuah akun game dengan harga murah akan tetapi akun tersebut meminta transfer terlebih dahulu. Setelah saya transfer akun WhatsApp saya di blokir dan saya mengalami kerugian sebesar (Rp 2.000.000) Mohon kepada pihak gopay untuk membekukan akun penipu tersebut secara permanen dan mohon kembalikan saldo saya. Terimakasih

To : customerservice@gojek.com   
`
	
  conn.reply(m.chat, teks, m, {
    contextInfo: {
        externalAdReply : {
            showAdAttribution: true,
            mediaType: 1,
            title: 'GOJEK BEKU PAYMENT',
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
handler.command = /^(textgojek)$/i
handler.premium = true

export default handler