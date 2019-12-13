/*Problema: Faça um algoritmo para ler 10 números e armazenar em um Array. Após a leitura total dos 10
números, o algoritmo deve escrever esses 10 números lidos na ordem inversa.*/


var tabela = []

for (let i = 0; i <= 9; i++) {
    tabela[i] = Number(prompt(`Digite o ${i+1}º numero`))
}

document.write(`A ordem inversa é: ${tabela.reverse()}`)
