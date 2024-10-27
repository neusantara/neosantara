import { createHash } from 'crypto'
let handler = async function (m, { args }) {
  if (!args[0]) throw 'Masukan Serial Nomor, Kalau Gatau Ketik .simceksn'
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Serial Nomor Salah'
  user.registered = false
  m.reply('```Sukses Unreg !```')
}
handler.help = ['simunreg']
handler.tags = ['simulator']

handler.command = /^(simunreg)?$/i
handler.register = true

export default handler