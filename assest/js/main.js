const myMenu = document.querySelector('.menu');
const myNavbar = document.querySelector('.navbar');
const myExit = document.querySelector('.exit');
const myBack = document.querySelector('.background')
myMenu.onclick = function() {
    myNavbar.classList.remove('hidden');
    myBack.classList.remove('hidden2')
}

myExit.onclick = function() {
    myNavbar.classList.add('hidden');
    myBack.classList.add('hidden2');
}

myBack.onclick = function() {
    myNavbar.classList.add('hidden');
    myBack.classList.add('hidden2');
}
