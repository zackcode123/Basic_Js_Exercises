/*Fazer um algoritmo usando 
função que receba como parâmetro um saldo inicial
de um cliente de um banco e 
também um cheque que será descontado, retorne o
novo saldo ou a mensagem de 
saldo insuficiente caso o saldo seja menor que o
cheque.*/

salario = Number(prompt("Qual é o seu salario?"))
cheque = Number(prompt("Qual é o valor do cheque?"))

x= function SaldoBank(saldo, cheque){
    if(saldo > cheque){
        return saldo - cheque
    }else{
        return "Saldo insificiente"
    }
}

alert(`Seu saldo é ${salario} e com o desconto do cheque de ${cheque}\n
 Saldo atual: ${x(salario, cheque)}`)