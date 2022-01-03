
/*
Документация по работе в шаблоне: https://www.lightgalleryjs.com/docs/
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/

// Подключение функционала "Чертогов Фрилансера"
import { isMobile, FLS } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Подключение базового набора функционала
import lightGallery from 'lightgallery';
// Плагины
// lgZoom, lgAutoplay, lgComment, lgFullscreen, lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo, lgMediumZoom
import lgThumbnail from 'lightgallery/plugins/thumbnail/lg-thumbnail.es5.js';
import lgFs from 'lightgallery/plugins/fullscreen/lg-fullscreen.es5.js';
import lgHash from 'lightgallery/plugins/hash/lg-hash.es5.js';

// Базовые стили
import '@scss/libs/gallery/lightgallery.scss';
// Стили дополнений
import '@scss/libs/gallery/lg-thumbnail.scss';
// import '@scss/libs/gallery/lg-video.scss';
// import '@scss/libs/gallery/lg-autoplay.scss';
// import '@scss/libs/gallery/lg-zoom.scss';
// import '@scss/libs/gallery/lg-pager.scss';
import '@scss/libs/gallery/lg-fullscreen.scss';
// import '@scss/libs/gallery/lg-share.scss';
// import '@scss/libs/gallery/lg-comments.scss';s
// import '@scss/libs/gallery/lg-rotate.scss';
// import '@scss/libs/gallery/lg-medium-zoom.scss';
// import '@scss/libs/gallery/lg-relative-caption.scss';

// Все стили
// import '@scss/libs/gallery/lightgallery-bundle.scss';

// Запуск
const galleries = document.querySelectorAll('[data-gallery]');
if (galleries.length) {
	let galleyItems = [];
	galleries.forEach(gallery => {
		galleyItems.push({
			gallery,
			galleryClass: lightGallery(gallery, {
				plugins: [lgThumbnail, lgHash, lgFs], //lgZoom,
				licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
				speed: 500,
				controls: true,
				customSlideName: true,
				thumbnail: true,
				thumbWidth: 100,
				thumbContHeight: 160,
				fullScreen: true,
			})
		})
	});
	// Добавляем в объект модулей
	flsModules.gallery = galleyItems;
}





