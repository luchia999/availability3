const button = document.querySelector('.menu-switch');

button.onclick = function() {
   
    if (button.classList.contains('opened')) {
        button.classList.remove('opened');
        button.setAttribute('aria-expanded', 'on');
    } else {
        button.classList.add('opened');
        button.setAttribute('aria-expanded', 'off');
    }
};