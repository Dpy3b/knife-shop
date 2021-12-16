// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";

document.addEventListener('click', documentActions);
function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('[data-parent]')){
        const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        const subMenu = document.querySelectorAll(`[data-submenu="${subMenuId}"]`);
        const catalogMenu = document.querySelectorAll('.catalog-header');
        if(subMenu){
            catalogMenu.classList.toggle('_submenu-show')
            targetElement.classList.toggle('_submenu-active');
            subMenu.classList.toggle('_submenu-open');
        }else{
            console.log('Поломка');
        }
        e.preventDefault();
    }
}