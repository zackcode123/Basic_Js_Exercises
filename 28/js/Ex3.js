function calendario() {

    switch (document.getElementById("mes").value) {
        case "0":
            alert(selectdata(0))
            break;
        case "1":
            alert(selectdata(1))
            break;
        case "2":
            alert(selectdata(2))
            break;
        case "3":
            alert(selectdata(3))
            break;
        case "4":
            alert(selectdata(4))
            break;
        case "5":
            alert(selectdata(5))
            break;
        case "6":
            alert(selectdata(6))
            break;
        case "7":
            alert(selectdata(7))
            break;
        case "8":
            alert(selectdata(8))
            break;
        case "9":
            alert(selectdata(9))
            break;
        case "10":
            alert(selectdata(10))
            break;
        default:
            alert(selectdata(11))
    }

}
function selectdata(data) {
    var d = new Date()
    d.setMonth(data)
    var mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][d.getMonth()]

    return mes
}
