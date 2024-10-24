//FUNCION PARA ALTERAR VARIOS ESTILOS EN UN ELEMETO HTML CON CLASSS LIST TOGGLE
export function toggleMultiple(element, ...classes) {
    classes.forEach((cls) => {
        element.classList.toggle(cls);
    });
}

export function delayTransition(elements = [], ...classes) {
    const isClosed = elements[0].classList.contains("sidebar-close");
    const isOpen = elements[0].classList.contains("sidebar-open");
    const startIndex = isClosed ? 3 : 0;
    elements.forEach((element, index) => {
        if (!isClosed) {
            if (isOpen) {
                element.classList.remove(classes[3 + index]);
            }
            element.classList.add(classes[startIndex + index]);
        } else {
            setTimeout(() => {
                element.classList.remove(classes[index]);
                element.classList.add(classes[startIndex + index]);
            }, 500);
        }
    });
}
