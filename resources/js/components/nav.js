import {toggleMultiple,delayTransition} from '../functions.js';
/* OPEN MENU PROFILE */
const menuProfile = document.querySelector('#btn-profile');
const profileMenu = document.querySelector('#profileMenu');
const menuSidebar = document.querySelector("#menuSide");

menuProfile.addEventListener('click', function() {
    if (!profileMenu.classList.contains('hidden')) {
        // Si el menú está visible, primero se anima la salida
        profileMenu.classList.add('opacity-0', 'scale-95');        
        // Espera el tiempo de la animación antes de ocultar
        setTimeout(() => {
            profileMenu.classList.add('hidden');
        }, 300); // Asegúrate de que este tiempo coincida con `duration-300` en CSS
    } else {
        // Si el menú está oculto, se muestra con la animación de entrada
        profileMenu.classList.remove('hidden');
        setTimeout(() => {
            profileMenu.classList.remove('opacity-0', 'scale-95');
        }, 10);  // Un pequeño retraso para asegurarse de que la transición se aplique
    }
});

/* CLOSE profileMenu WHEN CLICK IN ARROUND */
document.addEventListener('click', function(event){
    if (!profileMenu.contains(event.target) && !menuProfile.contains(event.target)) {
        profileMenu.classList.add('opacity-0', 'scale-95');        
        setTimeout(() => {
            profileMenu.classList.add('hidden');
        }, 300);

    }
});


// BOTON MENU (burguer) LATERAL
const asideMenu = document.querySelector('#asideMenu');
const logo = document.querySelector('#text-logo');
const arow = document.querySelector('#menuSide');
menuSidebar.addEventListener('click', function(){
    delayTransition([asideMenu,logo,arow],'sidebar-close','txt-logo-hidden','right-row-menu','sidebar-open','txt-logo-visibility','left-row-menu');
});


