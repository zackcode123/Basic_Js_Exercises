var livro = {
    nomeAutor: "",
    titulo: "",
    numEdicao: "",
    nomeEditora: "",
    localPublic: "",
    anoPublic: ""
}

function formatar() {

    livro.nomeAutor = document.getElementById("nomeAutor").value
    livro.titulo = document.getElementById("titulo").value
    livro.numEdicao = document.getElementById("numEdicao").value
    livro.localPublic = document.getElementById("localPublic").value
    livro.nomeEditora = document.getElementById("nomeEditora").value
    livro.anoPublic = document.getElementById("anoPublic").value


    document.getElementById("refBiblic").value = livro.nomeAutor.slice(7, 14).toUpperCase() +
        ", " + livro.nomeAutor.slice(0, 1).toUpperCase() +
        ". " + firstToUpper(livro.titulo) +
        ": " + livro.numEdicao + ". " + "ed."+ livro.localPublic + ":" + livro.nomeEditora + "," + livro.anoPublic


}

function firstToUpper(texto) {
    var palavras = texto.toLowerCase().split(" ");

    for (var i = 0; i < palavras.length; i++) {
        var p = palavras[i];

        palavras[i] = p[0].toUpperCase() + p.slice(1);
    }
    return palavras.join(" ");
}