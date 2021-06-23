const navbarBurger = document.querySelector('.navbar-burger');
const navbarBurgerAlt = document.querySelector('.navbar-burger__alt');
const navbarList = document.querySelector('.navbar-list');
const bodyTag = document.querySelector('body');

navbarBurger.addEventListener('click', function(){
	navbarList.style.display = 'block';
	navbarBurgerAlt.style.display = 'block';
	bodyTag.style.background = 'black';
	this.style.display = 'none';
});

navbarBurgerAlt.addEventListener('click', function(){
	navbarList.style.display = 'none';
	navbarBurger.style.display = 'block';
	bodyTag.style.background = '';
	this.style.display = 'none';
})