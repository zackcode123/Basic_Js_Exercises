var aluno = {
    nome: "",
    rg: "",
    cpf: "",
    email: "",
    nota1: "",
    nota2: "",
    nota3: "",
    media: "",
    situacao: ""
}


function calcular() {
    n1 = Number(document.getElementById("nota1").value)
    n2 = Number(document.getElementById("nota2").value)
    n3 = Number(document.getElementById("nota3").value)


    var m = (n1 + n2 + n3) / 3

    if (m <= 5) {
        document.getElementById("situacao").value = "Reprovado"
    }
    else if (m > 5 && m <= 7) {
        document.getElementById("situacao").value = "Recuperação"
    }
    else {
        document.getElementById("situacao").value = "Aprovado"
    }
    document.getElementById("media").value = m.toFixed(2)

}


function info() {

    aluno.nome = document.getElementById("nome").value
    aluno.rg = document.getElementById("rg").value
    aluno.cpf = document.getElementById("cpf").value
    aluno.email = document.getElementById("email").value
    aluno.nota1 = document.getElementById("nota1").value
    aluno.nota2 = document.getElementById("nota2").value
    aluno.nota3 = document.getElementById("nota3").value
    aluno.media = document.getElementById("media").value

}

