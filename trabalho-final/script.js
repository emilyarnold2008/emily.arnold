const botao = document.getElementById('dropdown-button');
const dropdownMenu = document.getElementById('dropdown-menu');

botao.addEventListener("click", function ()  {
/* if(dropdown.style.display==='none'){
    menu.style.display='flex';
    menu.style.flexDirection='column'
 }else{
    menu.style.display='none'};*/
 
    console.log("funcionou")
    dropdownMenu.classList.toggle("mostrar");
 });