function carregar(){
var msg = document.getElementById('msg');
var img = document.getElementById('imagem');
var date = new Date()
var hora = date.getHours();
if (hora >= 0 && hora < 12) {
    img.src = "manha.png"
    document.body.style.background = '#ff9c4a'
    msg.innerHTML = `Agora são ${hora} horas Bom dia`
} else if (hora >= 12 && hora < 18){
    img.src = "tarde.png"
    document.body.style.background = '#92abbf'
    msg.innerHTML = `Agora são ${hora} horas Boa tarde`
} else {
    img.src = "noite.png"
    document.body.style.background = '#312845'
    msg.innerHTML = `Agora são ${hora} horas Boa noite`
}




}
