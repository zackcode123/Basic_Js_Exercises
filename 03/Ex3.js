/*3 - Ler 2 números (prompt), efetuar as 4 operações 
matemática (adição, subtração, multiplicação e divisão), 
mostrar o resultado de cada operação em uma alert diferente. */

numero1 = Number(prompt("Escreva o primeiro numero: "))
numero2 = Number(prompt("Escreva o segundo numero: "))

alert(`${numero1} + ${numero2} = ${numero2+numero1}`)
alert(`${numero1} - ${numero2} = ${numero2-numero1}`)
alert(`${numero1} / ${numero2} = ${numero2/numero1}`)
alert(`${numero1} * ${numero2} = ${numero2*numero1}`)

