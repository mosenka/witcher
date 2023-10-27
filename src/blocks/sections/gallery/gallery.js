

export const gallery = () => {
	const galleryMoreButton = document.querySelector('.js--gallery-more');
	const gallery = document.querySelector('.js--gallery');

	if(!galleryMoreButton || !gallery) return;

	galleryMoreButton.addEventListener('click', function () {
		gallery.classList.toggle('is-hidden');
		if(gallery.classList.contains('is-hidden')) return;

		this.innerHTML = 'Скрыть';
	})



}

