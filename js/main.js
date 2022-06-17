const sendBtn = document.querySelector('.button_form')
const errorText = document.querySelector('.validation_info')
const inputForm = document.querySelector('.email_input')
const formError = document.querySelector('.form')
const errorIcon = document.querySelector('.error_icon')
const filter =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const showError = () => {
	// function show errors by adding error classes with opacity
	errorText.classList.add('validation_error')
	formError.classList.add('form_error')
	errorIcon.classList.add('error_icon-show')
}

const clearError = () => {
	// function set input to default mode
	errorText.classList.remove('validation_error')
	formError.classList.remove('form_error')
	errorIcon.classList.remove('error_icon-show')
}

const validateEmail = () => {
	// function checks if email is properly written, reffering to declared filter (regexp)

	if (filter.test(inputForm.value)) {
		clearError()
	} else {
		showError()
	}
}

const checkForm = () => {
	// function checks if input is empty, if true than display error mode, else set input to default mode
	if (inputForm.value === '') {
		showError()
	} else {
		clearError()
	}
}

const clearInput = () => {
	//function checks if input and parahraph dont contain error classes, if not it clears input and log text after submitting
	if (!errorText.classList.contains('validation_error') && !inputForm.classList.contains('input_error')) {
		console.log(inputForm.value)
		inputForm.value = ''
	}
}

sendBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm()
	validateEmail()
	clearInput()
})
