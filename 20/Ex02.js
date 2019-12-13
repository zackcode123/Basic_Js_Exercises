/*Fazer um algoritmo usando 
função que receba como parâmetro o ano de
nascimento de uma pessoa e o 
ano atual. Retorne a idade desta pessoa.*/

anoNasc = Number(prompt("Qual é o ano que você nasceu?"))
anoAtual = Number(prompt("Qual é o atual que estamos?"))

x= function SaberIdade(x, y){
    return x - y
}
alert(`Você nasceu em ${anoNasc} então tem ${x(anoAtual, anoNasc)} anos`)