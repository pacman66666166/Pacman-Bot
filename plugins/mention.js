let handler = async (m, { conn, text }) => {
  if (!text) throw 'Sin texto'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['mention ᴱᵗᶦᑫᵘᵉᵗᵃ ᵃ ᵗᵒᵈᵒˢ']
handler.tags = ['tools']

handler.command = /^mentiin$/i

module.exports = handler
