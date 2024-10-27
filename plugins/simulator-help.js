import fs from "fs";
let handler = async (m, { conn, args, command }) => {
  let _muptime;
  if (process.send) {
    process.send("uptime");
    _muptime =
      (await new Promise((resolve) => {
        process.once("message", resolve);
        setTimeout(resolve, 1000);
      })) * 1000;
  }
  let muptime = clockString(_muptime);
  await conn.sendReact(m.chat, "🕒", m.key)
  await conn.sendReact(m.chat, "1⃣", m.key)
  await conn.sendReact(m.chat, "2⃣", m.key)
  await conn.sendReact(m.chat, "3⃣", m.key)
  await conn.sendReact(m.chat, "☑️", m.key)
  conn.reply(m.chat, `[ Simulator V.2.0 (Khusus Beta Sc)]\n\n乂 Penggunaan Fitur Tersebut\n> .simverify\nUntuk Login Ke Akun\n> .simstarts \nUntuk Memulaikan Dunia Simulator\n> .simunreg " SN "\nUntuk Logout Ke Akun Simulator\n> .simtembak @user\nUntuk Menembak Pasangan Kamu\n> .simputus @user\nUntuk Putus Dengan Pasangan Kamu\n> .simikhlas\nUntuk Mengikhlas Kan Apabila Tidak Memilih Keduanya\n> .simtolak\nUntuk Menolak Menjadi Pasangan\n> .simcekp\nUntuk Cek Apakah Kamu Punya Pasangan\n> .simanak\nUntuk Berbicara Dengan Anak Anda\n> .simkerja\nUntuk Bekerja\n> .simhelp\nPanduan Lengkap\n\n[ Simulator V.2.0 Beta ]\n•ぎ Fitur By PannOffc`, m, {
  thumbnail: fs.readFileSync("./thumbnail.jpg"),
    contextInfo: {
      externalAdReply: {
      showAdAttribution: true,
        mediaUrl: sig, 
        mediaType: 1,
        description: "anu",
        title: bottime,
        body: wm2,
        previewType: 0,
        thumbnailUrl : 'https://telegra.ph/file/3c318c9dab8a65a07724b.png', 
        sourceUrl: sgc,
        renderLargerThumbnail: true       
      },
    },
  });
  await conn.sendFile(m.chat, './mp3/old1.mp3', '', null, m, true)
};

handler.help = ["simhelp"];
handler.command = ["simhelp"];
export default handler;

function clockString(ms) {
  let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000);
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24;
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [
    d,
    " *ʜᴀʀɪ*\n ",
    h,
    " *ᴊᴀᴍ*\n ",
    m,
    " *ᴍᴇɴɪᴛ*\n ",
    s,
    " *ᴅᴇᴛɪᴋ* ",
  ]
    .map((v) => v.toString().padStart(2, 0))
    .join("");
}