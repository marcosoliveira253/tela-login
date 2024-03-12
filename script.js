var input = document.querySelector('#input input');
var img = document.querySelector('#input img');

img.addEventListener('click', function () {
    input.type = input.type == 'text' ? 'password' : 'text';
});

function mudarImagem(img) {
    let input = document.getElementById('password');
    if (input.type === "password") {
        input.type == "text";
        img.src = "./img/olho.png";
    } else {
        input.type == "password";
        img.src = "./img/olho-fechado.png";
    }
}
