/*Faça um algoritmo que receba o valor do salário de uma pessoa e o valor de um financiamento pretendido. Caso o financiamento seja menor ou igual a 5 vezes o salário da pessoa, o algoritmo deverá escrever "Financiamento Concedido"; senão, escreverá "Financiamento Negado". Independente de conceder ou não o financiamento, 
o algoritmo escreverá a frase "Obrigado por nos consultar." */

salario = Number(prompt("Qual é o seu salario? "))
financiamento = Number(prompt("Quanto você deseja ? "))
permitido = salario*5

if(financiamento <= permitido){
    alert("Financiamento CONCEDIDO")
}else{
    alert("Financiamento NEGADO")
}
alert("Obrigado por nos consultar.")