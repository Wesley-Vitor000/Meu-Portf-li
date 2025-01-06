/* CONFIGURAÇÃO DO MENU HAMBÚRGUER P/ TELAS MENORES (Formato de X)*/

/*Aqui eu guardei o ".menu-hamburguer" dentro da variável menuHamburguer, e adicionei um ouvinte "addEventListener" que toda vez que houver um "('click')" a "function toggleMenu" é chamada.*/

const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
  toggleMenu()
});

/*A função verifica se na minha ".nav-responsive " existe uma class="change"; Se sim, ela retira se não  ela adiciona*/

function toggleMenu () {
  const nav = document.querySelector('.nav-responsive');
  menuHamburguer.classList.toggle('change');
  
  /*Se menuHamburguer na lista de classes dele tiver a classe "change" então a ".nav" que antes tinha display: none; vai receber display: block; (isso la no CSS).*/
  
  /*Caso contrário, se não tiver, a ".nav" que antes tinha o display: block; passará a ser "display: none;".*/
  
  if (menuHamburguer.classList.contains('change')) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
}