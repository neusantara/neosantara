import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu = `> PannStoree Menyediakan :
- Panel Pteropactyl
- Sc Bot V1
- Sc Bot V3
- Murid Unbanned
- Murid Logo Ai
- Reseller Panel
- Admin Panel
- Pt Panel
- Buat Bot
- Jasa Jadibot / Pake Sc Sendiri
- Sewa Bot Jaga Group

> List Panel
- 1gb 1.5k
- 2gb 3k
- 3gb 4.5k
- 4gb 5k
- 5gb 7.5k
- 6gb 10k
- Unli 13k

Panel Server : Private

> Keuntungan : 
1. Panel Pteropactyl
- Bisa Run Bot
- On 24 jam / Kalo bisa
- Bisa Buat Bot Push Kontak
- Dll

2. Sc Bot V1
- Bisa Open Murid Logo Ai, Karena Ada Fitur Bingimg
- Bisa Pakai Bot
- Fitur 50+
- Dll

3. Sc Bot V3
- Dapet Fitur Enc
- Menu Canggih Dan Bagus
- Totalfitur 1000+
- Dll

4. Murid Unbanned 
- Dapet All Text
- Real PT @hamzoffc
- Bisa Buka Jasa Unban
- Dll

5. Murid Logo Ai 
- Bisa Buat Logo Ai
- Dikasi 5 Prompt Untuk Membuat Logo
- Bisa Jualan Logo Ai
- Dll

6. Reseller Panel
- Bisa Buat Panel Sepuasnya
- Bisa Open Murpush
- Bisa Jual Panel
- Jan Dibagikan
- Bisa Buka Jasa Bot Pushkontak
- Dll

7. Admin Panel
- Dapat 1 Admin Panel
- Bisa Buat Panel 2 Server
- Bisa Open Murpush
- Bisa Jual Panel
- Dll

8. PT Panel
- Bisa Buat Admin Panel
- Bisa Buat Reseller Panel 
- Bisa Jualan Panel
- Bisa Open Murpush
- Dijadiin Owner Di Bot CPanel
- Dll

9. Buat Bot
- Dapet Panel
- Bisa Makai Bot Sepuasnya / Kalo bisa
- Nanti Di Send Panel Untuk Nyambung
- Sc Pake Punya Sendiri
- Dll

10. Jasa Jadibot / Pake Sc Sendiri
- Run Bot + Jadibot
- Bisa Makai Bot Sepuasnya
- Bisa Jadi Owner / Pake Sc Sendiri
- Bisa Open Sewa Bot
- Dll

11. Sewa Bot Jaga Group
- Menjauhkan Dari Anak Jb
- Bisa On Antilink
- Ada Yg Send Link? Dikick
- Bisa Main Bot 
- Masa Sewa Habis? Bisa Order Lagi
- Dll

> Price :
- Panel Pteropactyl : 1.5k - 13k
- Sc Bot V1 : 5k
- Sc Bot V3 : 25k 
- Murid Unbanned : 15k
- Murid Logo Ai : 5k
- Reseller Panel : 5k - 10k
- Admin Panel : 12k - 17k
- Pt Panel : 25k - 35k
- Buat Bot : 10k
- Jasa Jadibot / Pake Sc Sendiri : 15k
- Sewa Bot Jaga Group : 2k - 40k
`
m.reply(krtu)
}
  handler.help = ['store']
  handler.tags = ['main']
  handler.command = /^(store)$/i
  
  export default handler