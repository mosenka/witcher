import Swiper, { Navigation, Pagination } from "swiper";


export const teamSlider = () => {
	const teamSliderWrapper = document.querySelector('.js--team-slider');
	if(!teamSliderWrapper) return;

	const slider = new Swiper(teamSliderWrapper, {
		modules: [Navigation, Pagination],
		loop: true,
		initialSlide: 1,
		slidesPerView: 1,
		spaceBetween: 10,
		speed: 400,

		navigation: {
			nextEl: '.js--team-next',
			prevEl: '.js--team-prev',
		},
		pagination: {
			el: '.js--team-pagination',
			type: "progressbar",
			progressbarFillClass: 'team-slider__pagination--active',
		},
		breakpoints: {
			1199.98: {
				slidesPerView: 4,
				spaceBetween: 24,
			},
			992.98: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			575.98: {
				slidesPerView: 2,
				spaceBetween: 20,
			},

		}
	})

}





