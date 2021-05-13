let handler = async m => m.reply(`
╭─〘 𝗦𝘂𝘀𝗶𝟲𝟲𝟲 〙
│ • 𝑃𝑎𝑦𝑝𝑎𝑙 [paypal.me/smonterroza12]
│ • Pero con que me sigas en instagram me basta:)
│ https://www.instagram.com/susana_monterroza_/
╰────
╭─「 Mi número por si quieres que agregue el bot a un grupo 」
│ > Wa.me/4917243333338
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi ᴾᵒʳ ˢᶦ ᑫᵘᶦᵉʳᵉˢ ᶦⁿᶠᵒʳᵐᵃᶜᶦᵒⁿ ᵈᵉˡ ᵇᵒᵗ']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
