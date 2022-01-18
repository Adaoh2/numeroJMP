function numeroPays() {
    let code = document.getElementById('codePays').value;

    if (code == "") {
        code = document.getElementById('codePays').value;
    } else {
        code = "+" + document.getElementById('codePays').value;
    }
    console.log("area code: " + code);
    return code;
}

function conditionsNumero(type) {
    let numero = document.getElementById('num').value;
    var final = document.getElementById("res2");
    let codePays = numeroPays();

    if (type == "single") {
        if (numero.startsWith('+')) {
            numero = numero.replace(/\D/g, '')
            final.value = "+" + numero + "@cheogram.com";
            final.innerHTML = final.value;
            final.select();
            final.setSelectionRange(0, 99999); /* For mobile devices */
            document.execCommand("copy");
            /* Copy the text inside the text field */
            navigator.clipboard.writeText(final.value);
        }
        else {
            numero = numero.replace(/\D/g, '')
            final.value = codePays + numero + "@cheogram.com";
            final.innerHTML = final.value;

            final.select();
            final.setSelectionRange(0, 99999); /* For mobile devices */
            document.execCommand("copy");
        }
    } else {
        if (numero.startsWith('+')) {
            numero = numero.replace(/\D/g, '')
            final.value = numero;
            final.innerHTML = final.value;
        }
        else {
            numero = numero.replace(/\D/g, '')
            final.value = codePays + numero;
            final.innerHTML = final.value;
        }
    }
    return final;
}

let numbers = []

function afficherMdp(type) {
    if (type == "single") {
        let final = conditionsNumero("single");
        // window.open("xmpp:+11234567890@cheogram.com");
        window.open("xmpp:" + final.value + "?message", "", "");
        console.log("Final number: " + final.value);
    } else {
        let arrayLength = numbers.length;
        numbers[arrayLength - 1] = numbers[arrayLength - 1] + "@cheogram.com";
        let final = numbers.toString();

        // window.open("xmpp:+11234567890@cheogram.com");
        window.open("xmpp:" + final + "?message", "", "");
        console.log("Final numbers: " + final);
        removeOptions();
        numbers = [];
    }
}

function addNumbersToArray(number) {
    numbers.push(number.value);
    numbers.sort(function (a, b) { return a - b })

    console.log(numbers);
}

function addNumber(removeOptions) {
    var x = document.getElementById("numerosGroup");
    var option = document.createElement("option");
    let final = conditionsNumero();
    option.text = final.value;
    x.add(option);
    addNumbersToArray(final);

}

function removeOptions() {
    var x = document.getElementById("numerosGroup");
    var option = document.createElement("option");

    var x = document.getElementById("numerosGroup");
    var option = document.createElement("option");
    let final = conditionsNumero();
    option.text = final.value;


    for (let i = 0; i < numbers.length; i++) {
        console.log("cleared " + i);
        x.remove(option);
    }

}
