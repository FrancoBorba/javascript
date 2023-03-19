let num = [5,8,4,6,7]
/*
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4]) 
 Em vez de demosntra o vetor da forma acima , utilizar looping como abaixo
*/ 

 /* for(let pos =0  ; pos<num.length ; pos++){
   // console.log(num[pos])
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
} 
Outra forma de fazer mais simplificada*/
// for/ in otimizado para variaveis compostas e objetos 
for(let pos in num ){
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
    // let pos in num (Para cada posição em num mostra pos) leitura em portugues
}  

