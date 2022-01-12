

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


    var formdata = new FormData();
    formdata.append("prompt", final);

    var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };

    fetch("https://jabber-iq-gateway.api.cheogram.com/?to=cheogram.com", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


}

