import { Fancybox } from "@fancyapps/ui";


export const privacy = () => {
	const openPrivacyButtonsArr = document.querySelectorAll('.js--open-privacy')

	const closeButton = '<button data-fancybox-close class="popup__close js--popup-close"><svg class="popup__icon"><use xlink:href="img/icons.svg#close"></use></svg></button>';

	if(openPrivacyButtonsArr.length === 0) return;

	openPrivacyButtonsArr.forEach(openPrivacyButton => {
		openPrivacyButton.addEventListener('click', (event) => {
			event.preventDefault();

			new Fancybox(
				[{
					src: '#privacy',

				}], {
					tpl: {
						closeButton: closeButton
					}
				})
		})



	})

}
