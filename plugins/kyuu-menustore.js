import {
    promises,
    readFileSync
} from "fs"
import {
    join
} from "path"
import {
    xpRange
} from "../lib/levelling.js"
import moment from "moment-timezone"
import os from "os"
import fs from "fs"
import fetch from "node-fetch"
import { pickRandom } from '../lib/other-function.js'

const defaultMenu = {
before: `*Welcome To Kyuu Storee*

乂 Name Bot : Kyuu Store
乂 Owner : PannOffc
乂 Status : Online
乂 Type : Plugins
乂 Prefix : [ . ]

--------{ 乂 All Menu }----------

乂 [ Menu Main ]
.menu
.owner
.tqto
.allmenu
.menulist

乂 [ Menu Store ]
.listpanel
.liststore
.listprem
.listsewa

乂 [ Menu Unban Text ]
.unbantext1
.unbantext2
.unbantext3
.unbantext4
.unbantext5
.unbantext6
.unbantext7
.unbantext8
.unbantext9
.unbantext10
.unbantext11
.unbantext12
.unbantext13
.unbantext14
.unbantext15
.unbantext16
.unbantext17
.unbantext18
.unbantext19
.unbantext20
.keramat

乂 [ Menu Fake Chat ]
.fakechat1
.fakechat2
.fakechat3
.fakechat4
.fakechat5

Note :
• Jangan Di Perjual Belikan!!
• Jangan Share Method Ini Ke Orang!!
• Minimal Stor Ke Admin!!

乂 [ Menu JB ]
.mc
.done
.proses
.tunda
.batal
.payment
.kirimpesanan

乂 [ Menu Jpm ]
.pushkontak
.broadcast
.jpm
.jpmgc

乂 [ Menu Downloader ]
.play
.ytmp4
.ytmp3
.tt
.pin
.ig
.igphoto
.yts
.yta
.ytv
.gitdl
.mediafire

乂 [ Menu Panel ]
 .sh
 .pannel
 .addgc
 .delgc
 .1gb
 .2gb
 .3gb
 .4gb
 .5gb
 .6gb
 .7gb
 .8gb
 .unli
 .delusr
 .delsrv
 .listusr
 .createadmin
 .listadmin
 .adminpanel
 
乂 [ Menu Sticker ]
.qc

乂 [ Menu Text Beku ]
.danatext
.gojektext
.ovotext

乂 [ Menu Owner ]
.gp
.sf
.addowner
.addprem
.df
.self
.public
.listpm
.listprem
.creategroup
.setbio
.setpp
.banchat
.unbanchat

乂 [ Menu Tutor ]
.nokos1
.nokos2
.nokos3
.nokos4
.nokos5
.mailnolimit
.bekuezz
.cratemethu

Note :
乂 Nokos 1 : Nokos +1
乂 Nokos 2 : Nokos +994
乂 Nokos 3 : Nokos +48
乂 Nokos 4 : Nokos +62 Clone
乂 Nokos 5 : Nokos +972
乂 CrateMethu : Create Method Unban


乂 [ Big Thanks To ]
•ぎ PannOffc : Pembuat Script/Creator Script
•ぎ Keyzz'Osaka : Penyedia Methode
•ぎ CeoOfDims : Penyedia Methode
•ぎ Rafz Wangsaff : Penyedia Methode
•ぎ CromLmao : Penyedia Methode
•ぎ Falzz : Penyedia Methode
•ぎ Abudzar Tele : Penyedia Methode
•ぎ Support
•ぎ Semuanya :v
`,
}
let handler = async (m, {
    conn,
    usedPrefix: _p,
    __dirname,
    args
}) => {
    await conn.sendMessage(m.chat, {
        react: {
            text: "🗿",
            key: m.key,
        }
    })
    let spas = "                "
    let spas2 = "         "
    let mojis = "╰╴"
    let index = 0
    let ktnya = ["Kamu nanya?",
        "No spam...",
        "Thanks..",
        "Menampilkan...",
        "Tunggu...",
        "Proses...",
        "Loading...",
        "Bertanya..",
        "Hooh..."
    ]
    let ktx = ktnya.getRandom()
    let tags = {
    }
    try {
        // DEFAULT MENU
        let dash = global.dashmenu
        let m1 = global.dmenut
        let m2 = global.dmenub
        let m3 = global.dmenuf
        let m4 = global.dmenub2

        // COMMAND MENU
        let cc = global.cmenut
        let c1 = global.cmenuh
        let c2 = global.cmenub
        let c3 = global.cmenuf
        let c4 = global.cmenua

        // LOGO L P
        let lprem = global.lopr
        let llim = global.lolm
        let tag = `@${m.sender.split("@")[0]}`

        /* Gobal */
        let glb = global.db.data.users
        let usrs = glb[m.sender]

        /* Hiasan List */
        let spas = "                "
        let spas2 = "         "
        let mojis = "╰╴"
        let index = 0
        let ktnya = ["Kamu nanya?", "No spam...", "Thanks..", "Menampilkan...", "Tunggu...", "Proses...", "Loading...", "Bertanya..", "Hooh..."]
        let ktx = ktnya.getRandom()

        /* TIME ZONE */
        let wib = moment.tz("Asia/Jakarta").format("HH:mm:ss")
        let wibh = moment.tz("Asia/Makassar").format("HH")
        let wibm = moment.tz("Asia/Makassar").format("mm")
        let wibs = moment.tz("Asia/Makassar").format("ss")
        let wita = moment.tz("Asia/Makassar").format("HH:mm:ss")
        let waktuwita = `${wibh} H ${wibm} M ${wibs} S`

        /* Info Menu */
        let mode = global.opts["self"] ? "Private" : "Publik"
        let _package = JSON.parse(await promises.readFile(join(__dirname, "../package.json")).catch(_ => ({}))) || {}
        let {
            age,
            exp,
            limit,
            level,
            role,
            registered,
            money
        } = glb[m.sender]
        let {
            min,
            xp,
            max
        } = xpRange(level, global.multiplier)
        let name = await conn.getName(m.sender)
        let premium = glb[m.sender].premiumTime
        let prems = `${premium > 0 ? "Premium": "Free"}`
        let platform = os.platform()

        //-----------TIME---------
        let ucpn = `${ucapan()}`
        let d = new Date(new Date + 3600000)
        let locale = "id"
        // d.getTimeZoneOffset()
        // Offset -420 is 18.00
        // Offset    0 is  0.00
        // Offset  420 is  7.00
        let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor(d / 84600000) % 5]
        let week = d.toLocaleDateString(locale, {
            weekday: "long"
        })
        let date = d.toLocaleDateString(locale, {
            day: "numeric",
            month: "long",
            year: "numeric"
        })
        let dateIslamic = Intl.DateTimeFormat(locale + "-TN-u-ca-islamic", {
            day: "numeric",
            month: "long",
            year: "numeric"
        }).format(d)
        let time = d.toLocaleTimeString(locale, {
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        })
        let _uptime = process.uptime() * 1000
        let _muptime
        if (process.send) {
            process.send("uptime")
            _muptime = await new Promise(resolve => {
                process.once("message", resolve)
                setTimeout(resolve, 1000)
            }) * 1000
        }
        let muptime = clockString(_muptime)
        let uptime = clockString(_uptime)

        //---------------------
        let totalfeatures = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
        let totalreg = Object.keys(glb).length
        let rtotalreg = Object.values(glb).filter(user => user.registered == true).length
        let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
            return {
                help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
                tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
                prefix: "customPrefix" in plugin,
                limit: plugin.limit,
                premium: plugin.premium,
                enabled: !plugin.disabled,
            }
        })
        for (let plugin of help)
            if (plugin && "tags" in plugin)
                for (let tag of plugin.tags)
                    if (!(tag in tags) && tag) tags[tag] = tag
        conn.menu = conn.menu ? conn.menu : {}
        let before = conn.menu.before || defaultMenu.before
        let footer = conn.menu.footer || defaultMenu.footer
        let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? "" : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
        let _text = [
            before ].join()
          let text = typeof conn.menu == "string" ? conn.menu : typeof conn.menu == "object" ? _text : ""
        let replace = {
            "%": "%",
            p: _p,
            uptime,
            muptime,
            me: conn.getName(conn.user.jid),
            npmname: _package.name,
            npmdesc: _package.description,
            version: _package.version,
            exp: exp - min,
            maxexp: xp,
            totalexp: exp,
            xp4levelup: max - exp,
            github: _package.homepage ? _package.homepage.url || _package.homepage : "[unknown github url]",
            tag,
            dash,
            m1,
            m2,
            m3,
            m4,
            cc,
            c1,
            c2,
            c3,
            c4,
            lprem,
            llim,
            ucpn,
            platform,
            wita,
            mode,
            _p,
            money,
            age,
            tag,
            name,
            prems,
            level,
            limit,
            name,
            weton,
            week,
            date,
            dateIslamic,
            time,
            totalreg,
            totalfeatures,
            rtotalreg,
            role,
            readmore: readMore
        }
        text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, "g"), (_, name) => "" + replace[name])
        const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => "./src/avatar_contact.png")
let arc = pickRandom(global.AraChu2)
        let p1 = './tumnil/1.jpg'
let p2 = './tumnil/2.jpg'
let p3 = './tumnil/3.jpg'
let p4 = './tumnil/4.jpg'
let p5 = './tumnil/5.jpg'
let prn = `${pickRandom([p1,p2,p3,p4,p5])}`
let japan = [
  'https://a.top4top.io/p_1962cau3w1.jpg',
  'https://k.top4top.io/p_1962w2hyp1.jpg',
  'https://j.top4top.io/p_1962ufc7p1.jpg',
  'https://h.top4top.io/p_19629eev81.jpg',
  'https://d.top4top.io/p_1962ahcw21.jpg',
  'https://c.top4top.io/p_1962qiubc1.jpg',
  'https://b.top4top.io/p_1962ck87p1.jpg',
  'https://l.top4top.io/p_1962i85aq1.jpg',
  'https://i.top4top.io/p_19629cg431.jpg',
  'https://g.top4top.io/p_1962o5sp41.jpg',
  'https://f.top4top.io/p_1962vn5rc1.jpg',
  'https://e.top4top.io/p_1962nvj4g1.jpg',
  'https://d.top4top.io/p_1962847na1.jpg',
  'https://c.top4top.io/p_1962tt38s1.jpg',
  'https://b.top4top.io/p_1962vpyp71.jpg',
  'https://a.top4top.io/p_1962fyik51.jpg',
  'https://k.top4top.io/p_1962q7ura1.jpg',
  'https://l.top4top.io/p_19625eppj1.jpg',
  'https://j.top4top.io/p_196252lk91.jpg',
  'https://i.top4top.io/p_1962p9nlk1.jpg'
]
let mn = pickRandom(japan)
let nm = pickRandom(global.Pallmenu)
        // Biasa
   await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      amount1000: 99999 * 1000,
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
      extendedTextMessage: {
      text: text,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
await conn.sendReact(m.chat, "☑️", m.key)
await conn.sendFile(m.chat, './mp3/menu2.mp3', '', null, m, true)  
        // Biasa
} catch (e) {
await conn.reply(m.chat, "Maaf, menu sedang error", m)
throw e
}
}
handler.command = /^(menu1)$/i
handler.register = false

export default handler
//----------- FUNCTION -------


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
    let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
    return [h, " H ", m, " M ", s, " S "].map(v => v.toString().padStart(2, 0)).join("")
}

function clockStringP(ms) {
    let ye = isNaN(ms) ? "--" : Math.floor(ms / 31104000000) % 10
    let mo = isNaN(ms) ? "--" : Math.floor(ms / 2592000000) % 12
    let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000) % 30
    let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24
    let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
    return [ye, " *Years 🗓️*\n", mo, " *Month 🌙*\n", d, " *Days ☀️*\n", h, " *Hours 🕐*\n", m, " *Minute ⏰*\n", s, " *Second ⏱️*"].map(v => v.toString().padStart(2, 0)).join("")
}

function ucapan() {
    const time = moment.tz("Asia/Makassar").format("HH")
    let res = "Selamat DiniHari ☀️"
    if (time >= 4) {
        res = "Good Morning 🌄"
    }
    if (time >= 10) {
        res = "Good Afternoon ☀️"
    }
    if (time >= 15) {
        res = "Good Afternoon 🌇"
    }
    if (time >= 18) {
        res = "Good Night 🌙"
    }
    return res
}