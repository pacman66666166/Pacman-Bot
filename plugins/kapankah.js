let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pregunta:* ${m.text}
*Respuesta:* ${Math.floor(Math.random() * 10)} ${pickRandom(['segundo', 'minuto', 'hora', 'día', 'semana', 'mes', 'año', 'década', 'siglo'])} lagi ...
`.trim(), m)
}
handler.help = ['', 'kah'].map(v => 'kapan' + v + ' ᴴᵃˢ ᵖʳᵉᵍᵘⁿᵗᵃˢ ᵈᵉ ˢᶦ ʸ ⁿᵒ')
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^kapan(kah)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

