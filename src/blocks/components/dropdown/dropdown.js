// dropdown

export const dropDown = () => {
	const dropDownList = document.querySelectorAll('.js--dropdown');

	if(dropDownList.length === 0) return;

	dropDownList.forEach(dropDownWrapper => {
		const dropDownButton = dropDownWrapper.querySelector('.js--dropdown-head');
		const dropDownInput = dropDownWrapper.querySelector('.js--dropdown-input');
		const dropDownContent = dropDownWrapper.querySelector('.js--dropdown-content');
		const dropDownItemsList = dropDownWrapper.querySelectorAll('.js--dropdown-item');


		dropDownButton.addEventListener('click', function () {
			dropDownWrapper.classList.toggle('is-open');

			window.addEventListener('click', clickOutsideDrop)



		})

		dropDownItemsList.forEach(item => {
			item.addEventListener('click', function (event) {
				dropDownInput.value = this.innerHTML;
				dropDownWrapper.classList.remove('is-open');
				dropDownButton.innerHTML = this.innerHTML;

			})
		})


	})



	const clickOutsideDrop = (event) => {
		const target = event.target;

		if( ! Array.from(dropDownList).some(elem => elem.classList.contains('is-open')) ) return;

		if( target.closest('.js--dropdown-content') ||
			target.closest('.js--dropdown-item') ||
			target.closest('.js--dropdown-head')
		) return;

		removeIsOpenClass(dropDownList);

	}

	const removeIsOpenClass = (list) => {
		list.forEach(item => {
			item.classList.toggle('is-open');
		})
	}



}



