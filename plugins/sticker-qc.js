/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

import { sticker } from '../lib/sticker.js';
import axios from 'axios';
import uploadImage from '../lib/uploadImage.js';
import { webp2png } from '../lib/webp2mp4.js';

let handler = async (m, { conn, text, usedPrefix , command }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  const { mtype } = m;
  
  if (!text) return m.reply('Teksnya Mana Sayang?');
  if (text.length > 30) return m.reply('Maksimal 30 Teks!');

  let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg');

  if (m.quoted) {
if (q.mtype == 'extendedTextMessage') {
conn.sendMessage(m.chat, {
      react: {
        text: "🕛",
        key: m.key,
      },
    });
let objj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#fffffffff",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
        "entities": [],
        "avatar": true,
        "from": {
          "id": 1,
          "name": m.name,
          "photo": { "url": pp }
        },
        "text": text,
        "replyMessage": {
          "name": await conn.getName(m.quoted.sender),
          "text": m.quoted.text || '',
          "chatId": m.chat.split('@')[0],
        }
      }]
    };

    const bufferr = await Quotly(objj);

    let stikerr = await sticker(bufferr, false, global.packname, global.author);
    if (stikerr) return conn.sendFile(m.chat, stikerr, 'Quotly.webp', '', m);
    conn.sendMessage(m.chat, {
      react: {
        text: "✅",
        key: m.key,
      },
    });
} else if (q.mtype == 'stickerMessage' || q.mtype == 'imageMessage') {
let img = await q.download();

    conn.sendMessage(m.chat, {
      react: {
        text: "🕛",
        key: m.key,
      },
    });
    let up;
    if (/webp/g.test(mime)) {
      up = await webp2png(img);
    } else if (/image/g.test(mime)) {
      up = await uploadImage(img);
    } else ''

    let obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#ffffffff",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
        "entities": [],
        "media": { "url": up },
        "avatar": true,
        "from": {
          "id": 1,
          "name": m.name,
          "photo": { "url": pp }
        },
        "text": text,
        "replyMessage": {}
      }]
    };

    const buffer = await Quotly(obj);

    let stiker = await sticker(buffer, false, global.packname, global.author);
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m);
    conn.sendMessage(m.chat, {
      react: {
        text: "✅",
        key: m.key,
      },
    });
    }
  } else {
    conn.sendMessage(m.chat, {
      react: {
        text: "🕛",
        key: m.key,
      },
    });
    let obj2 = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#ffffffff",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
        "entities": [],
        "avatar": true,
        "from": {
          "id": 1,
          "name": m.name,
          "photo": { "url": pp }
        },
        "text": text || text,
        "replyMessage": {}
      }]
    };

    const buffer = await Quotly(obj2);

    let Sstiker = await sticker(buffer, false, global.packname, global.author);
    if (Sstiker) return conn.sendFile(m.chat, Sstiker, 'Quotly.webp', '', m);
    conn.sendMessage(m.chat, {
      react: {
        text: "✅",
        key: m.key,
      },
    });
  }
}; 

handler.help = ['qc'];
handler.tags = ['sticker'];
handler.command = /^(qc|quoted|quotly)$/i;
handler.limit = true;

export default handler;

async function Quotly(obj) {
  let json;

  try {
    json = await axios.post(
      "https://quote.btch.bz/generate",
      obj,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (e) {
    return e;
  }

  const results = json.data.result.image;
  const buffer = Buffer.from(results, "base64");
  return buffer;
}