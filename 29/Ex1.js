/*Problema: Ler a nota de 5 alunos, calcular a média e mostrar essa média, mostrar também quantos alunos
ficaram com a sua nota acima da média. (usando Array)
*/


var soma = 0
var nota = []
for (let i = 0; i <= 4; i++) {
    nota[i] = Number(prompt(`Digite a ${i+1}º nota`))
    soma = nota[i] + soma
}

var media = soma/5
var alunos = 0
for (let i = 0; i < 4; i++) {
    if(nota[i] > media){
        alunos++
    }
}
   
document.write(`A media é ${media.toFixed(2)} e ${alunos} estao acima da media`)