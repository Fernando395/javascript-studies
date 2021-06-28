let num = document.getElementById('numero');
let add = document.getElementById('adicionados');
let res = document.getElementById('res');
let vetor = [];

function adiciona() {
    if (isNumero(num.value) && !inLista(num.value,vetor)) {
        vetor.push(Number(num.value));
        var item = document.createElement('option');
        item.text = `Número ${Number(num.value)} adicionado`;
        add.appendChild(item);
        res.innerHTML = '';
    } else {
        alert(`número invalido ou já adicionado na lista`);
    }
    num.value = ' ';
    num.focus();
}

function isNumero(numero) {
  if (Number(numero) >= 1 && Number(numero) <= 100 ) {
        return true;
    } else {
        return false;
    }
}

function inLista(n ,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function finalizar() {
    if (vetor.length == 0) {
        alert('Adicione valores');
    } else {
        let total = vetor.length;
        let maior = vetor[0];
        let menor = vetor[0];
        let soma = 0;
        let media = 0;
        
        for (let pos in vetor){
            soma += vetor[pos];
            if (vetor[pos] > maior) {
                maior = vetor[pos];
            }
        
            if (vetor[pos] < menor) {
                menor = vetor[pos];
            } 
        }

        media = soma / total;

        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`;
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`;
        res.innerHTML += `<p>A média dos valores é ${media}</p>`;
    }
}