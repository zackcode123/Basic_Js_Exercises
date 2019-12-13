/*- Ler dois números (inicial e final). 
Escreva quantos número pares e quantos números impares encontram- se 
entre os dois números fornecidos pelo usuário.  */

n_Inicial = Number(prompt("Iniciar com: "))
n_Final = Number(prompt("Terminar no: "))
impar = 0
par = 0

for (var i = n_Inicial; i <= n_Final; i++) {
    if (i % 2 == 0) {
        par ++
    } else {
        impar ++
    }
}
alert(`De ${n_Inicial} ao ${n_Final} temos ${par} pares e ${impar} impares`)