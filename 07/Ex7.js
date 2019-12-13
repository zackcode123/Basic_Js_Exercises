/*Ler um valor e escrever se é positivo, negativo ou zero */


numero = Number(prompt("Digite um valor: "))

if(numero < 0){
    alert(`O numero ${numero} é NEGATIVO`)
}else if(numero >= 1){
    alert(`O numero ${numero} é POSITIVO`)
}else{
    alert(`O numero ${numero} é ZERO`)
}