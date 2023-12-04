
console.log('hello')

// Navbar responsive
function Navbar(){
    let nav = document.getElementById("nav")
    if(nav.style.display =="block"){
        nav.style.display = "none"
    } else {
        nav.style.display ="block"
    }
}

// Color navbar

const main = document.getElementsByClassName("main")[0];
console.log(main)
window.onscroll = function(){
    let scroll = window.pageYOffset
    if (scroll > 300){
        main.style.backgroundColor = "black"
    }else{
        main.style.backgroundColor = "transparent"
    }
}
// window.addEventListener ("scroll",function() {
//     header.classList.toggle ("sticky", this.window.scrollY > 0);
// });

// let menu = document.querySelector('#menu-icon')
// let main = document.querySelector('.main')

// menu.onclick = () => {
//     menu.classList.toggle('bx-x')
//     main.classList.toggle('open')
// }
