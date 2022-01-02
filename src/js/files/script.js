// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


document.addEventListener('click', documentActions);
const menuBlocks = document.querySelectorAll('.submenu-catalog__block');
if (menuBlocks.length){
    menuBlocks.forEach(menuBlock => {
        const menuBloksItems = menuBlock.querySelectorAll('.submenu-catalog__category').length;
        menuBlock.classList.add(`submenu-catalog__block--${menuBloksItems}`);
    })
}
function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('[data-parent]')){
        const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
        if(subMenu){
            const activeLink = document.querySelector('._submenu-active');
            const activeBlock = document.querySelector('._submenu-open');

            if(activeLink && activeLink !== targetElement){
                activeLink.classList.remove('_submenu-active');
                activeBlock.classList.remove('_submenu-open');
                document.documentElement.classList.remove('submenu-open');
            }

            document.documentElement.classList.toggle('submenu-open');
            targetElement.classList.toggle('_submenu-active');
            subMenu.classList.toggle('_submenu-open');

        } else {
            console.log('Нет такого подменю');
        }
        e.preventDefault();
    }
    if (targetElement.closest('.menu-top-header__link--catalog')){
       // const catalogLink = targetElement.closest('.menu-top-header__link--catalog');
        document.documentElement.classList.add('catalog-open');
        e.preventDefault();
    }
    if (targetElement.closest('.menu-catalog__back')){
        document.documentElement.classList.remove('catalog-open');
        document.querySelector('._submenu-active') ? document.querySelector('._submenu-active').classList.remove('_submenu-active') : null;
        document.querySelector('._submenu-open') ? document.querySelector('._submenu-open').classList.remove('_submenu-open') : null;
        e.preventDefault();
    }
    if (targetElement.closest('.submenu-catalog__back')){
        document.documentElement.classList.remove('submenu-open');
        document.querySelector('._submenu-active') ? document.querySelector('._submenu-active').classList.remove('_submenu-active') : null;
        document.querySelector('._submenu-open') ? document.querySelector('._submenu-open').classList.remove('_submenu-open') : null;
        e.preventDefault();
    }
}


/* document.querySelector('.filter-catalog__title').addEventListener('click', function(e){
    if(innerWidth < 992){
        document.querySelector('.filter-catalog__items').classList.toggle('_active');
    }
}); */