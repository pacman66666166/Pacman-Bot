let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 8640000000) {
    global.DATABASE._data.users[m.sender].exp += 90000000
    m.reply('90000000')
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  } else m.reply('Ya has reclamado hoy:)')
}
handler.help = ['daily ᴿᵉᶜˡᵃᵐᵃ ˣᵖ ˢᵒˡᵒ ᵘⁿᵃ ᵛᵉᶻ ᵖᵒʳ ᵈᶦᵃ', 'claim ᴿᵉᶜˡᵃᵐᵃ ˣᵖ ˢᵒˡᵒ ᵘⁿᵃ ᵛᵉᶻ ᵖᵒʳ ᵈᶦᵃ']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

