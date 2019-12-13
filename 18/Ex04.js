/*Faça um algoritmo usando 
função que calcule e escreva a média aritmética dos
números inteiros entre 15 
(inclusive) e N. o valor 
de N deve ser passado como
parâmetro para a função.*/

valorInicial = Number(prompt("Didite um valor maior que 15: "))

x = function Media3000(x) {
    var total = 0
    var cont = 0
    for (i = 15; i <= x; i++) {
        total += i
        cont++
    }
    return cont / total
}

alert(x(valorInicial))
