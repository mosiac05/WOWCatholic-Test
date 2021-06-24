/*Onboarding*/
const onboardingBody = document.querySelector('.onboarding');
const mainTag = document.querySelector('main');

setTimeout(function() {
	onboardingBody.style.display = 'none';
	mainTag.style.opacity = '1';
}, 6000)

const cloverSubmitBtn = document.querySelector('#clover_submit');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');

const signUpForm = document.querySelector('#signup-form');

const cloverAlert = document.querySelector('.clover-alert');

// Check for valid email address
	emailInput.addEventListener('keyup', function () {
		let email = this.value;
		let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(!filter.test(email)) {			
			this.classList.add('error-input');
			emailError.classList.remove('hidden');
			this.focus();
		} else {
			this.classList.remove('error-input');
			emailError.classList.add('hidden');
		}
	});

	//Check against empty password
	passwordInput.addEventListener('keyup', function () {
		let password = this.value;

		if(!password || password.length < 6) {			
			this.classList.add('error-input');
			passwordError.classList.remove('hidden');
			this.focus();
		} else {
			this.classList.remove('error-input');
			passwordError.classList.add('hidden');
		}
	});

	const checkData = (e) => {
		let email = emailInput.value;
		let password = passwordInput.value;

		let emailHasError = emailInput.classList.contains('error-input');
		let passwordHasError = passwordInput.classList.contains('error-input');

		if(!email || emailHasError) {
			emailInput.focus();
		} else if (!password || passwordHasError) {
			passwordInput.focus();
		} else {
			cloverSubmitBtn.style.cursor = 'pointer';
			cloverSubmitBtn.type = 'submit';
		}
	};

	cloverSubmitBtn.addEventListener('mouseover', checkData, false)
	cloverSubmitBtn.addEventListener('click', checkData, false)

	signUpForm.addEventListener('submit', (e) => {
		e.preventDefault();
		cloverSubmitBtn.innerText = 'Processing...'

		setTimeout(function () {
			cloverAlert.style.display = 'block';
		} ,3000);
	});

