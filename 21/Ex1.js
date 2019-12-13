/*Faça um algoritmo usando função que 
receba por parâmetro um valor de um
produto e retorne um novo valor 
deste produto atualizado em 25%.*/

valor = Number(prompt("Digite um valor"))

function adicao(x){
    return x+(x*25)/100
}
alert(adicao(valor))