
console.log('hello')

const header = document.querySelector("header");

window.addEventListener ("scroll",function() {
    header.classList.toggle ("sticky", this.window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon')
let main = document.querySelector('.main')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    main.classList.toggle('open')
}
