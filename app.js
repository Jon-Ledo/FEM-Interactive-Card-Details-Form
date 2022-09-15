// Your users should be able to: 

// - Fill in the form and see the card details update in real-time
// - Receive error messages when the form is submitted if:
//   - Any input field is empty
//   - The card number, expiry date, or CVC fields are in the wrong format
// - View the optimal layout depending on their device's screen size
// - See hover, active, and focus states for interactive elements on the page

// - Update the details on the card as the user fills in the fields
// - Validate the form fields when the form is submitted
// - If there are no errors, display the completed state
// - Reset the form when the user clicks "Continue" on the completed state

const cardName = document.querySelector('.card-name')
const cardNumber = document.querySelector('.card-number')
const cardDateMonth = document.querySelector('.card-date__month')
const cardDateYear = document.querySelector('.card-date__year')
const securityCVC = document.querySelector('.card-security')
const formInputName = document.querySelector('.form-input__name')
const formInputCardNumber = document.querySelector('.form-input__card-number')
const formInputCardMonth = document.querySelector('.input-date__month')
const formInputCardYear = document.querySelector('.input-date__year')
const formInputCVC = document.querySelector('.form-input__cvc')


formInputName.addEventListener('input', () => {
  if (formInputName.value === '') {
    cardName.textContent = 'Jane Appleseed'
  } else {
    cardName.textContent = formInputName.value
  }
})

formInputCardNumber.addEventListener('input', () => {
  if (formInputCardNumber.value === '') {
    cardNumber.textContent = '0000 0000 0000 0000'
  } else {
    cardNumber.textContent = formInputCardNumber.value
  }
})

formInputCardMonth.addEventListener('input', () => {
  if (formInputCardMonth.value === '') {
    cardDateMonth.textContent = '00'
  } else {
    cardDateMonth.textContent = formInputCardMonth.value
  }
})

formInputCardYear.addEventListener('input', () => {
  if (formInputCardYear.value === '') {
    cardDateYear.textContent = '00'
  } else {
    cardDateYear.textContent = formInputCardYear.value
  }
})

formInputCVC.addEventListener('input', () => {
  if (formInputCVC.value === '') {
    securityCVC.textContent = '000'
  } else {
    securityCVC.textContent = formInputCVC.value
  }
})