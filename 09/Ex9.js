/*Fazer um algoritmo que leia o saldo inicial de um cliente de um 
banco e leia também um cheque que será descontado, ANALISE se o cheque 
poderá ser descontado ou não, se o cheque não poder ser descontado, 
mostre essa informação, caso contrário, 
desconte o cheque e informe o saldo ATUAL na tela.  */

salario = Number(prompt("Qual é o seu saldo bancario?"))
cheque = 20

if(salario >=1){
    alert(`Houve desconto de R$ ${cheque} no seu saldo`)
    alert(`Saldo atual R$ ${salario-cheque}`)
}else{
    alert("Sem saldo no momento")
}