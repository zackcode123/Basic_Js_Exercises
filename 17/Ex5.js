/*5 - Fazer um algoritmo que leia o nome de uma pessoa o ano de nascimento e o ano atual (prompt), 
e mostre (alert) quantos anos essa pessoa têm.  */

nome = prompt("Qual é o seu nome? ")
ano_Nascimento = Number(prompt(`E qual ano você nasceu, ${nome}?`))
ano_Atual = Number(prompt(`E qual ano estamos agora, ${nome}?`))
idade = ano_Atual - ano_Nascimento

alert(`Legal ${nome}! Você tem ${idade} anos`)