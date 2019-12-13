function calculaMedia() {
    var numero1 = Number(document.getElementById("n1").value)
    var numero2 = Number(document.getElementById("n2").value)
    var operacao = Number(document.getElementById("calculo").value)

    if (operacao == "1")
        document.getElementById("resultado").value = numero1 - numero2
    if (operacao == "2")
        document.getElementById("resultado").value = numero1 + numero2
    if (operacao == "3")
        document.getElementById("resultado").value = numero1 * numero2
    if (operacao == "4")
        document.getElementById("resultado").value = numero1 / numero2
}