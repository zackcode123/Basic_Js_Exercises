/*

 1 - Escreva um algoritmo para ler 10 números. 
 Todos os números lidos com valor inferior 
 a 40 devem ser somados. Escreva o valor final da soma efetuada. 

 */
soma=0
numero = 0
i = 1
do {
    numero = Number(prompt(`Digite o ${i}º numero`))
    i++
    if(numero <= 40 && numero >= 0){
        soma += numero
    }else{
        soma += 0
    }
} while (i <= 3)

alert(soma)