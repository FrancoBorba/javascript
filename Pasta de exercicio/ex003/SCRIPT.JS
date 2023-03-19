function contar(){

let inicio = window.document.getElementById('txti')
let fim = window.document.getElementById('txtf')
let passo = window.document.getElementById('txtp')
let res = window.document.getElementById('res')

if (inicio.value.length == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
    window.alert('ERRO- FALTAM DADOS')
} else {
         res.innerHTML = ' Contando: <br>' // <br> quebrar linha
             let i = Number(inicio.value)
             let f = Number(fim.value)
             let p = Number(passo.value)
             if(p <= 0){
                window.alert('Passo invalido , considerando passo = 1')
                p = 1
             }
        if (i < f ) {
            for( let c = i; c <= f ; c += p){
             res.innerHTML += ` ${c} `
                    // contagem crescente
            }
        }  else {
                for( let c = i; c >= f ; c -= p){
                    res.innerHTML += ` ${c} `
                    // contagem decrescente
                }
                 }
             
       }
}

