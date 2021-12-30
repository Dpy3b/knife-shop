// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {

	const rangeItems = document.querySelectorAll('[data-range]');
	if (rangeItems.lenth){
		rangeItems.forEach(rangeItem => {
			const fromValue = rangeItem.querySelector('[data-range-from]');
			const toValue = rangeItem.querySelector('[data-range-to]');
			const item = rangeItem.querySelector('data-range-item');
			noUiSlider.create(item, {
				start: [fromValue.value, toValue.value], // [0,200000]
				//connect: [true, false],
				connect: true,
				range: {
					'min': [fromValue.dataset.rangeFrom],
					'max': [toValue.dataset.rangeTo]
				}
			});
		});
	}



}
rangeInit();
