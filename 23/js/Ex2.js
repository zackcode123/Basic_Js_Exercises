function calculaMedia() {
    var numero1 = parseFloat(document.getElementById("n1").value)
    var operacao = parseFloat(document.getElementById("calculo").value)

    if (operacao == "1") {
        result = numero1 / 4.15
        document.getElementById("resultado").value = result.toFixed(3)
    }

    if (operacao == "2") {
        result = numero1 / 5.10
        document.getElementById("resultado").value = result.toFixed(3)
    }
    if (operacao == "3") {
        result = numero1 / 0.07
        document.getElementById("resultado").value = result.toFixed(3)
    }

    if (operacao == "4") {
        result = numero1 / 0.03
        document.getElementById("resultado").value = result.toFixed(3)
    }

}