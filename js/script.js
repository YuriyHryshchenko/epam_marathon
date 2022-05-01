const select = document.getElementById('select'),
    registationImage = document.getElementById('planet-img'),
    inputs = document.querySelectorAll('input'),
    button = document.querySelector('button'),
    burgerMenu = document.getElementById('burger-menu'),
    overlay = document.getElementById('menu');


inputs[0].addEventListener('input', changeInput);
inputs[1].addEventListener('input', changeInput);

function changeInput() {
    if ((inputs[0].value !== '') && (inputs[1].value !== '')) {
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }
}

select.addEventListener('change', function(e) {
    switch (true) {
        case this.value === 'mercury':
            registationImage.src = 'img/Planet_mercury.svg';
            break;
        case this.value === 'uranus':
            registationImage.src = 'img/Uran.svg';
            break;
        default:
            console.log('Don`t have image');
            break;
    }
});

burgerMenu.addEventListener('click', function() {
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
});