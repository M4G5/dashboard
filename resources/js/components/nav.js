/* OPEN MENU PROFILE */
const menuProfile = document.querySelector('#btn-profile');
const profileMenu = document.querySelector('#profileMenu');

/* menuProfile.addEventListener('click', function() {
    profileMenu.classList.toggle('hidden');
    setTimeout(() => {
        profileMenu.classList.toggle('opacity-0');
        profileMenu.classList.toggle('scale-95');
        profileMenu.classList.toggle('opacity-100');
        profileMenu.classList.toggle('scale-100');
    }, 10);
}); */
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