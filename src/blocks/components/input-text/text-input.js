
export const textInput = () => {
	var im = new Inputmask({
		mask: "+7 (999) 999-99-99",
		clearMaskOnLostFocus: true
	});
	im.mask('.js--input-phone')

	let imMail = Inputmask("email");
	imMail.mask('.js--input-email');

	const textInputWrappersArr = document.querySelectorAll('.js--text-input-wrapper');

	if(textInputWrappersArr.length === 0) return;

	textInputWrappersArr.forEach(textInputWrapper => {
		const textInput = textInputWrapper.querySelector('.js--text-input');
		const textInputPlaceholder = textInputWrapper.querySelector('.js--text-placeholder');

		if(!textInput || !textInputPlaceholder) return;

		textInput.addEventListener('blur', function () {

			if(this.value) {
				textInputPlaceholder.classList.add('is-active');
				return;
			}

			textInputPlaceholder.classList.remove('is-active');



		})
	})
}
