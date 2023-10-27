
export const form = () => {
	const form= document.querySelector('.js--form');
	const title= document.querySelector('.js--form-title');
	const thanks = document.querySelector('.js--thanks');

	if(!form || !thanks || !title) return;

	form.addEventListener('submit',  (event) => {
		event.preventDefault();

		form.classList.add('is-hidden');
		title.classList.add('is-hidden');
		thanks.classList.remove('is-hidden')

		console.log('submit')
	})
}
