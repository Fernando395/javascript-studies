function calc() {
    var n = document.getElementById('valor');
    var res = document.getElementById('seltab');

    if (n.value.length == 0) {
        alert (`preemcha o campo Numero:`);
    } else {
        num = Number(n.value);
        res.innerHTML = ' ';
          for (var i = 1; i < 10; i++) {
            var item = document.createElement('option');
            item.text = `${num} x ${i} = ${num*i} \n`;
            res.appendChild(item);
        }
    }
}