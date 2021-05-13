let handler = async m => m.reply(`
 ^    ^    ^    ^      
 /S\  /U\  /S\  /I\   
<___><___><___><___>

Si quieres hablar con la dueña personalmente:

https://wa.me/50373619339

"No es mas fuerte el que no cae si no el que se levanta"
                                        
`.trim()) 
handler.help = ['samu']
handler.tags = ['info']
handler.command = /^samu$/i

module.exports = handler
