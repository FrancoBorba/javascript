let num = [5,8,4]
num[3] = 6
// num[3] = 6 adiciona o valor 6 no indice 3 num[posição] = valor
// num.push() adiona um vetor na ultima posição
num.push(7)
num.length // demonstra o comprimento do vetor/array
num.indexOf() // busca a posição do valor inserido , se o valor não existir retorna 1
num.sort() // coloca os elementos em ordem crescente
console.log( `Nosso vetor é ${num}`)
console.log(`O vetor tem ${num.length} posições/indices`)
console.log(`O vetor em ordem crescente é ${num.sort()}`)
console.log(`O valor 4 está na posição ${num.indexOf(4)}`)
