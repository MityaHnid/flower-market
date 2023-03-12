function openingMobileMenu() {
	const BURGER = document.querySelector('.burger');
	const BURGERCLOSED = document.querySelector('.wrapperBurgerClosed');
	const NAVHEADER = document.querySelector('.navHeader');

	BURGER.addEventListener('click', () =>{
		NAVHEADER.classList.add('open');
	});

	BURGERCLOSED.addEventListener('click', () =>{
		NAVHEADER.classList.remove('open');
	});	
}

export default openingMobileMenu();

