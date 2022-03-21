const header_menu = document.querySelector('#menu_inner');
const btn_menu = document.querySelector('#btn_menu');

btn_menu.addEventListener("click", function(){
    header_menu.classList.toggle('menu__hidden');
})
