/*
Uma loja está levantando o valor total de todas as mercadorias 
 em estoque. Escreva um algoritmo que permita a entrada das seguintes 
 informações:
a) o número total de mercadorias no estoque;
b) o valor de cada mercadoria. 
Ao final mostrar o valor total em estoque e a média de valor das mercadorias. 
*/

n_MercEstoque = Number(prompt("Qual o numero total de Mercadoria no Estoque? "))
soma=0
i = 1

do {
    n_ValorMerc = Number(prompt(`Qual valor da mercadoria numero ${i}? `))
    i++
    soma = soma + n_ValorMerc
    
} while (i <= n_MercEstoque)

alert(`O valor total de estoque é ${soma} e media do valor das mercadorias é ${soma/n_MercEstoque}`)