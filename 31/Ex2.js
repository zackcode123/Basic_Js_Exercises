/*- Problema: Crie um programa lendo dois Arrays (A e B) de 5 elementos cada, liste os elementos destes dois
Arrays em um terceiro Array de 10 posições*/


var a =[]
var b =[]

for (let i = 0; i <= 4; i++) {
    a[i] = Number(prompt( `Digite o ${i+1}º valor`))
}

for (let i = 0; i <= 4; i++) {
    b[i] = Number(prompt( `Digite o ${i+1}º valor do item 2`))
}

var c = []
c = a.concat(b)

for (let i = 0; i <= 9; i++) {
    document.write(`${c[i]} <br>F`)
}