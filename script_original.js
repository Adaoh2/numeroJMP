

function numeroPays() {
    let code = document.getElementById('codePays').value;

    if (code == "") {
        code = document.getElementById('codePays').value;
    } else {
        code = "+" + document.getElementById('codePays').value;
    }
    console.log(code);
    return code;
}

function afficherMdp() {
    let numero = document.getElementById('num').value;
    var final = document.getElementById("res2");
    let codePays = numeroPays();

    const parDroite = ")";
    const parGauche = "(";
    const tiret = "-";
    const espace = " ";

    

    if (numero.startsWith('+')) {
        numero = numero.replace(/\D/g,'')
        final.value = "+" + numero + "@cheogram.com";
        final.innerHTML = final.value;
        numero.select();
        numero.setSelectionRange(0, 99999); /* For mobile devices */
        numero.focus;

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(final.value);
    }
    else {
        numero = numero.replace(/\D/g,'')
        final.value = codePays + numero + "@cheogram.com";
        final.innerHTML = final.value;

        final.select();
        document.execCommand("copy");

    }
}