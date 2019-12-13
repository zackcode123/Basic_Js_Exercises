/* Ler o salário fixo e o valor das vendas
 efetuadas pelo vendedor de uma empresa. 
 Sabendo-se que ele recebe uma comissão de 10% sobre o 
total das vendas, calcular e escrever o seu salário total.  */

salario = Number(prompt("Qual é o seu salario?: "))
vendas = Number(prompt("Qual valor total de suas vendas?: "))
comissao = (vendas*10)/100

alert(`Você conseguiu R$: ${comissao} em comissão e vai receber: \nR$: ${salario+comissao}`)