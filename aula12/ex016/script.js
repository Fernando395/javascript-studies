function calc() {
    var init = document.getElementById('init');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('pass');
    var resultado = document.getElementById('res');

    if (init.value.length == 0 || passo.value.length == 0 || fim.value.length == 0) {
        alert('revise os dados e tente novamente');
    } else {
        resultado.innerHTML = `contando:`;
        ini = Number(init.value);
        pass = Number(passo.value);
        f = Number(fim.value);
    }
    
    if (ini < f) {
        for (var i = ini; i <= f; i += pass) {
            resultado.innerHTML += `${i} \u{1F449}`;
        }
        resultado.innerHTML += `\u{1F6A9}`;
    } else {
        for (var i = ini; i >= f; i -= pass) {
            resultado.innerHTML += `${i} \u{1F449}`;  
        }
        resultado.innerHTML += `\u{1F6A9}`;   
    }
}