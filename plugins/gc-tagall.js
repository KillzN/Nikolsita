let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `✉️ 𝙈𝙀𝙉𝙎𝘼𝙅𝙀: ${pesan}\n👤 𝙈𝙄𝙀𝙈𝘽𝙍𝙊𝙎: _*${participants.length}*_`;
  let teks = `⺀ꨄ 𝐌𝐄𝐍𝐂𝐈𝐎𝐍 𝐆𝐄𝐍𝐄𝐑𝐀𝐋 ꨄ${oi}\n\n➥ 🕷 𝙼𝙴𝙽𝚂𝙰𝙹𝙴:*_\n`
  for (let mem of participants) {
  teks += `┊ᡣ𐭩 @${mem.id.split('@')[0]}\n`}
  teks += `╰───── 𝐍𝐢𝐤𝐨𝐥 𝐁𝐨𝐭 ─────╯
`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
  handler.admin = true
  handler.group = true
  export default handler