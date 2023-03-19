function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
 
msg.innerHTML = `Agora são ${hora} horas `
if(hora >= 0 && hora < 12){
    // bom dia 
   img.src = 'fotomanha.png'
   document.body.style.background = ' #E3A92C'
} else if ( hora >= 12 && hora < 18){
    // boa tarde
    img.src = 'fototarde.png'
    document.body.style.background = '#B6D2EDn'
} else {
    //boa noite
    img.src = 'fotonoite.png'
    document.body.style.background = '#987EB7'
    
}
}