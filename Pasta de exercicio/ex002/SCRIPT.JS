function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
if (fano.value.lengh == 0 || Number(fano.value) > ano ) {
    window.alert(' ERRO. VALOR INVALIDO')
} else {
var fsex = document.getElementsByName('radsex')
var idade = ano - Number(fano.value)
var genero = ''
var img = document.createElement('img')
img.setAttribute('id', 'foto')

   if(fsex[0].checked){
    genero = 'Homem'
    if( idade >=0 && idade < 10){
        //criança 
        img.setAttribute('src', 'homemcrianca.png')
        } else if (idade >=10 && idade < 21 ){
        //jovem
        img.setAttribute('src','homemjovem.png')
        }else if( idade >= 21 && idade < 65){
        // adulto
       img.setAttribute('src','homemadulto.png')
        } else {
        // idoso
       img.setAttribute('src', 'homemidoso.png')
        }
        
 } else if(fsex[1].checked) {
    genero = ' Mulher'
    if( idade >=0 && idade < 10){
        //criança 
        img.setAttribute('src', 'mulhercrianca.png')
        } else if (idade >=10 && idade < 21 ){
        //jovem
        img.setAttribute('src','mulherjovem.png')
        }else if( idade >= 21 && idade < 65){
        // adulto
        img.setAttribute('src','mulheradula.png')
        } else {
        // idoso
        img.setAttribute('src', 'mulheridosa.png')
        }
                          }
    res.innerHTML = ` Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
    res.style.textAlign ='center'
    }
}