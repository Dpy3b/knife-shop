// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

// window.addEventListener("load", function (e) {
// 	// Событие window load срабатывает после полной загрузки страницы, то есть когда загружены все изображения, все стили, все шрифты
// 	// вот тогда мы хотим интегрировать этот фон
// 	document.body.insertAdjacentHTML('beforeend', `<div class="main-bg"></div>`);
// });

document.addEventListener('click', documentActions);
function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('[data-parent]')){
        const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
        const catalogMenu = document.querySelector('.catalog-header');
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