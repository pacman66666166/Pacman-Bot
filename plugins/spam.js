let handler = async (m, { conn }) => {
  let link = "https://www.instagram.com/susi.li_/?hl=es-la"
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  for (let i=0;i<50;i++){
    conn.reply(m.chat, `👑Susi👑 ⚠⚠⚠⚠Instagram⚠⚠⚠⚠ !\n\n${link}`)
    await sleep(1250)
  }
}
handler.help = ['spam']
handler.tags = []
handler.command = /^(spam)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler
