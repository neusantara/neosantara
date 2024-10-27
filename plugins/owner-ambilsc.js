import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, text, usedPrefix: _p, command, isROwner }) => {
let fkontak = { key: { fromMe: true, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `120363195377875432@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': author, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: false}}}

switch (command) {
case 'ambilsc1': {
let aku1 = 'https://www.mediafire.com/file/r4utcn7jyybtd4j/%25F0%259D%2591%25AD%25F0%259D%2592%2593%25F0%259D%2592%2586%25F0%259D%2592%259A%25F0%259D%2592%2582_-_%25F0%259D%2591%25B4%25F0%259D%2591%25AB_.zip/file'
    conn.mediafire = conn.mediafire ? conn.mediafire : {}
    if (m.sender in conn.mediafire) return m.reply('Kamu Masih Mendownload!')
    try {
        conn.mediafire[m.sender] = true
        let { url, url2, filename, ext, aploud, filesize, filesizeH } = await mediafiredl(aku1)
        let { data } = await conn.getFile(url)
        await conn.sendMessage(m.chat, { document: data, fileName: filename, mimetype: ext }, { quoted: fkontak })

    } catch (e) {
        throw e
    } finally {
        delete conn.mediafire[m.sender]
    }}
break
//nomor2
case 'ambilsc2': {
let aku2 = 'https://www.mediafire.com/file/apkjyqvtccc39vu/Jorgexv2.tar.gz/file'
    conn.mediafire = conn.mediafire ? conn.mediafire : {}
    if (m.sender in conn.mediafire) return m.reply('Kamu Masih Mendownload!')
    try {
        conn.mediafire[m.sender] = true
        let { url, url2, filename, ext, aploud, filesize, filesizeH } = await mediafiredl(aku2)
        let { data } = await conn.getFile(url)
        await conn.sendMessage(m.chat, { document: data, fileName: filename, mimetype: ext }, { quoted: fkontak })

    } catch (e) {
        throw e
    } finally {
        delete conn.mediafire[m.sender]
    }}
break
//nomor3
case 'ambilsc3': {
let aku3 = 'https://www.mediafire.com/file/4n5hbbbym0j58en/Gamon-Tipe-Case.zip/file'
    conn.mediafire = conn.mediafire ? conn.mediafire : {}
    if (m.sender in conn.mediafire) return m.reply('Kamu Masih Mendownload!')
    try {
        conn.mediafire[m.sender] = true
        let { url, url2, filename, ext, aploud, filesize, filesizeH } = await mediafiredl(aku3)
        let { data } = await conn.getFile(url)
        await conn.sendMessage(m.chat, { document: data, fileName: filename, mimetype: ext }, { quoted: fkontak })

    } catch (e) {
        throw e
    } finally {
        delete conn.mediafire[m.sender]
    }}
break
handler.help = ['ambilsc1', 'ambilsc2', 'ambilsc3']
handler.tags = ['ambilsc']
handler.command = ['ambilsc1', 'ambilsc2', 'ambilsc3']
handler.rowner = true
export default handler