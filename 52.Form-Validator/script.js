const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//Show input error message
function showError(input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

// Check email is valid
function isValidEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

//Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${input.id} is required`)
    } else {
      showSuccess(input)
    }
  })
}
//Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault()

  checkRequired([username, email, password, password2])
})
