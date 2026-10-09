
function mudarTema() {
    var botao = document.getElementById("tema");
    document.body.classList.toggle("claro");

    if (document.body.classList.contains("claro")) {
        botao.textContent = "Modo escuro";
        botao.setAttribute("aria-pressed", "true");
    } else {
        botao.textContent = "Modo claro";
        botao.setAttribute("aria-pressed", "false");
    }
}


function tel() {
    var campo = document.getElementById("tel");
    var tele = campo.value;
    var numeros = tele.replace(/\D/g, ""); // Deixa somente os números.

    // Retira o código do Brasil antes de reconstruir a máscara.
    if (tele.slice(0, 3) == "+55") {
        numeros = numeros.slice(2);
    } else if (numeros.length > 11 && numeros.slice(0, 2) == "55") {
        numeros = numeros.slice(2);
    }

    numeros = numeros.slice(0, 11); // DDD + telefone.
    var formato = "";

    if (numeros.length > 0) {
        formato = "+55 (" + numeros.slice(0, 2);
    }

    if (numeros.length > 2) {
        formato = formato + ") " + numeros.slice(2, 7);
    }

    if (numeros.length > 7) {
        formato = formato + "-" + numeros.slice(7);
    }

    // Telefone fixo: quatro números antes do hífen.
    if (numeros.length == 10) {
        formato = "+55 (" + numeros.slice(0, 2) + ") " + numeros.slice(2, 6) + "-" + numeros.slice(6);
    }

    campo.value = formato;
}
